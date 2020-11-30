const express = require("express");
const db = require("./app/models");
const app = express();
const router = require('./app/routes');
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const PORT = process.env.PORT || 5000;

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


app.use(router);

app.use(router);
// app.get("/getAllTechnicians", (req, res) => {
//   const technicians = techniciansController.getAllTechnicians();
//   res.json(technicians);
// });

// app.get("/getTechnicianById/:id", (req, res) => {
//   const id = req.params.id;
//   const technicians = techniciansController.getTechnicianById(id);
//   if (technicians) {
//     res.json(technicians);
//   } else {
//     res.send("No technician found with the Id: " + id);
//   }
// });

// app.get("/getTechnicianByAttribute/:attribute/:value", (req, res) => {
//   const technicians = techniciansController.getTechniciansByAttribute(
//     req.params.attribute,
//     req.params.value
//   );
//   if (technicians) {
//     res.json(technicians);
//   } else {
//     res.send("Attribute not found");
//   }
// });

// app.get("/deleteTechnicianById/:id", (req, res) => {
//   const id = req.params.id;
//   const technicians = techniciansController.deleteTechnicianById(id);
//   res.json(technicians);
// });

// app.get("/appointments", (req, res) => {
//   const appointments = appointmentsController.getAllAppointments();
//   res.json(appointments);
// });

// app.get("/appointment/:id", (req, res) => {
//   const appointment = appointmentsController.getAppointmentsById("id");
//   res.json(appointment);
// });

// app.get("/appointment/attribute/:value", (req, res) => {
//   const appointment = appointmentsController.getAppointmentsByAttribute(
//     req.params.attribute,
//     req.params.value
//   );
//   res.json(appointment);
// });

// app.get("/deleteAppointment/:id", (req, res) => {
//   const appointment = appointmentsController.deleteAppointmentsById("id");
//   res.json(appointment);
// });

// app.get("/getAllBoilers", (req, res) => {
//   const boilers = boilersController.getAllBoilers();
//   res.json(boilers);
// });

// app.get("/getBoilersById/:id", (req, res) => {
//   let id = parseInt(req.params.id);
//   const boilerById = boilersController.getBoilerById(id);
//   if (boilerById) {
//     res.json(boilerById);
//   } else {
//     res.status(400).json("Id not found");
//   }
// });

// app.get("/getAllCustomers", (req, res) => {
//   const customers = customersController.getAllCustomers();
//   res.json(customers);
// });

// app.get("/getCustomersById/:id", (req, res) => {
//   let id = parseInt(req.params.id);
//   const customersById = customersController.getCustomerById(id);
//   if ( customersById) {
//     res.json(customersById);
//   } else {
//     res.status(400).json("Id not found");
//   }
// });

// app.get("/getBoilerType/:boilerType", (req, res) => {
//   let boilerType = req.params.boilerType;
//   const boilerTypeResult = boilersController.getBoilerType(boilerType);
//   if (boilerTypeResult.length === 0) {
//     res.status(400).json("Boiler type not found");
//   } else {
//     res.json(boilerTypeResult);
//   }
// });

// app.get("/deleteBoilerById/:id", (req, res) => {
//   let id = parseInt(req.params.id);
//   const boilerById = boilersController.getBoilerById(id);
//   if (boilerById) {
//     res.json(boilerById);
//   } else {
//     res.status(400).json("Id not found");
//   }
// });

// app.get("/buildings", (req, res) => {
//   const buildings = buildingsController.getBuildingsAll();
//   res.json(buildings);
// });

// app.get("/buildings/:id", (req, res) => {
//   let id = parseInt(req.params.id);
//   const buildingById = buildingsController.getbuildingById(id);
//   if (buildingById) {
//     res.json(buildingById);
//   } else {
//     res.status(400).json("Id not found");
//   }
// });

// app.get("/buildings/adress/:value", (req, res) => {
//   let buildingAdress = req.params.value;
//   const buildingAdressFound = buildingsController.getbuildingByAdress(
//     buildingAdress
//   );
//   if (buildingAdressFound) {
//     res.json(buildingAdressFound);
//   } else {
//     res.status(400).json("building Adress not found");
//   }
// });

