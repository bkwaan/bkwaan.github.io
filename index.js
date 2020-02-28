const express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var jsonFILE = './public/artists.json';
app.use(bodyParser.text());


app.use(express.static('public'));

app.post('/add', (req,res)=> {
  var data = JSON.parse(req.body);
  fs.writeFile(jsonFILE,(JSON.stringify(data)),(err)=> {
    if(err) {
      console.log(err);
    } 
  });
});


app.get('/loads', (req,res)=> {
  var artist;
  fs.readFile('./public/artists.json',(err,data)=> {
    if(err) {
      console.log(err);
    }
      artist = JSON.parse(data);
      res.send(artist);
    
  })
});

app.post('/delete',(req,res)=> {
    var data = JSON.parse(req.body);
    fs.writeFile(jsonFILE,(JSON.stringify(data)),(err)=>{
      if(err) {
        console.log(err);
      }
    });
});

app.listen(process.env.PORT || 3000);