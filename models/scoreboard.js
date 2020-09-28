module.exports = function (sequelize, DataTypes) {
    const Score = sequelize.define('score', {
        score: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
        },
    });

    return Score;
};
