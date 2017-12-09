'use strict';

certf = require('./cert.js');

function runner() {
  // get checks to make
  // get live cert and compare to checks
  // record results

}

exports.run = function() {
  setInerval(runner, 3600000); // hourly
}
