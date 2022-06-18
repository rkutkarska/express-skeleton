const express = require('express');
const { PORT } = require('./config/env');
const routes = require('./routes');

const hbs = require('express-handlebars');

const app = express();

app.engine = ('hbs', hbs.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

// Body parser
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use(routes);


app.listen(PORT, () => console.log(`App is listening on port ${PORT}...`));