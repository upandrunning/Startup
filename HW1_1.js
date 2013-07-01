v#!/usr/bin/env node
var fs = require('fs');
var outfile = "hello.txt";
var out = "Modify this script to write out something different.\n";
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);


//test.js
var express = require('./');
var app = express.createServer();

app.use(express.logger('dev'));

app.get('/', function(req, res){
  console.log(req.protocol);
  res.send('hello');
});
app.listen(3000);
