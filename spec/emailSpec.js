var runDeDupe = require('../deduper');
var randomEmailGenerator = require('../randomEmailGenerator');
var now = require("performance-now");


describe("Email dupe checker", function() {

    randomEmailGenerator(function(err, array){
        if(err){
            console.log(err)
        } else {
            var start = now();
            var dupes = true;

            runDeDupe(array, function (err, data) {
                if(err){
                    console.log(err)
                } else{
                    var end = now();
                    var diff = (end-start).toFixed(3);

                    var explainStr = "Call to dedupe function took " + diff + " milliseconds.";

                    console.log(explainStr);

                    if(hasDuplicates(data) == false){
                        dupes = false
                    }

                    it("contains no dupes", function() {

                        expect(dupes).toBe(false);

                    });

                }

            });
        }
    })


});

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}