const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

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

  uploadedDocs: [docSchema],

  purchasedDocs: [docSchema],
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

const User = model("user", userSchema);

module.exports = User;
