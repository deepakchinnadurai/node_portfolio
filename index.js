const express = require('express')
const app = express()
var path = require("path")


app.use(express.static(__dirname + '/public'));
app.use('/images',express.static(__dirname + '/Assets'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/home', function (req, res) {
    res.render('home', {title: 'title'});
  });

app.get('/about',function(req,res){
   res.render('about', {title: 'about'});
});

app.get('/works',function(req,res){
  res.render('works', {title: 'works'});
});

app.get('/contact',function(req,res){
  res.render('contact', {title: 'contact'});
});
app.listen(3000);
console.log(`app is running on 3000`);