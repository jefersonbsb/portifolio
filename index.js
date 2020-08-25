const express = require("express");
const app = express();
const Typewriter = require("t-writer.js"); 
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.render('index');
});


app.listen(8080,()=>{
    console.log("Servidor rodando na url http://localhost:8080");
});