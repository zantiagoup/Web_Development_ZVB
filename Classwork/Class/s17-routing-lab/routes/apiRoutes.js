import express from 'express';
import { protect, requireAdmin } from '../middleware/authMiddleware.js'; // fix middleware (we were looking for the wrong file)
import { AppError } from '../utils/appError.js';

const router = express.Router();

// Simulated In-Memory Database (MOCK DATA)
let initiatives = [
    { id: 1, title: 'Solar Canopy Expansion', priority: 'High', status: 'Active' },
    { id: 2, title: 'Campus Composting Loop', priority: 'Medium', status: 'In Review' }
];

//id counter, only goes up so ids dont repeat after a delete
let nextId = initiatives.length + 1;

// TODO: Use router.route('/') with METHOD CHAINING
// Chain .get() -> protected, returns all initiatives
// Chain .post() -> protected, validates body title & priority, creates & returns new initiative (201)
//mounted on /api/ so the path here needs /initiatives
router.route('/initiatives')
    .get(protect, (req, res) => {
        res.status(200).json(initiatives);
    })


    .post(protect, (req, res) => {
        //no JSON sent, body is undefined
        if (!req.body) {
            return res.status(400).json({ message: 'Title and priority are required' });
        }

        const { title, priority } = req.body;
        if (!title || !priority) {
            return res.status(400).json({ message: 'Title and priority are required' }); //return so it doesnt send 2 responses
        }

        const newInitiative = {
            id: nextId,
            title,
            priority,
            status: 'Active'
        };
        initiatives.push(newInitiative);
        nextId++; //ready for the next one
        res.status(201).json(newInitiative);
    });

//not fina do this twice
function printNotFound(initiativeId, next) {
    return next(new AppError(`No initiative found for id ${initiativeId}`, 404));
}

// TODO: Use router.route('/:id') with METHOD CHAINING
// Chain .get() -> protected, returns single initiative or 404
// Chain .delete() -> protected + requireAdmin, deletes initiative by ID or 404
router.route('/initiatives/:id')
    .get(protect, (req, res, next) => {
        const initiativeId = parseInt(req.params.id, 10);
        const initiative = initiatives.find((initiative) => initiative.id === initiativeId);

        //sanity check
        if (!initiative) {
            return printNotFound(initiativeId, next);
        }
        res.status(200).json(initiative);
    })

    //protect first (who are you?), then requireAdmin (are you admin?), then the handler using multievent
    .delete(protect, requireAdmin, (req, res, next) => {
        const initiativeId = parseInt(req.params.id, 10);
        const initiative = initiatives.find((initiative) => initiative.id === initiativeId);

        //no initiative on SCheck
        if (!initiative) {
            return printNotFound(initiativeId, next);
        }

        //remove selected
        const index = initiatives.indexOf(initiative); // pos in arr
        initiatives.splice(index, 1);
        res.status(200).json({ message: `Initiative ${initiativeId} deleted`, deleted: initiative });
    });

export default router;
