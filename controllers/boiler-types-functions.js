const boilerTypes = require("../data/boiler-types.json");

const getAllBoilerTypes = () => {
  return boilerTypes;
};

const getTypesById = (id) => {
  const typesId = boilerTypes.filter((boilerTypes) => {
    return boilerTypes.id === (id);
  });
  return typesId;
};

const getStock = (boilerStock) => {
  const boilerStockFind = boilerTypes.filter((boilerTypes) => {
    return boilerTypes.boilerStock === (boilerStock);
  });
  return boilerStockFind;
};

const deleteTypeById = (id) => {
  const typesId = boilerTypes.filter((boilerTypes) => {
    return boilerTypes.id !== (id);
  });
  return typesId;
};

module.exports = {
    getAllBoilerTypes,
    getTypesById,
    getStock,
    deleteTypeById
};
