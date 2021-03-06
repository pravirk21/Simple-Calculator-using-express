const express = require("express");
const bodyParser = require("body-parser");//require body parser


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight/(height*height);

  res.send("Your BMI: " + bmi);
});

app.post("/",function(req,res){
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);

  var ans = n1+n2;
  res.send("Your Ans: "+ans);
});

app.listen(3000,function(){
  console.log("Server Started at port 3000");
});
