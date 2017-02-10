'use strict';

const express = require('express');

// Create our app
const app = express();
const port = 2000;

app.use(express.static('public'));

app.listen(port, () => console.log('Express server is up on port ' + port));