const mongoose = require("mongoose");

const { Schema } = mongoose;
const User = require("./user");

const docSchema = new Schema({
  author: [{ type: Schema.Types.ObjectId, ref: User }],

  title: {
    type: String,
    required: true,
    unique: true,
  },

  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  preview: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },
});

const Documents = mongoose.model("documents", docSchema);

module.exports = Documents;
