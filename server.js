'use strict';

const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const keys = require('./config/keys');

//define models
require('./models/models');

const app = express();

require('./routes/auth')(app);

const PORT = process.env.PORT || 8086;
app.listen(PORT);
console.log('server listening on port', PORT);
