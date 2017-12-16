'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const siteSchema = new Schema({
  name: String,
  uri: String,
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  createdOn: { type: Date, default: Date.now },
  lastCheck: { type: Date, default: Date.now },
  nextCheck: { type: Date },
  currentCert: Object
});

mongoose.model('site', siteSchema);
