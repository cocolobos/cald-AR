const db = require("../models");
const BoilerType = db.boilersTypes;

//create and save a new boiler type
exports.create = (req,res) => {
  //validate request
  if(!req.body.id || !req.body.skillsId || !req.body.descriptions || !req.body.stock){
    res.status(400).send({message:"Content can not be empty"});
    return;
  }
  //create boiler type
  const boilerType = new BoilerType({
    id: req.body.id,
    skillsId: req.body.skillsId,
    descriptions: req.body.descriptions,
    stock: req.body.stock,
  });
  //save boiler type
  boilerType
    .save(boilerType)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Some error ocurred while creating new Boiler Type"
      });
    });
};
//retrieve all boiler type
exports.findAll=(req, res) => {
  BoilerType.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Some error ocurred while finding Boiler Type"
      });
    });
};
//find a single boiler type by id
exports.findOne=(req,res)=> {
  BoilerType.findOne({ id: req.params.id })
    .then(data => {
      if(!data){
        return res.status(404).send({
          message:'Boiler Type with id ${req.params.id} could not be found'
        })
      }
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Some error ocurred while finding Boiler Type by ID"
      });
    });
};
//update Boiler Tpe by id
exports.update=(req,res)=> {
  if (!req.body){
    return res.status(400).send({
      message:"Data to update can not be empty"
    });
  }
  //validate request
  if(!req.body.id || !req.body.skillsId || !req.body.descriptions || !req.body.stock){
    res.status(400).send({message:"Content can not be empty"});
    return;
  }
  const id = req.params.id;
  BoilerType.findOneAndUpdate({id}, req.body, {useFindAndModify: false})
    .then(data => {
      if(!data){
        res.status(404).send({
          message:"Some error ocurred while updating Boiler Type"
        });
      }else res.send({message:"Boiler Type was update successfully"});
    })
    .catch(err => {
      res.status(500).send({
        message:"Some error ocurred while updating Boiler Type"
      });
    });
};
//delete boiler type by id
exports.delete=(req,res)=> {
  const id = req.params.id;
  BoilerType.findOneAndRemove({id}, {useFindAndModify:false})
    .then(data =>
      res.send({message:"Boiler Type removed successfully"})
    )
    .catch(err => {
      res.status(500).send({
        message:"Some error ocurred while deleting Boiler Type"
      });
    });
};