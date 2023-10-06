const express = require("express");
const stationRouter = express.Router();
const {Station} = require("../models");
const {
    createStation,
    getAllStation,
    getDetailStation,
    updateDetailStation,
    deleteStation

} = require("../controller/station.controller");

const {checkExits} = require("../middleware/validation/checkExits");
const {authenticate} = require("../middleware/auth/authenticate");
const {authorize} = require("../middleware/auth/authorize");

stationRouter.post("/", authenticate, authorize(["admin", "super_admin"]) ,createStation);

stationRouter.get("/",getAllStation);

stationRouter.get("/:id", getDetailStation);

stationRouter.put("/:id", checkExits(Station), authenticate, authorize(["admin", "super_admin"]),  updateDetailStation);

stationRouter.delete("/:id", checkExits(Station), authenticate, authorize(["admin", "super_admin"]), deleteStation);

module.exports = {
    stationRouter
}