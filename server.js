var express = require ('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

//ROUTES!

app.get("/", function homepage (req, res){
  res.sendFile('views/index.html', {root: __dirname});
  console.log("DIRNAMEasdfsadf;sda", __dirname);
})




app.listen(process.env.PORT || 3000, function(){
  console.log("Express server is up and running on http://localhost:3000/");
});
