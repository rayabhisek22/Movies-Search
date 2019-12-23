var express = require('express');
var app = express();
var request = require('request');
app.set("view engine","ejs");


app.get("/results",function(req,res){
  var s=req.query.movie;
  var url = "http://www.omdbapi.com/?apikey=4c283c1d&s="+s;
  request(url,function(error,response,body){
    if(!error && response.statusCode==200){
      var data = JSON.parse(body);
      res.render("results",{s:s,data:data});
    }
  });
  console.log("requsting the results. ");
});

app.get("/",function(req,res){
  res.render("home");
  console.log("requested the home page...");
});

var port = process.env.PORT || 8080
app.listen(port,function(){
  console.log("Movie App has started!");
})
