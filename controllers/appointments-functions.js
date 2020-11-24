const appointments = require ('../data/appointments-data.json');

const getAllAppointments = () => {
    return appointments;
};

const getAppointmentsById = id => {
    const appointment = appointments.find(appointment => appointment.id.toString() === id);
    return appointment;
};

const deleteAppointmentsById = id => {
    const appointment = appointments.filter(appointment => appointment.id.toString() !== id);
    return appointment;
};

module.exports = {
    getAllAppointments,
    getAppointmentsById,
    deleteAppointmentsById
};