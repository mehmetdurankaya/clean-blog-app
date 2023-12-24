const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create schema
const PostSchema = new Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date, //tarih formatında olacak
    default: Date.now, // her yüklenen fotoğrafın varsayılan tarihini o günün tarihi olarak al
  },
});

const Post = mongoose.model('Post', PostSchema); // model oluşturuluyor

module.exports = Post;
