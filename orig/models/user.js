'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  twitterId: String,
  email: String,
  firstname: String,
  lastname: String,
  createdOn: { type: Date, default: Date.now },
  lastUpdated: { type: Date, default: Date.now }
});

mongoose.model('user', userSchema);
