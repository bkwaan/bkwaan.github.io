const express = require('express');
var app = express();
var bodyParser = require('body-parser');
let path = require('path');
let db = require('./util/database');

app.use(bodyParser.json());

var routes = require('./routes/loginroute');

let expressHbs = require('express-handlebars');
app.engine('hbs',
  expressHbs({layoutsDir:'views/layouts/',
  defaultLayout:'main-layout',
  extname:'hbs'
})
);
app.set('view engine','hbs');
app.set('views','views');

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({ extended: false })) // middleware


app.get('/', function(req,res){
  res.render('login', {mainCSS : true});
});

app.use(routes);


app.listen(process.env.PORT || 3000);