const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create schema
const CleanSchema = new Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date, //tarih formatında olacak
    default: Date.now, // her yüklenen fotoğrafın varsayılan tarihini o günün tarihi olarak al
  },
});

const Clean = mongoose.model('Clean', CleanSchema); // model oluşturuluyor

module.exports = Clean;
