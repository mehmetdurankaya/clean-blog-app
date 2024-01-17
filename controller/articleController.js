const path = require('path');
const fs = require('fs');
const Article = require('../models/Article');

exports.getAllArticles = async (req, res) => {
  const articles = await Article.find({});
  res.render('index', {
    articles,
  });
};

exports.getArticle = async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.render('article', {
    article,
  });
};

exports.createArticle = async (req, res) => {
  // Upload image
  const uploadDir = 'public/uploads/image/';
  try {
    if (!fs.existsSync(uploadDir)) {
      // sync senkron oloarak çalışması gerekiyor çünkü eğer dosya yoksa oluşturmalı
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    let uploadeImage = req.files.image;
    let uploadPath = path.join(uploadDir, uploadeImage.name);

    console.log('Yükleme Yolu:', uploadPath);
    uploadeImage.mv(uploadPath, async (err) => {
      if (err) {
        console.error('Dosya taşınırken bir hata oluştu:', err);
        res.status(500).send('Dosya taşınırken bir hata oluştu.');
      } else {
        await Article.create({
          ...req.body,
          image: '/uploads/image/' + uploadeImage.name,
        });
        res.redirect('/');
      }
    });
  } catch (error) {
    console.error('Makale oluşturulurken bir hata oluştu:', error);
    res.status(500).send('Makale oluşturulurken bir hata oluştu.');
  }
};

exports.updateArticle = async (req, res) => {
  const article = await Article.findOne({ _id: req.params.id });
  article.title = req.body.title;
  article.detail = req.body.detail;
  article.save();
  res.redirect(`/article/${req.params.id}`);
};

exports.deleteArticle = async (req, res) => {
  const article = await Article.findOne({ _id: req.params.id });
  let deleteArticlePath =__dirname + '/../public' + article.image;
  fs.unlinkSync(deleteArticlePath);

  await Article.findByIdAndDelete(req.params.id);
  res.redirect('/');
};
