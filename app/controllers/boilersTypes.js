const db = require("../models");
const BoilerType = db.boilersTypes;

exports.create = (req,res) => {
  if(!req.body.id || !req.body.skillsId || !req.body.descriptions || !req.body.stock){
    res.status(400).send({message:"Content can not be empty"});
    return;
  }
  const boilerType = new BoilerType({
    id: req.body.id,
    skillsId: req.body.skillsId,
    descriptions: req.body.descriptions,
    stock: req.body.stock,
  });

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

exports.update=(req,res)=> {
  if (!req.body){
    return res.status(400).send({
      message:"Data to update can not be empty"
    });
  }
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