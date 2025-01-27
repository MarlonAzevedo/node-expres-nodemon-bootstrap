const express = require("express");
const app = express();
const port = 3000;

app.set('view engine','ejs');
app.use(express.static('public'));

app.get("/:nome/:tel",(req,res)=>{
    var nome = req.params.nome;
    var tel = req.params.tel;
    var msg = false;
    var produtos = [
        {nome:"koka kola",preco:10},
        {nome:"pepcy kola",preco:8},
        {nome:"dolinho", preco:5}
    ];

    res.render("index",{
        nome:nome,
        tel:tel,
        msg:msg,
        produtos:produtos
    });
});

app.get("/sobre",(rec,res)=>{
    res.render("sobre");
});

app.listen(port,()=>{
    console.log("App rodando na porta = "+ port);
});