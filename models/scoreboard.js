// CREATE TABLE Score(
//     game_id int(10) PRIMARY KEY AUTO_INCREMENT,
//     player_time NOT_NULL DEFAULT CURRENT_TIMESTAMP,
// );

// // const sequelize = require('sequlize')
module.exports = function (sequelize, DataTypes) {
    const Score = sequelize.define('Score', {
        // The email cannot be null, and must be a proper email before creation
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
    Score.associate = function (models) {
        Score.belongsTo(models.User);
    };
    return Score;
};
