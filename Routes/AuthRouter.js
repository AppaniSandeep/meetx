const {register,login} = require("../Controllers/AuthController");

const {registrationValidation,loginValidation} = require("../Middlewares/AuthValidation");

const router = require("express").Router();;

router.post("/login", loginValidation, login);

router.post("/register", registrationValidation, register);

module.exports = router