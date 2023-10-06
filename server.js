const express = require("express");
const path = require("path");
const { sequelize } = require("./models");
const {rootRouter} = require("./router");
var Fingerprint = require('express-fingerprint')
const app = express();

//chuyển đổi sang json
app.use(express.json());

//fingerPrint
app.use(Fingerprint({
    
}))

//Static file
const pathPublicDirectiondary = path.join(__dirname, "./public");
app.use("/public",express.static(pathPublicDirectiondary));

//dùng router
app.use("/api/v2", rootRouter)

app.listen(3000, async () => {
    console.log(`app run on port 3000`);
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})