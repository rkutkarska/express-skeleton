const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');

const { PORT } = require('./config/env');
const routes = require('./routes');
const { dbInit } = require('./config/db');

const app = express();

app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

// Body parser
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use(cookieParser());
app.use(routes);

dbInit()
app.listen(PORT, () => console.log(`App is listening on port ${PORT}...`));