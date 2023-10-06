const express = require("express");
const {register, login, uploadAvatar, getAllTrips} = require("../controller/user.controller");
const userRouter = express.Router();
const {authenticate} = require("../middleware/auth/authenticate");
//uploadFile
const {uploadImage} = require("../middleware/upload/upload-image")


userRouter.post("/register", register);

userRouter.post("/login", login);

userRouter.post('/upload-avatar', authenticate, uploadImage("users"), uploadAvatar);

userRouter.get('/all-trips', getAllTrips)

module.exports = {userRouter}