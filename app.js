const express = require("express");
const mongoose = require("mongoose");
const  connectDB = require('./config/db')
connectDB();

const app = express();
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello");
});

//Create routes
app.use('/', require('./routes/index')) 
app.use('/api/url', require('./routes/url')) 

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});