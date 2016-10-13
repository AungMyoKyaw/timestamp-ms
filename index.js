var express = require("express");
var timeStampMs = express();
var time = require("./time.js");
timeStampMs.get('/:time',function(req,res){
    var data = req.params;
    // console.log(data);
    res.json(time(data.time));
});
timeStampMs.use('/',express.static(__dirname+'/public'));
timeStampMs.listen(8080,function(){
    console.log('OK');
});