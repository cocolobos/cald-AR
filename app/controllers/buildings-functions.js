const buildings = require("../../data/buildings-data.json");

const getBuildingsAll = () => {
  return buildings;
};

const getbuildingById = (id) => {
  const buildingId = buildings.find((building) => building.id === id);
  return buildingId;
};

const getbuildingByAdress = (adress) => {
  const buildingAdress = buildings.find((building) => building.buildingsAdress === adress);
  return buildingAdress;
};

const getbuildingByName = (name) => {
  const buildingName = buildings.find((building) => building.buildingsName === name);
  return buildingName;
};

const getbuildingByPhone = (phone) => {
  const buildingPhone = buildings.find((building) =>building.buildingsPhone === phone);
  return buildingPhone;
};

const deletebuildingById = (id) => {
  const buildingFiltered = buildings.filter((building) => building.id !== id);
  return buildingFiltered;
};

module.exports = {
  getBuildingsAll,
  getbuildingById,
  getbuildingByAdress,
  getbuildingByPhone,
  getbuildingByName,
  deletebuildingById,
};