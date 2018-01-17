const express = require('express');
const bodyParser = require('body-parser');
const key = require('./api');
const app = express();
const request = require('request');


const PORT = process.env.PORT || 5000;


app.use(express.static(__dirname +'./../../'));
app.use(bodyParser.json())
app.listen(PORT);

app.get('/popular', (req, res) => {
  request('https://api.themoviedb.org/3/movie/popular?api_key='+key.key+'&language=en-US&page=1', (err, response, body)=>{
    if(err){
      res.send(err);
    }
    else {
      const data = JSON.parse(body);
      res.send(data);
      
    }
  })
});

app.post('/search', (req, res) =>{
  request('https://api.themoviedb.org/3/search/movie?api_key='+key.key+'&language=en-US&query='+req.body.data+'&page=1&include_adult=false', (err, response, body)=>{
    if(err){
      res.send(err);
    }
    else {
      const search = JSON.parse(body);
      res.send(search);
    }
  })
});

app.post('/movie', (req, res) =>{
  request('https://api.themoviedb.org/3/movie/'+req.body.data+'?api_key='+key.key+'&language=en-US&page=1&include_adult=false', (err, response, body)=>{
    if(err){
      res.send(err);
    }
    else {
      const search = JSON.parse(body);
      console.log(search);
      res.send(search);
    }
  })
});

app.post('/movie/review', (req, res) =>{
  request('https://api.themoviedb.org/3/movie/'+req.body.id+'/reviews?api_key='+key.key+'&language=en-US&page=1', (err, response, body)=>{
    if(err){
      res.send(err);
    }
    else {
      const reviews = JSON.parse(body);
      res.send(reviews);
    }
  })
});

