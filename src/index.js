const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const morgan = require('morgan');
const handlebars = require('express-handlebars');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

app.engine(
    'hbs',
    handlebars.engine({
        extname: 'hbs',
    }),
);
  app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

        app.get('/', (req, res) => res.render('home'));
app.get('/search', (req, res) => res.render('search'));
app.get('/news', (req, res) => res.render('news'));
app.get('/news/:slug', (req, res) => res.render('detail'));
app.get('/contact', (req, res) => res.render('contact'));

app.listen(port, () => {
    console.log(`app listen an port ${port}`);
});
