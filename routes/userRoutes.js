const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
//const listPromos = require("../controllers/listPromos");

router.post("/login",userController.login);
router.post("/compras",userController.compras);

module.exports = router;