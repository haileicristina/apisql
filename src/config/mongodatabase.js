const mongoose = require('mongoose')
    

mongoose.set('strictQuery',false);
mongoose.connect(
    'mongodb://127.0.0.1/apisql',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
     
    },
    (err) =>{
      if(err) {
        console.log(err, 'MongoDB Fail!!!');
      }else {
        console.log('MongoDB Connect!!!');
      }
    }
);  
  
mongoose.Promise = global.Promise;
module.exports = mongoose
  