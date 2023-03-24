const mongoose = require('../config/mongodatabase');
const { Schema } = mongoose;


const SchoolSchema = new Schema({
     
    name_school: {
        type: String,
       required: false
    },
    price_school: {
        type:  Number,
       required: false
    },
    description_school: {
        type: String,
       required: false
    },
    tech: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tech',
      },
        
  });
  
  const School = mongoose.model('School', SchoolSchema);
  module.exports = School;