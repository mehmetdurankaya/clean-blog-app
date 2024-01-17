const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create schema
const ArticleSchema = new Schema({
  title: String,
  detail: String, 
  image:String,
  dateCreated: {
    type: Date, //tarih formatında olacak
    default: Date.now, // her yüklenen fotoğrafın varsayılan tarihini o günün tarihi olarak al
  },
});

const Article = mongoose.model('Article', ArticleSchema); // model oluşturuluyor

module.exports = Article;
