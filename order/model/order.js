const mongoose = require("mongoose");
const Order = new mongoose.Schema({
    bookID: mongoose.SchemaTypes.ObjectId,
    customerID: mongoose.SchemaTypes.ObjectId,
    initialDate: Date,
    deliveryDate: Date,
})

module.exports = Order;