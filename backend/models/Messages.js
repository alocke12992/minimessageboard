const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title: String, 
    message: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Message", schema);