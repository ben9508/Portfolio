var express  = require("express"),
   app      = express();
//var  mongoose = require("mongoose");
 
//mongoose.connect("mongodb://localhost.com/portfolio");
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function( req, res){
    res.render("index");
});

app.listen(9000, function(){
    console.log("Server started***");
});