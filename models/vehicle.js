module.exports = function (sequelize, DataTypes) {
	var Vehicle = sequelize.define("Vehicle", {
		category: DataTypes.STRING,
		make: DataTypes.STRING,
		model: DataTypes.STRING,
		year: DataTypes.INTEGER, 
		user_email: DataTypes.STRING

	});
	return Vehicle;
};