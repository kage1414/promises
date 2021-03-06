/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var { getGitHubProfileAsync } = require('./promisification');
var { pluckFirstLineFromFileAsync } = require('./promiseConstructor');

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // we want to call pluck first... on readflie path
  // use that username and call getgithub...
  // then we want to write that resposne t rwritefilepath
  return pluckFirstLineFromFileAsync(readFilePath)
    .then((user) => {
      return getGitHubProfileAsync(user);
    })
    .then((response) => {
      let stringifiedData = JSON.stringify(response);
      fs.writeFileSync(writeFilePath, stringifiedData);
    });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
