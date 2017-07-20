var express = require ('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));



//DATABASE

var db = require('./models');
var controllers = require('./controllers');

//ROUTES!

app.get("/", function homepage (req, res){
  res.sendFile('views/index.html', {root: __dirname});
  console.log("DIRNAMEasdfsadf;sda", __dirname);
});

app.get('/api', controllers.api.index);



app.listen(process.env.PORT || 3000, function(){
  console.log("Express server is up and running on http://localhost:3000/");
});
