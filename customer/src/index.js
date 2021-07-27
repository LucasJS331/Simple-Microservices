const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const customerModel = require("../model/customer");
const customer = mongoose.model("customerCollection", customerModel);

//basic config
app.use(express.urlencoded({extended: false}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {useUnifiedTopology: true, useNewUrlParser: true})
.then(()=>{
    console.log("db customer conectado!");
})
.catch(err => console.log(err))

app.get("/", (req,res)=>{
    res.send("iee");
})

app.post("/customer", (req,res)=>{
    let customerB = new customer({
        name: req.body.name,
        age: req.body.age,
        adress: req.body.adress,
    })

    customerB.save();
    res.status(200).send("cliente postado!");
})

app.get("/customers", (req,res)=>{

    customer
    .find()
    .then(customers =>{
        res.status(200).json(customers);
    })
    .catch(err =>{
        res.sendStatus(500);
        console.log(err);
    })
})

app.get("/customer/:id",(req,res)=>{
    customer
    .findById(req.params.id)
    .then(c =>{
        res.status(200).json(c);
    })
    .catch(err =>{
        res.sendStatus(500);
        console.log(err);
    })
})

app.listen(port,()=>{
    console.log("app está rodando na porta " + port);
})