const appointments = require ('../data/appointments-data.json');

const getAllAppointments = () => {
    return appointments;
};

const getAppointmentsById = id => {
    const appointment = appointments.find(appointment => appointment.id.toString() === id);
    return appointment;
};

const getAppointmentsByAttribute = (attr, val) => {
    const appointment = appointments.filter(appointment => appointment[attr].toString() === val);
    return appointment;
};

const deleteAppointmentsById = id => {
    const appointment = appointments.filter(appointment => appointment.id.toString() !== id);
    return appointment;
};

module.exports = {
    getAllAppointments,
    getAppointmentsById,
    getAppointmentsByAttribute,
    deleteAppointmentsById
};