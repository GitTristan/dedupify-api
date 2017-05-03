var faker = require('faker');
var async = require('async');
var fs = require('fs');

//create how many emails we want.  we want them to be 50% dupes so cut in half of target number
var count = 50000;
var randomEmailArray = [];

var genEmails = function (callback) {

    async.series([
        function (genCallback) {
            for(var i=0; i < count; i++){
                var randomEmail = faker.internet.email();
                //push dupe emails in at same time  50k * 2 = 100,000 emails
                randomEmailArray.push(randomEmail, randomEmail)

            }
            genCallback()
        },
        function (randomizerCallback) {
            //shuffle array for random order
            for (let i = randomEmailArray.length; i; i--) {
                let j = Math.floor(Math.random() * i);
                [randomEmailArray[i - 1], randomEmailArray[j]] = [randomEmailArray[j], randomEmailArray[i - 1]];
            }
            randomizerCallback()
        },

    ], function (err) {
        if(err){
            console.log(err)
        } else {

            callback(null, randomEmailArray);
        }

    });

};


module.exports = genEmails;