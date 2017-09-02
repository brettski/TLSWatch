'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const queueSchema = new Schema({
  added: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  site: { type: Schema.Types.ObjectId, ref: 'site'}
  uri: String
});

mongoose.model('queue', queueSchema);
