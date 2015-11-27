'use strict';
var path = require('path');
var yaml = require('js-yaml');
var createSwaggerObject = require('loopback-swagger').generateSwaggerSpec;

/**
 * Generate swagger api definitions
 * Can take in options format and output file.
 * Default format is yaml and output location to current location.

 * @param {Object} loopbackApplication
 * @param {Object} options
 * @returns {String}
 */
function getApiDef(loopbackApplication, options) {
  options = options || {};

  var swaggerObject = createSwaggerObject(loopbackApplication);
  var data = '';
  var outputLocation = options.output;
  var format = options.format || 'yaml';

  if ((format && format.match(/json/i)) ||
    (outputLocation && path.extname(outputLocation) === '.json')) {
    data = JSON.stringify(swaggerObject);
  } else {
    data = yaml.dump(swaggerObject);
  }

  return data;
}

exports.getApiDef = getApiDef;
