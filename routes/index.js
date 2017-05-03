var deDupe = require('../runGenAndDedupe');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Email DeDupify API - ChefSteps Example' });
});

router.post('/', function(req, res) {

  deDupe(function(err, result, explainStr, array){
    if(result == false){
      res.status(200).send({
        status: 200,
        text: explainStr,
        deDupedArrayLength:array.length,
        deDupedArray: array
      });

    } else {
      res.status(400).send({message:"Something went wrong with the function because the array still contains dupes"});

    }
  })

});

module.exports = router;
