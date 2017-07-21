var mongoose     = require('mongoose'),
  Schema    = mongoose.Schema,
 QuestionSchema  = new mongoose.Schema({
    _creator:{ type: Schema.Types.ObjectId, ref: "User"},
    question: {
        type: String,
        required:[true,"The Question field is empty"],
        minlength: [15, "The question has to be at least 15 characters in length."]
    },
    correct_answer: {
        type: String,
        required:[true,"Correct answer is empty"]
    },
    fake1: {
        type: String,
        required:[true,"first fake answer is empty"]
    },
    fake2: {
        type: String,
        required:[true,"Second fake answer is empty"]
    },

  },
{ timestamps: true } );


var Question= mongoose.model('Question', QuestionSchema);
