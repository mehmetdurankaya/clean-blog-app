const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const ejs = require('ejs');
const path = require('path');
const Article = require('./models/Article');
const pageController = require('./controller/pageController');
const articleController = require('./controller/articleController');

const app = express();

//connect DB
mongoose.connect('mongodb://localhost/clean-blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);
//ROUTES
app.get('/', articleController.getAllArticles);
app.get('/article/:id', articleController.getArticle);
app.post('/article', articleController.createArticle);
app.put('/article/:id', articleController.updateArticle);
app.delete('/article/:id', articleController.deleteArticle);

app.get('/about', pageController.getAboutPage);
app.get('/add-article', pageController.addArticlePage);
app.get('/article/edit/:id', pageController.getEditPage);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
