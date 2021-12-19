const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', function(req,res){
  fs.readdir('./uploads', function(err, data){
    res.render('index', {data : data});
  });
});


router.get('/create', function(req,res){
  let filepath = `./uploads/${req.query.filename}`;

  fs.writeFile(filepath, '', function(err){
    if(err)res.send('Something went wrong')
    else res.redirect('/');
  });
});

router.get('/delete/:something', function(req,res){

  let path = `./uploads/${req.params.something}`;

  fs.unlink(path, function(err){
    if(err)res.send('Something went wrong')
    else res.redirect('/');
  });
});

module.exports = router;
