var express = require('express');
var mqtt=require('mqtt');
var arr=[];
var client  = mqtt.connect('mqtt://mqtt.wevothings.com');
var app= express.Router();

/*
client.on('connect',function()
{
client.subscribe('lat1');
client.subscribe('long1');
client.subscribe('lat2');
client.subscribe('long2');

});
*/
app.get('/',function(req,res)
{
  res.render('index');  
});

app.post('/map',function(req,res)
{

var lat1=req.body.lat1;
var long1=req.body.long1;
var lat2=req.body.lat2;
var long2=req.body.long2;
console.log(lat1+" "+long1+" "+lat2+" "+long2);
res.render('layout',{title1:lat1,title2:long1,title3:lat2,title4:long2});
});


module.exports = app;
