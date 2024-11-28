const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/dbbuku"
  ).then(()=>{
    console.log("Connected to Database");
  }).catch((err)=>{
    console.log("Connection Failed");
  });