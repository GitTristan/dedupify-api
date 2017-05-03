var runDeDupe = require('./deduper');
var randomEmailGenerator = require('./randomEmailGenerator');
var now = require("performance-now");

var runGenAndDeDupe = function (callback) {
    randomEmailGenerator(function(err, array){
        if(err){
            console.log(err)
        } else {
            var start = now();
            var hasDupes = true;

            runDeDupe(array, function (err, data) {
                if(err){
                    console.log(err)
                } else{
                    var end = now();
                    var diff = (end-start).toFixed(3);

                    var explainStr = "Call to dedupe function took " + diff + " milliseconds.";

                    console.log(explainStr);

                    if(hasDuplicates(data) == false){
                        hasDupes = false
                    }

                    callback(null, hasDupes, explainStr, data)

                }

            });
        }
    })

};

module.exports = runGenAndDeDupe;


function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}