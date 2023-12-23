const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const Clean = require('./models/Clean');

const app = express();

//connect DB
mongoose.connect('mongodb://localhost/clean', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
app.get('/', async (req, res) => {
  const cleans = await Clean.find({});
  res.render('index', {
    cleans,
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/contact', (req, res) => {
  res.render('contact');
});
// app.post('/cleans', (req, res) => {
//   console.log(req.body);
//   res.redirect('/');
// });
app.post('/cleans', async (req, res) => {
  await Clean.create(req.body);
  res.redirect('/');
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
