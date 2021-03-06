// Requiring necessary npm packages
const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
// Requiring passport as we've configured it
const passport = require('./config/passport');
const bodyParser = require('body-parser');
// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require('./models');

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));
// We need to use sessions to keep track of our user's login status
app.use(
    session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(
            '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
            PORT,
            PORT
        );
    });
});
