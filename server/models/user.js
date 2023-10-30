const mongoose = require("mongoose");

const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const Documents = require("./documents");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must use a valid email address"],
  },

  password: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  uploadedDocs: [Documents.schema],

  purchasedDocs: [Documents.schema],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 5);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("user", userSchema);

module.exports = User;
