var moment = require("moment")
var time = function(time){
    var patt = /^[0-9]*$/g;
    var isNum = patt.test(time);
    // console.log(isNum);
    if(isNum){
        var date = moment.unix(time);
        var data = {
            unix: time,
            natural : date.format('MMMM DD YYYY')
        }
        return data;
    } else {
        if(moment(time,'MMMM DD YYYY').isValid()){
            var date = moment(time,'MMMM DD YYYY');
            console.log(time);
            var data = {
                unix: date.format('X'),
                natural: time
            }
            return data;
        } else {
            return {
                unix: null,
                natural: null
            }
        }
    }
}
module.exports = time;