// app.get("/buildings/fullname/:value", (req, res) => {
//   let buildingName = req.params.value;
//   const buildingNameFound = buildingsController.getbuildingByName(buildingName);
//   if (buildingNameFound) {
//     res.json(buildingNameFound);
//   } else {
//     res.status(400).json("building Name not found");
//   }
// });

// app.get("/buildings/phone/:value", (req, res) => {
//   let buildingPhone = req.params.value;
//   const buildingPhoneFound = buildingsController.getbuildingByPhone(
//     buildingPhone
//   );
//   if (buildingPhoneFound) {
//     res.json(buildingPhoneFound);
//   } else {
//     res.status(400).json("building Phone not found");
//   }
// });

// app.get("/buildings/:id", (req, res) => {
//   let id = parseInt(req.params.id);
//   const buildingById = buildingsController.deletebuildingById(id);
//   if (buildingById) {
//     res.json(buildings);
//   } else {
//     res.status(400).json("building ID not found");
//   }
// });

// app.get("/getCustomerType/:customerType", (req, res) => {
//   let customerType = req.params.customerType;
//   const customerTypeResult = customersController.getCustomerType(customerType);
//   if (customerTypeResult.length === 0) {
//     res.status(400).json("Customer type not found");
//   } else {
//     res.json(customerTypeResult);
//   }
// });

// app.get("/getCustomerByEmail/:email", (req, res) => {
//   let email = req.params.email;
//   const customerEmail = customersController.getCustomerByEmail(email);
//   if (customerEmail) {
//       res.json(customerEmail);
//   } else {
//     res.status(404).json("Email not found");
//   }
// });

// app.get("/getCustomersByBuildings/:buildings", (req, res) => {
//   let buildings = parseInt(req.params.buildings);
//   const customersBybuildings = customersController.getCustomersByBuildings(buildings);
//   if (customersBybuildings.length === 0) {
//     res.status(400).json("Buildings number not found");
//   } else {
//      res.json(customersBybuildings);
//   }
// });

// app.get("/getCustomerByAddress/:fiscal_address", (req, res) => {
//   let address = req.params.fiscal_address;
//   const customerAddress = customersController.getCustomerByAddress(address);
//  if (customerAddress) {
//         res.json(customerAddress);
//       } else {
//         res.status(404).json("Fiscal address not found");
//       }
// });

// app.get("/deleteCustomersById/:id", (req, res) => {
//   let id = parseInt(req.params.id);
//   const customersById = customersController.getCustomerById(id);
//   if ( customersById) {
//     res.json(customersById);
//   } else {
//     res.status(400).json("Id not found");
//   }
// });

// app.get('/getAllBoilerTypes', (req, res) => {
//     const boilerTypes = boilerTypesController.getAllBoilerTypes();
//     res.json(boilerTypes);
// });

// app.get('/getBoilerTypeById/:id', (req, res) => {
//     let id = parseInt(req.params.id);
//     const boilerTypeById = boilerTypesController.getBoilerTypeById(id);
//     if (boilerTypeById){
//         res.json(boilerTypeById)
//     } else {
//         res.status(400).json('Id not found');
//     }
// })

// app.get('/getBoilerStock/:boilerStock', (req, res) => {
//     let boilerStock = req.params.boilerStock;
//     const boilerStockResult = boilerTypesController.getBoilerStock(boilerStock);
//     if(boilerStockResult.length === 0){
//         res.status(400).json('Stock not found')
//     } else {
//         res.json(boilerStockResult);
//     }
// })

// app.get('/deleteBoilerTypeById/:id', (req, res) => {
//     let id = parseInt(req.params.id);
//     const boilerTypeById = boilerTypesController.getBoilerTypeById(id);
//     if (boilerTypeById){
//         res.json(boilerTypeById)
//     } else {
//         res.status(400).json('Id not found')
//     }
// });

app.listen (PORT, () => console.log(`Server running at port ${PORT}`));
