module.exports = function (sequelize, DataTypes) {
    var Parts = sequelize.define("Part", {
        brakes: DataTypes.STRING,
        oilChanges: DataTypes.STRING,
        windshieldFluid: DataTypes.STRING,
        airFilters: DataTypes.STRING,
        sparkPlugs: DataTypes.STRING
    });
    return Parts;
};