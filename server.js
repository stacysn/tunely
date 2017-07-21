var express = require ('express');
var app = express();
var bodyParser = require('body-parser');


// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));



//DATABASE

var db = require('./models');

//ROUTES!

app.get("/", function homepage (req, res){
  res.sendFile('views/index.html', {root: __dirname});
  console.log("DIRNAMEasdfsadf;sda", __dirname);
})



app.get('/api/albums', controllers.albums.index);
app.post('/api/albums', controllers.albums.create);

/**********
 * SERVER *
 **********/

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server is up and running on http://localhost:3000/");
});
