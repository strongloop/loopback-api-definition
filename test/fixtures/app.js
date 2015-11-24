var loopback = require('loopback');
var app = loopback();

// Listen on an ephemeral port
app.set('port', 0);

// Setup default datasources for autoAttach()
app.dataSource('db', { connector: 'memory' });
app.use(loopback.User, { dataSource: 'db' });

// Configure REST API path
app.set('restApiRoot', '/rest-api-root');

module.exports = app;