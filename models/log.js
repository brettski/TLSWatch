'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const logSchema = new Schema({
  createdOn: { type: Date, default: Date.now },
  type: String,
  data: String,
  cert: Schema.Types.Mixed
});

mongoose.model('log', logSchema);
