// Iteration #1
const drones = [
    {
        name: "General Atomics MQ-9 Reaper",
        propellers: 4,
        maxSpeed: 18,
    },
    {
        name: "RQ-11 Ravens",
        propellers: 2,
        maxSpeed: 10,
    },
    {
        name: "General Atomics RQ-170 Sentinel",
        propellers: 8,
        maxSpeed: 32,
    },
  ];
  
  // Add here the script that will be run to actually seed the database (feel free to refer to the previous lesson)
  
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

// ℹ️ Connects to the database
require('../db');

// Creates the movies into the MongoDB
Drone.create(drones)
.then(dronesFromDB => {
    console.log(`Created ${dronesFromDB.length} drones`);

    // Once created, close the DB connection
    mongoose.connection.close();
})
.catch(err => console.log(`An error occurred while creating drones from the DB: ${err}`));