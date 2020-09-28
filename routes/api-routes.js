/* eslint-disable prettier/prettier */
// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {
  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post('/api/signup', (req, res) => {
    console.log(req.body)
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      charClass: req.body.charClass
    })
      .then(() => {
        res.redirect(307, '/api/login');
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  // app.get("/logout", (req, res) => {
  //   req.logout();
  //   res.redirect("/");
  // });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.get('/api/scores', (req, res) => {
    // query for scores
    // send back as json
    db.Score.findAll({ include: [{ model: db.User, attributes: ["email"] }] })
      .then(scores => {
        console.log(scores);
        res.json(scores)
      }
      )
  });

  app.post('/api/scores', (req, res) => {
    const score = req.body.value;
    console.log(score, req.user.id);

    // save score to db
    db.Score.create({
      UserId: req.user.id,
      score: score
    }).then(createdScore => {
      res.json(createdScore)
    }).catch(err => {
      console.log(err);
      res.sendStatus(500)
    });

    // then, send score to client in response
    // res.json({
    //   userId: req.user.id,
    //   score: score
    // });
  })
};
