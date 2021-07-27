const mongoose = require("mongoose");
const Customer = new mongoose.Schema({
    name: String,
    age: Number,
    adress: String,
})

module.exports = Customer;