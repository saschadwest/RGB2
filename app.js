var express = require("express");
var app 	= express();
var ejs		= require("ejs");
var colors 	= require("colors");
var bodyParser = require("body-parser");
var howler 	=	require("howler");

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
	res.render("index2");
});


app.listen(3000,function(){
	console.log("Welcome Back John".red);
});