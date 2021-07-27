const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const bookModel = require("../model/book");
const book_db = mongoose.model("bookCollection", bookModel);

//basic config
app.use(express.urlencoded({extended: false}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {useUnifiedTopology: true, useNewUrlParser: true})
.then(()=>{
    console.log("db conectado!");
})
.catch(err => console.log(err))

app.post("/book", (req,res)=>{
    let bookB = new book_db({
        author: req.body.author,
        title: req.body.title,
        pages: req.body.numberPages,
        publisher: req.body.publisher
    })

    bookB.save();
    res.status(200).send("livro postado!");
})

app.get("/books", (req,res)=>{
    book_db
    .find()
    .then(books =>{
        res.status(200).json(books);
    })
    .catch(err =>{
        res.sendStatus(500);
        console.log(err);
    })
})

app.get("/book/:id",(req,res)=>{
    book_db
    .findById(mongoose.Types.ObjectId(req.params.id))
    .then(book =>{
        res.status(200).json(book);
    })
    .catch(err =>{
        res.sendStatus(500);
        console.log(err);
    })
})

app.listen(port,()=>{
    console.log("app está rodando na porta " + port);
})