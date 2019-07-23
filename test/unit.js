// Copyright IBM Corp. 2015,2017. All Rights Reserved.
// Node module: loopback-api-definition
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

const expect = require('chai').expect;
const apiDef = require('../lib/get-api-def');

describe('Test function getApiDef', function() {
  const sampleAppJs = require('./fixtures/app.js');

  it('No format specified', function() {
    const value = apiDef.getApiDef(sampleAppJs, {});
    expect(value).to.contain('swagger: \'2.0\'');
  });

  it('Yaml format', function() {
    const value = apiDef.getApiDef(sampleAppJs, {format: 'yaml'});
    expect(value).to.contain('swagger: \'2.0\'');
    expect(value).to.not.contain('!<tag:yaml.org,2002:js/undefined> \'\'');
  });

  it('JSON format', function() {
    const value = apiDef.getApiDef(sampleAppJs, {format: 'JSON'});
    expect(value).to.contain('"swagger":"2.0"');
  });
});
