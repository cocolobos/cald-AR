const boilers = require("../data/boilers-data.json");

const getAllBoilers = () => {
  return boilers;
};

const getBoilersById = (id) => {
  const boilerId = boilers.filter((boilers) => {
    return boilers.id === (id);
  });
  return boilerId;
};

const getBoilerType = (boilerType) => {
  const boilerTypeFind = boilers.filter((boilers) => {
    return boilers.boilerType === (boilerType);
  });
  return boilerTypeFind;
};

const deleteBoilerById = (id) => {
  const boilerId = boilers.filter((boilers) => {
    return boilers.id !== (id);
  });
  return boilerId;
};

module.exports = {
  getAllBoilers,
  getBoilersById,
  getBoilerType,
  deleteBoilerById
};
