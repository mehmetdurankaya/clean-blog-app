// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// CONNECT DB
// mongoose.connect('mongodb://localhost/cleanblog-test-db', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

//CREATE SCHEMA
// const CleanSchema = new Schema({
//   title: String,
//   detail: String,
// });

//MODEL
// const Clean = mongoose.model('Clean', CleanSchema);

//CREATE A CLEAN

// Clean.create({
//   title: 'Clean Title 1',
//   detail: 'Clean Detail 1',
// });

//READ A CLEAN

// Clean.find({}).then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err);
// });

//UPDATE A CLEAN
// const id = '65862798a140892305b4e78c';
// Clean.findByIdAndUpdate(id, {
//   title: 'Updated Title 1',
//   detail: 'This is an updated clean 1',
// }).then(
//   (data) => {
//     console.log(data);
//   },
//   { new: true }).catch(err=>{
//     console.log(err);
//   });

//DELETE A CLEAN
// const id = '65862798a140892305b4e78c';
// Clean.findByIdAndDelete(id).then(deleteClean=>{
//     if(deleteClean){
//         console.log('Clean deleted',deleteClean);
//     }
//     else{
//         console.log('Clean not found');
//     }
 
// }).catch(err=>{
//   console.log('Silme işlemi sırasında bir hata oluştu', err);
// });