const express = require('express');
const cors = require('cors');

const app = express();
const db = require('./db');

const PORT = 3000;

app.use(express.json());

//POST
app.post('/users', (req,res) => {
    const {name, email} = req.body
    db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, results) => {
        if(err) return res.status(500).json({error: err.message});
        res.status(201).json({id: results.insertId, name, email});
    });
});

//LISTEN
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});