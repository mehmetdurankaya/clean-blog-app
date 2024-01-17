const path = require('path');
const fs = require('fs');
const Article = require('../models/Article');

exports.getAboutPage = (req, res) => {
  res.render('about');
};
exports.getPostPage = (req, res) => {
  res.render('post');
};
exports.addArticlePage = (req, res) => {
  res.render('add-article');
};
exports.getEditPage = async (req, res) => {
  const article = await Article.findOne({ _id: req.params.id });
  res.render('edit-article', {
    article,
  });
};

exports.articlePostPage = async (req, res) => {
  await Article.create(req.body);
  res.redirect('/');
};
