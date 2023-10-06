const express = require("express");
const tripRouter = express.Router();
const {createTrip,getAllTrips,getDetailTrips, deleteTrips, updateTrips} = require("../controller/trips.controllers");

tripRouter.post("/", createTrip);
tripRouter.get("/", getAllTrips);
tripRouter.get("/:id", getDetailTrips);
tripRouter.delete("/:id", deleteTrips);
tripRouter.put("/:id", updateTrips)

module.exports = {tripRouter}
