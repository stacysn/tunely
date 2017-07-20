var express = require {'express'}
    app = express();

var bodyParse = require('body-parser');
app.use(bodyParser.urlencoded[{extended: true}]);

//ROUTES!

app.get("/", function (req, res){
  res.send("Hello thereeeee ;) ")
})
