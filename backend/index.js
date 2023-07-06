const express = require('express');
 
const app = express();
const namesList = ["John", "James", "Brian"];

const port = process.env.PORT || 3000;


app.get('/user/get', (req, res, next) => {    
    res.json(namesList);
})
 
const server = app.listen(port, function () {
    let host = server.address().address
    let port = server.address().port
})