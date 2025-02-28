const express = require("express");
const app = express();
const port = 3000;

app.set('view engine','ejs');
app.use(express.static('public'));

app.get("/",(req,res)=>{
   
});

app.get("/sobre",(rec,res)=>{
    res.render("sobre");
});

app.listen(port,()=>{
    console.log("App rodando na porta = "+ port);
});