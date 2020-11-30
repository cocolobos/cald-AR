const db = require("../models");
const Boilers = db.boilers;

//Create and save a new boiler
exports.create = (req, res) => {
    //Validate request
    console.log('body', req)
    /*if(!req.body.id || !req.body.typeId || !req.body.maintaince_rate || !req.body.hour_maintaince_cost || !req.body.hour_eventual_cost){
        res.status(400).send({ message: "Content can not be empty!"});
        return;
    }*/

    //Create a boiler
    const boilers = new Boilers({
        id: req.body.id,
        typeId: req.body.typeId,
        maintaince_rate: req.body.maintaince_rate,
        hour_maintaince_cost: req.body.hour_maintaince_cost,
        hour_eventual_cost: req.body.hour_eventual_cost
    });

    //Save boiler in the database
    boilers
        .save(boilers)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "some error occurred while creating the boiler."
            }); 
        });
}

//Retrieve all boilers from the database
exports.findAll = (req, res) => {
    Boilers.find({}) 
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "some error occurred while retrieving boilers."
            }); 
        });
}

//Find a single boiler with Id
exports.findOne = (req, res) => {
    Boilers.findOne({id: req.params.id}) 
        .then(data => {
            if (!data){
                return res.status(404).send({
                    message: `Boiler with id ${req.params.id} was not found`
                })
            }
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "some error occurred while finding the boiler."
            }); 
        });
}

//Update a boiler by the Id in the request
exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({
            message: 'Data to update can not be empty!'
        });
    }
    //validate request
    if (!req.body.id || !req.body.typeId || !req.body.maintaince_rate || !req.body.hour_maintaince_cost || !req.body.hour_eventual_cost){
        res.status(400).send({ message: "Content can not be empty!"});
        return;
    }

    const id = req.params.id;

    Boilers.findOneAndUpdate({id}, req.body, {useFindAndModify: false})
        .then(data =>{
            if(!data){
                res.status(400).send({
                    message: `Cannot update boiler with id=${id}. Maybe Boiler was not found!`
                });
            } else res.send({ message: "Boiler was update successfully."})
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "some error occurred while updating the boiler."
            }); 
        });
}

//Delete a building with the specified Id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Boilers.findOneAndRemove({id}, {useFindAndModify: false})
        .then(data =>
                res.send({ message: "Boiler was remove successfully"})
            )
        .catch(err => {
            res.status(500).send({
                message: "Error removing boiler with de Id:"+ id
            }); 
        });
}
