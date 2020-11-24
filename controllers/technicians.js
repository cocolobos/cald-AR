const technicians = require ('../data/technicians-data.json');
//GET ALL TECHNICIANS
const getAllTechnicians = () => {
    return technicians;
}
//GET TECHNICIANS BY ID
const getTechnicianById = (id) => {
    const technician = technicians.find(technician => technician.id.toString() === id);
    return technician;
}
//GET TECHNICIANS BY ATTRIBUTE
const getTechniciansByAttribute = (attr, val) => {
    const technician = technicians.filter(tech => tech[attr] === val);
    return technician;
}
//DELETE TECHNICIANS
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

