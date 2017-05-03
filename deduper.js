var runDeDuper = function (array, callback) {

    var result = getUnique(array);
    callback(null, result)

};

function getUnique(array) {
    return Array.from(new Set(array));
}


module.exports = runDeDuper;