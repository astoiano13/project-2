module.exports = function (sequelize, DataTypes) {
    const score = sequelize.define('score', {
    score: {
        type: DataTypes.int, 
        unique: true, 
        allowNull: false
    }
    }
    )},
