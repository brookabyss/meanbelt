var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');

module.exports ={// if errors ,send errors
  
  create: function(req,res){
    console.log("create function",req.body.name)
    let user= new User({name: req.body.name, score: req.body.score, percentage: req.body.percentage  })
    user.save(function(err){
          if (err){
            console.log("Inside register error",err)
            res.json(false)
          }
          else{
            req.session.user_id=user._id
            console.log("From registration the currrent user is ", req.session.user_id)
            res.json(user)
          }
        })
  },
  // login: function(req,res){
  //   console.log("in login", req.body)
  //   User.findOne({email: req.body.email,password: req.body.password})
  //   .then(user => {
  //     if(!user){
  //       res.json(false)
  //     }
  //     else{
  //       req.session.user_id=user._id
  //       console.log("current user id is", req.session.user_id)
  //        res.json(user)
  //     }
  //   })
  //   .catch(err=> res.json(false))
  // },
  logged_in_user: function(req,res){
    console.log("terrific from logged_in_user")
    console.log(req.session.user_id)
    if(req.session.user_id){
      console.log("from logged_in_user")
      User.findOne({_id: req.session.user_id})
      .then(user=>{res.json(user)
        console.log("what am I getting?" ,user)
      })
      .catch(err=>console.log(err))
    }
    else{
      console.log("redirecting to home")
      res.json(false)
    }
  },
  logout: function(req,res){
    console.log("bye bye, loggin out")
    req.session.destroy()
    res.redirect('/')
  }
}
