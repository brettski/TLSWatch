'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const queueSchema = new Schema({
  added: { type: Date, default: Date.now },
  user: Schema.Types.ObjectId,
  uri: String
});

mongoose.model('queue', queueSchema);
