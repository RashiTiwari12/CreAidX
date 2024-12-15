const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "please enter user name"],
  },
  email: {
    type: String,
    required: [true, "please enter user email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please enter user email"],
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
