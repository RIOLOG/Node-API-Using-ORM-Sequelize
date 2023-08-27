const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const db = require('./db.config');

//creation of table if not exist:
db.sequelize.sync();

const controller = require('./customer.controller');

app.get("/", (req,res) => {
    res.send("HELLO ANKIT");
})

//creating customer
app.post("/customer/new", (req,res) => {
    controller.createCustomer(req,res);
})

//fetching all customer
app.get("/customers/deatils", (req,res) => {
    controller.findAllCustomers(req,res);
})

//fetching specific customer
app.get("/customer/:email", (req,res) => {
    controller.findCustomersByEmail(req,res);
})

//update specific customer
app.put("/customers/update", (req,res) => {
    controller.updateCustomer(req,res);
})


//delete specific customer
app.delete("/customers/delete/:email", (req,res) => {
    controller.deleteCustomer(req,res);
})






app.listen(8000 , ()=>{
    console.log("RUNNINGG");
})