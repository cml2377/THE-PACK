SELECT vehicle.category, vehicle.make, vehicle.model, vehicle.series, vehicle.plantCountry, vehicle.year
FROM vehicle
LEFT JOIN user ON vehicle.c = user.column_name;
ORDER BY 


var Vehicle = sequelize.define("Vehicle", {
		category: DataTypes.STRING,
		make: DataTypes.STRING,
		model: DataTypes.STRING,
		series: DataTypes.STRING,
		plantCountry: DataTypes.STRING,
		year: DataTypes.INTEGER