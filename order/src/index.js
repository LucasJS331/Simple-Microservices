const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 7070;
const orderModel = require("../model/order");
const orderDB = mongoose.model("orderCollection", orderModel);
const axios = require("axios");

//basic config
app.use(express.urlencoded({extended: false}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {useUnifiedTopology: true, useNewUrlParser: true})
.then(()=>{
    console.log("db order conectado!");
})
.catch(err => console.log(err))

app.post("/order", (req,res)=>{
    let orderB = new orderDB({
        bookID: mongoose.Types.ObjectId(req.body.bookID),
        customerID: mongoose.Types.ObjectId(req.body.customerID),
        initialDate: req.body.initialDate,
        deliveryDate: req.body.deliveryDate

    })
    orderB.save();
    res.status(200).send("ordem postada com sucesso!");
})

app.get("/orders", (req,res)=>{

    orderDB
    .find()
    .then(orders =>{
        res.status(200).json(orders);
    })
    .catch(err =>{
        res.sendStatus(500);
        console.log(err);
    })
})

app.get("/order/:id", async(req,res)=>{
  try {
      let order = await orderDB.findById(mongoose.Types.ObjectId(req.params.id));
      if(order){
        let resp_book = await axios.get("http://localhost:3000/book/" + order.bookID);
        let resp_customer = await axios.get("http://localhost:8080/customer/" + order.customerID);
        if(resp_book.data || resp_customer.data){
            res.json({
                orderID: order._id,
                date: order.initialDate,
                delivery: order.deliveryDate,
                customer: {
                    customerID: resp_customer.data._id,
                    name: resp_customer.data.name,
                    adress: resp_customer.data.adress,
                },
                book: {
                    bookID: resp_book.data._id,
                    title: resp_book.data.title,
                    publisher: resp_book.data.publisher,
                    author: resp_book.data.author
                }
                
            })
        } else{
            res.sendStatus(404);
        }
      }
  } catch (error) {
      console.log(error);
      res.sendStatus(500);
  }
    
})
app.listen(port,()=>{
    console.log("app order está rodando na porta " + port);
})