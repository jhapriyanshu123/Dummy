const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.json());


app.get('/', (req,res)=> {
    res.send("hello world");
})
const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Listening on port ${port}..`));

