const mongoose = require("mongoose");
const {type} = require("os");

const schema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    price:{
        type: Number,
        required:true
    }
})

const model =  mongoose.model("menuItem", schema);

module.exports = model;