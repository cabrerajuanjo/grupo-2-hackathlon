require('dotenv').config();
const express = require("express");
const { sequelize } = require("./database/models");
const app = express();
const promoRoutes = require("./routes/promoRoutes.js");
const userRoutes = require("./routes/userRoutes");
const veryJWT = require('./helpers/generateJWT');
const isAdmin = require('./middlewares/isAdmin');


// const swaggerUi = require("swagger-ui-express");
// const YAML = require("yamljs");
// const swaggerDocument = YAML.load("./swagger.yaml");

app.use(express.json());

app.use("/promo", promoRoutes);
app.use("/users", userRoutes);
// app.use("/docs",veryJWT, isAdmin, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const PORT = 3002;
sequelize
	.sync()
	.then(() => {
		console.log("sequelize iniciado");
	})
	.catch((err) => {
		console.log("error: " + err);
	});

const server = app.listen(PORT, () => {
	console.log("Se levanto el server en el puerto " + PORT);
});

module.exports = {app,server}