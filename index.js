var express = require("express");
var timeStampMs = express();
var time = require("./time.js");
var port = Number(process.env.PORT||8080);
timeStampMs.get('/:time',function(req,res){
    var data = req.params;
    // console.log(data);
    res.json(time(data.time));
});
timeStampMs.use('/',express.static(__dirname+'/public'));
timeStampMs.listen(port,function(){
    console.log('Everything is OK');
});