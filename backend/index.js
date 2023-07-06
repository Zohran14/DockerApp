const express = require('express');
 
const app = express();
const namesList = ["John", "James", "Brian"];

app.get('/names', (req, res, next) => {    
    res.json(namesList);
})
 
const server = app.listen(3000, function () {
    let host = server.address().address
    let port = server.address().port
})