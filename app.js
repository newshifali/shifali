var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var ObjectId = require('mongodb').ObjectID; //jhjhjhjhjhjhjhjh

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// ++++++++++++++++++++++++++++++++++++++++++++

var mongojs = require('mongojs')             //ghjggghggjjh
var db = mongojs("taskdatabase", ["user"])    //ghjggghggjjh

var mongo = require('mongodb');        //ghjggghggjjh 
var assert = require('assert');       //ghjggghggjjh





app.post("/add_api",function(req,res,next)
{
      console.log("AddApi ki body========>>",req.body)
      var name = req.body.name;
      var lname =req.body.lname;
      var  phoneno =req.body.phone;
      var email =req.body.email;
      db.user.insert({name:name,lname:lname,phoneno:phoneno,email:email},function(error,result){
      	
         res.send({status:"true",message:"Your data has been inserted"})
      })    
});


app.post("/update_api",function(req,res,next)
{
      console.log("update_api ki body========>>",req.body)
      var name = req.body.name;
      var lname =req.body.lname;
      var  phoneno =req.body.phone;
      var email=req.body.email
      var id = req.body.id ; 
      
       db.user.update({_id:ObjectId(id)},{$set:{name:name,lname:lname,phoneno:phoneno,email:email}},function(error,resulots){
         res.send({status:"true",message:"Your data has been fetch",data:resulots})
          
       })
});

app.post("/fetch_api",function(req,res,next)
{
      console.log("fetch_api ki body========>>",req.body)
   
      db.user.find({},function(error,result){

          // console.log("result --fetch_api--->>",result)

         res.send({status:"true",message:"Your data has been fetch",data:result})
      })    
});


app.post("/delete_api",function(req,res,next)
{
      var id = req.body.id
      console.log("delete_api ki body========>>",id)
   
      db.user.remove({_id:ObjectId(id)},function(error,result){

          console.log("result --fetch_api--->>",result)

         res.send({status:"true",message:"Your data has been fetch",data:result})
      })    
});


// ++++++++++++++++++++++++++++++++++++++++++++
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
app.listen('4444',function(){
  console.log(" server is running at 4444")
})
