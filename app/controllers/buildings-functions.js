const db = require("../models");
const Building = db.buildings;

exports.create = (req, res) => {
    if (!req.body.id || !req.body.adress || !req.body.boilerID || !req.body.fullname || !req.body.phone) {
        res.status(400).send({ message: 'Data missing' });
        return;
    }

    const building = new Building({
        id: req.body.id,
        adress: req.body.adress,
        boilerID: req.body.boilerID,
        fullname: req.body.fullname,
        phone: req.body.phone
    });

    building
        .save(building)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Can not create the building.'
            });
        });
};

exports.findAll = (req, res) => {
    Building.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Can not find all buildings.'
            });
        });
};

exports.findOne = (req, res) => {
    Building.findOne({id:req.params.id})
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: `Building id ${req.params.id} not found.`
                })
            }
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Can not find all buildings.'
            });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: 'Empty data.'
        });
    }

    if (!req.body.id || !req.body.adress || !req.body.boilerID || !req.body.fullname || !req.body.phone) {
        res.status(400).send({ message: 'Some data is empty, please fill it.' });
        return;
    }

    const id = req.params.id;

    Building.findOneAndUpdate({id}, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: 'Can not update building, the building was not found.'
                });
            } else res.send({ message: 'Building was updated.' });
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 'Can not update building id ' + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Building.findOneAndRemove({id}, { useFindAndModify: false })
        .then(data =>
            res.send({ message: 'Building was removed.'})
        )
        .catch(err => {
            res.status(500).send({
                message: 'Error removing building with id=' + id
            });
        });
};

// const buildings = require("../../data/buildings-data.json");

// const getBuildingsAll = () => {
//   return buildings;
// };

// const getbuildingById = (id) => {
//   const buildingId = buildings.find((building) => building.id === id);
//   return buildingId;
// };

// const getbuildingByAdress = (adress) => {
//   const buildingAdress = buildings.find((building) => building.buildingsAdress === adress);
//   return buildingAdress;
// };

// const getbuildingByName = (name) => {
//   const buildingName = buildings.find((building) => building.buildingsName === name);
//   return buildingName;
// };

// const getbuildingByPhone = (phone) => {
//   const buildingPhone = buildings.find((building) =>building.buildingsPhone === phone);
//   return buildingPhone;
// };

// const deletebuildingById = (id) => {
//   const buildingFiltered = buildings.filter((building) => building.id !== id);
//   return buildingFiltered;
// };

// module.exports = {
//   getBuildingsAll,
//   getbuildingById,
//   getbuildingByAdress,
//   getbuildingByPhone,
//   getbuildingByName,
//   deletebuildingById,
// };
