const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/synth", {
	logging: false,
});

module.exports = {
	db,
};
