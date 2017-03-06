var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function(){
  console.log("Running on:", app.get('port'));
});

app.get('/', function(req,res){
  console.log("Home");
  res.sendFile(path.resolve('public/views/index.html'));
});
