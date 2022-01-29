const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config');
const routes = require('./routes')
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

app.use(routes);

// Connect to the database prior to starting our server
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
});