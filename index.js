const express = require('express')
const app = express();
require('dotenv').config();
var port = process.env.PORT || 3000;

var routes = require('./api/routes');
routes(app);
app.listen(port, function() {
   console.log('Server started on port: ' + port);
});

