module.exports = function (sequelize, DataTypes) {
	var Vehicle = sequelize.define("Vehicle", {
		category: DataTypes.STRING,
		make: DataTypes.STRING,
		model: DataTypes.STRING,
		series: DataTypes.STRING,
		plantCountry: DataTypes.STRING,
		year: DataTypes.INTEGER
	});

	Vehicle.associate = function (models) {
		Vehicle.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});
	};
	return Vehicle;
};