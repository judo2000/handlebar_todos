const express = require('express');
const exphbs = require('express-handlebars');
const User = require('./models/User');
const sequelize = require('./config');

const hbs = exphbs.create({});

const app = express();

const PORT = process.env.PORT || 3001;

// Tells node we are using handlebars as our
// templateing engine and configured handlebars as the 
// view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database prior to starting our server
sequelize.sync({ force: true}).then(() => {
    app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
});