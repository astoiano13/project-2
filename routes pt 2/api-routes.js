const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {
    app.post("/api/signup", (req,res) => {
        db.User.create({
            charName: req.User.charName
        })
        .then (() => {
            res.redirect(307, "/api/startgame"); 
        })
        .catch(err => { 
            res.status(401).json(err);
        });
    });
app.get("/api/user_data", (req,res) => {
res.json({
    charName: req.user.charName,
    gameTime: req.DB.gameTime
});
});
};