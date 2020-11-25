const technicians = require ('../data/technicians-data.json');

const getAllTechnicians = () => {
    return technicians;
}
const getTechnicianById = (id) => {
    const technician = technicians.find(technician => technician.id.toString() === id);
    return technician;
}
const getTechniciansByAttribute = (attr, val) => {
    const technician = technicians.filter(tech => tech[attr].toString() === val);
    return technician;
}
const deleteTechnicianById = (id) => {
    const technician = technicians.filter(technician => technician.id.toString() !== id);
    return technician;
}

module.exports = {
    getAllTechnicians,
    getTechnicianById,
    getTechniciansByAttribute,
    deleteTechnicianById
};