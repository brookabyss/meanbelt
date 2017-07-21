var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');

module.exports ={// if errors ,send errors
    create_question: function (req,res){
        console.log("The question in create_question ",req.body._creator)
        console.log("the body parts",req.body)
        let user;
        User.findOne({_id: req.body._creator},function(err,data){
            if (err){
                 console.log(err)
            }
            else{
                user=data
            }
           
        })
        var question = new Question({ question: req.body.question,correct_answer: req.body.question,fake1: req.body.fake1,fake2: req.body.fake2,_creator: req.body._creator })
        question.save(function(err,question){
            if(err){
                console.log("Question not saved",err)
                res.json(false)
            }
            else{
                console.log("lets' see this user object", user)
                user.questions.push(question)
                Question.find({},function(err,questions){
                        if (err){
                            console.log("Error retrieving questions from db",err)
                        }
                        else{
                            
                            res.json(questions)
                        }
                 })
            }
        })
        
    },
    get_questions: function (req,res){
        Question.find({},function(err,questions){
                        if (err){
                            console.log("Error retrieving questions from db",err)
                        }
                        else{
                            console.log("get listings are we &*&&&&&&&*%^**^*^**^")
                            res.json(questions)
                        }
                    })
    },
    get_test: function (req,res){
        let test=[]
        Question.find({},function(err,questions){
                        if (err){
                            console.log("Error retrieving questions from db",err)
                        }
                        else{
                            for(let i = 0;i < 3; i++){
                                let idx= Math.floor(Math.random()*questions.length)
                                test.push(questions[idx])
                                console.log(test)
                            }
                            console.log(test)
                            res.json(test)
                        }
                    })
    },
    
    // update_listing: function (req,res){
    //     Listing.update({_id: req.body._id},{
    //         title: req.body.title,
    //         bike_img: req.body.bike_img,
    //         location: req.body.location,
    //         description: req.body.description,
    //         price: req.body.price,
    //     }, function(err, numberAffected, rawResponse){
    //         console.log(err);
    //         console.log(rawResponse);
    //         console.log(numberAffected);
    //     })
    //     res.redirect('/get_all_listings')
    // },
    // delete_listing: function (req,res){
    //     console.log("the deleting id is ",req.body.id)
    //     Listing.remove({_id: req.body.id},function(err){
    //         if (err){
    //             res.json(false)
    //         }
    //         else{
    //             res.redirect('/get_all_listings')
    //         }
    //     })
    // },

}
