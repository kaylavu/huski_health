"use strict";

require('dotenv').config();

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const app = express();
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const database = require("./database")(knex);
const bodyParser = require("body-parser");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({
    extended:true
})); 

//Request to server to return a list of a user's pets
app.get('/api/pets', (req,res) => {
    database.getUserPets(req.query.userId).then(function(result) {
    console.log("GET USER'S PETS:", result)
        res.send(result)
    })
})

//Display Dashboard for a single pet
app.get('/api/pets/:id', (req,res) => {
    database.getPet(req.params.id).then(function(result) {
        // TODO: what if there are no pets with this id?  Do something reasonable.
        console.log("SINGLE PET:", result[0])
        return res.json(result[0])
    })
})

//EDIT single pet information 
app.post('/api/pets/:id', (req, res) => {
    console.log(req.body)
    console.log("PET ID", req.params.id);
    const {newPetName, newPetWeight} = req.body
    const newPetInfo = {
        petId: req.params.id,
        newPetName, 
        newPetWeight, 
    }
    database.editPet(newPetInfo).then(function(result) {
        // console.log("PET EDITED: NEW PET INFO", result)
        return res.sendStatus(204)
    })
})

//User can add a new pet
app.post('/api/pets', (req, res) => {
    database.newPet(req.body.newData)
})


app.get('/api/login', (req, res) => {
   console.log("HIT")
//    if (database.getAccount(req.body.email, req.body.password)) {
//        console.log("LOGGED IN")
//    } else {
//        console.log("FAIL")
//    }
})

app.post('/api/pets', (req, res) => {
    console.log("GOTTEN PET", req.body)
//     database.getPet() 
 })

app.listen(PORT, () => {
 console.log("Example app listening on port " + PORT);
});




