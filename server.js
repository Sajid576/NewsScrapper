
const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){
      res.send("I'm alive!");
 });

//this middlewar used for printing the client request for dev purpose
var morgan = require('morgan')
app.use(morgan('dev'))

//this is used for parsing the body data from request
app.use(express.json());
 
const NewsScrapApi=require('./api/routes/NewsScrapApi');
const ScrapModel = require('./api/model/ScrapModel');
app.use('/NewsScrapApi',NewsScrapApi);



var PORT= process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT,()=>{
      console.log("Server listening on PORT: "+PORT);
      new ScrapModel.ScrapModel();

});
