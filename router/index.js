const express = require("express");
const {stationRouter} = require("./station.router");
const {userRouter} = require("./user.router");
const {tripRouter} =require("./trip.router");
const fingertPrintRouter = require('./test-finger-print')

const rootRouter = express.Router();

rootRouter.use("/station", stationRouter);

rootRouter.use("/users", userRouter);

rootRouter.use("/trips", tripRouter);

rootRouter.use('/test-finger-print', fingertPrintRouter);

module.exports = {rootRouter}