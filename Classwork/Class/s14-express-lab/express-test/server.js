import express from 'express';
import { getWeatherFrom } from './services/meteoService.js';

//const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());//middleware

const scientists = [
    { id: 1, name: "Dr. Elena Rostova", department: "Climate", projects: 4 },
    { id: 2, name: "Prof. Marcus Vance", department: "Oceanography", projects: 2 },
    { id: 3, name: "Dr. Aisha Khan", department: "Climate", projects: 7 }
];

const initiatives = [];

app.get('/', (req, res) => {
    res.send('<h1>SustainHub API is running</h1>');
});


// /api/scientists?dept=***
app.get('/api/scientists', (req, res) => {
    const { dept } = req.query; // this is called destructuring (decomposing an object to extract certain variables)
    if (!dept) return res.status(200).json(scientists);

    const result = scientists.filter((scientist) => scientist.department.toLowerCase() === dept.toLowerCase());
    res.status(200).json(result); // empty array if nothing matches
});

// /api/scientists/:id
app.get('/api/scientists/:id', (req, res) => {
    const scientistId = parseInt(req.params.id, 10);
    const scientist = scientists.find((scientist) => scientist.id === scientistId);
    if (!scientist) {
        return res.status(404).json({ error: "No scientist found." });
    }
    res.status(200).json(scientist);
});


app.get('/api/initiatives', (req, res) => {
    res.status(200).json(initiatives);
});

app.post('/api/initiatives', (req, res) => {
    const { title, budget, department } = req.body ?? {}; // body is undefined if no JSON was sent
    // budget of 0 still counts as provided
    if (!title || budget === undefined || budget === null || budget === '' || !department) {
        return res.status(400).json({ error: "Title, budget, and department are required." });
    }
    const initiative = { id: initiatives.length + 1, title, budget, department };
    initiatives.push(initiative);
    res.status(201).json(initiative);
});

app.get('/greet', (req, res) => {
    const { name, city } = req.query
    res.type("text/plain").send(`hello  ${name}, how is the weather in ${city}`);
});

app.post('/about', (req, res) => {
    res.send(`Second endpoint.${req._internalMsg}`)
});

//2nd var: middleware chain
app.get('/about',
    (req, res, next) => {
        const user_type = "admin";
        req._internalMsg = " This is my project";
        if (user_type === "viewer") {
            return next(new Error("Viewer isn't an admin"));
        }
        next(); //like "continue" in for loop
    },
    (req, res) => {
        res.send(`Second endpoint.${req._internalMsg}`);
    }
);


const cities = {
    GDL: { lat: 20.6597, long: -103.3496, name: "Guadalajara" },
    LSN: { lat: 46.52, long: 6.63, name: "Lausanne" },
};

app.get("/weather/:city", async (req, res, next) => {
    const { city } = req.params;
    if (!cities[city]) return next(new Error("City code is invalid"));
    const { lat, long, name } = cities[city];
    res.send(await getWeatherFrom(lat, long, name)); // Express 5 sends rejected promises to the error handler
});

app.use((req, res) => {
    res.status(404).json({ error: "Endpoint not found" });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: err.message });
})



app.listen(PORT, () => {
    console.log(`🚀 SustainHub API Server running at http://localhost:${PORT}`)
});