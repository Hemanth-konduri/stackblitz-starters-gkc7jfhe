const express = require('express');
const { default: mongoose, model } = require('mongoose');
const { resolve } = require('path');
const schema = require("./schema");
const dotenv = require("dotenv").config();


const app = express();
const port = 3010;

app.use(express.static('static'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, async() => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post("/menuItems", async(req, res)=>{
  try{
    const {name, description, price} = req.body;
    if(!name || !description || !price){
      return res.status(401).send({msg:"Please provide all details"});
    }

    const items = new model({name, description, price});
    await items.save();
    return res.status(201).send({msg: "Item added successfully"});
  }catch(error){
    console.log(error);
    return res.status(500).send({msg:"Something went wrong"});
  }
});

app.get("/item", async(req, res)=>{
  try{
    return res.status(200).send({msg:"This is an assaignment where we have to something ...."});

  }catch(error){
    return res.status(500).send({msg:"Something went wrong"});

  }
});
