const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://devradar:th13971599@cluster0-juejg.mongodb.net/dbdevradar?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);