/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // could either add an argument to the parameters or could call the last arguyment passed into the function
  // wants to read the first line of something (a file?)
  fs.readFile(filePath, 'utf8', (err, file) => {
    if (err) {
      callback(err, null);
    } else {
      let lines = file.split('\n');
      callback(err, lines[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  //
  request.get(url, (err, response) => {
    if (err) {
      callback(err, null);
    } else {
      callback(err, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
