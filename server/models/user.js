var mongoose     = require('mongoose'),
  Schema    = mongoose.Schema,
  UserSchema  = new mongoose.Schema({
    name:{
      type: String,
      required:  [true,'Name is empty'],
    },
   
    score: {
        type: Number,
      },
    percentage:{
      type: String,
    },
    questions:[{ type: Schema.Types.ObjectId, ref :'Question', default: null}],

    },
    { timestamps: true } );


var User= mongoose.model('User', UserSchema);
