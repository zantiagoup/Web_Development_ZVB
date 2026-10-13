import { AppError } from '../utils/appError.js';

// TODO: Implement 'protect' middleware
// 1. Extract 'authorization' header from req.headers
// 2. Check if header exists and starts with 'Bearer '
// 3. Extract token string
// 4. Validate token:
//    - If token === 'sustain-user-token', attach req.user = { id: 101, name: 'Elena', role: 'user' }
//    - If token === 'sustain-admin-token', attach req.user = { id: 999, name: 'Prof. Gabriel', role: 'admin' }
//    - Otherwise, pass next(new AppError('Unauthorized: Invalid or missing token', 401))

export const protect = (req, res, next) => {
    // WRITE YOUR PROTECTION LOGIC HERE

    const authHeader = req.headers.authorization; //read from header
    //sanity check, no header or wrong format
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return next(new AppError('Auth Err: Invalid or missing token', 401));
    }


    const token = authHeader.split(' ')[1];

    //token checker (hardcoded asl)

    switch (token) {
        case 'sustain-user-token':
            req.user = { id: 101, name: 'Elena', role: 'user' };
            break;
        case 'sustain-admin-token':
            req.user = { id: 999, name: 'Mr. Gabriel', role: 'admin' };
            break;
        default:
            return next(new AppError('Auth Err: Invalid or missing token', 401));
    }

    next(); //goes through 
};

// TODO: Implement 'requireAdmin' middleware
// 1. Verify if req.user exists and req.user.role === 'admin'
// 2. If true, call next()
// 3. Otherwise, pass next(new AppError('Forbidden: Admin privilege required for this action', 403))


export const requireAdmin = (req, res, next) => {
    // WRITE YOUR ADMIN CHECK LOGIC HERE
    //has to exist and be what we looking for
    if (req.user && req.user.role === 'admin') {
        return next(); //continue
    }


    next(new AppError('Auth Err: Insuficient permissions', 403)); // not an admin, kick
};
