// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-api-definition
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

var loopback = require('loopback');
var app = loopback();

// Listen on an ephemeral port
app.set('port', 0);

// Setup default datasources for autoAttach()
app.dataSource('db', {connector: 'memory'});

// Configure REST API path
app.set('restApiRoot', '/rest-api-root');

module.exports = app;
