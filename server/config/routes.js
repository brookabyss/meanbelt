var mongoose = require('mongoose');
var User = mongoose.model('User')
var users= require('../controllers/users.js')
var questions = require('../controllers/questions.js')
var path = require("path");
var body= require("body-parser")
module.exports= function(app){
  
  app.post('/users/add', function(req, res, next) {
    console.log(req.body,"Form route the user")
    users.create(req,res)
  })
  app.get('/get_logged_in_user', function(req, res, next) {
    users.logged_in_user(req,res)
  })
   app.post('/questions/new', function(req, res, next) {
    questions.create_question(req,res)
  })
 
  app.get('/get_test', function(req, res, next) {
    questions.get_test(req,res)
  })

  // app.post('/users/login', function(req, res, next) {
  //   console.log("login route",req.body)
  //   users.login(req,res)
  // })
  // app.get('/users/logout', function(req, res, next) {
  //   console.log("login route",req.body)
  //   users.logout(req,res)
  // })
  // 
  
  // app.post('/listings/edit', function(req, res, next) {
  //   listings.update_listing(req,res)
  // })
  // app.post('/listings/delete', function(req, res, next) {
  //   console.log("Routes delete the listings", req.body)
  //   listings.delete_listing(req,res)
  // })
  // app.get("/get_all_listings",function(req, res, next) {
  //   listings.get_listings(req,res)
  // })


  app.all("*", (req,res,next) => {
        res.sendfile(path.resolve("./public/dist/index.html"))
    });
  

}
