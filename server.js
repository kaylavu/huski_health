"use strict";

require('dotenv').config();
const dogBreed = require('what-dog');
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const app = express();
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const database = require("./database")(knex);
const bodyParser = require("body-parser");

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/api/whatDog', (req, res) => {
    let dogUrl = req.body.dogUrl
    console.log(dogUrl)
    dogBreed(dogUrl).then(doggyData => {
        res.send({
            doggyData
        })
    })
})

app.post('/api/pets/:id', (req, res) => {
    console.log("HELLO HELLO HELLO", req.body)
    database.editPet(req.body)
        .then(function (result) {
            return res.sendStatus(204)
        })
})

app.post('/api/pets/:id/activity', (req, res) => {
    console.log("THE NEW ACTIVITY OBJECT", req.body)
    database.newHistory(req.body)
        .then(function (result) {
            //    return res.sendStatus()
            console.log("Result after posting new activity", result)
            return res.send(result)
        })
})



//GET a pet's activities based on petId
app.get('/api/pets/activities', (req, res) => {
    database.getPetActivities(req.query.id).then(function (result) {
        // console.log("ACTIVITY RESULT", result)
        return res.send(result)
    })
})

app.get('/api/pets/:id/weights', (req, res) => {
    database.getPetWeight(req.params.id).then((weights) => {
            // console.log('WEIGHTS >>>', weights);
            if (weights) {
                return res.json(weights);
            } else {
                return res.json({
                    error: 'No Weights found'
                });
            }

        })
        .catch(err => {
            console.log('ERROR', err);
        })
})

app.get('/api/pets/:id/latestweights', (req, res) => {
    database.getLatestPetWeight(req.params.id).then((weight) => {
            // console.log('WEIGHTS >>>', weight);
            if (weight) {
                return res.json(weight);
            } else {
                return res.json({
                    error: 'No Weights found'
                });
            }

        })
        .catch(err => {
            console.log('ERROR', err);
        })
})

app.get('/api/pets/:id/feeding', (req, res) => {
    database.getPetFeeding(req.params.id).then(function (result){
            console.log('FEEDING >>>', result);
            if (result) {
                return res.json(result);
            } else {
                return res.json({
                    error: 'No feedings found'
                });
            }
        })
        .catch(err => {
            console.log('ERROR', err);
        })
})

app.post('/api/pets/', (req, res) => {
    console.log('debug:', req.body, req.body.userId)
    database.getPets(req.body.userId)
        .then(function (result) {
            res.send(result)
        })
})

app.post('/api/pet/', (req, res) => {
    database.getPet(req.body.id)
        .then(function (result) {
            res.send(result)
        })
})

app.post('/api/pet/new', (req, res) => {
    // console.log(req.body)
    database.newPet(req.body)
        .then(function (result) {
            res.send(result)
        })
})


app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
});