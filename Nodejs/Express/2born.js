const express = require('express');
const app = express();
app.get('/year', (req, res) => {
    var age = req.query.age;
    var currentDate = new Date();
    var birthYear = currentDate.getFullYear() - age;
});