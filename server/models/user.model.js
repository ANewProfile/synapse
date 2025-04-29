import mongoose from "mongoose";

//incomplete model rn just for auth
const userSchema = new mongoose.model({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: false,
  },

  password: {
    type: String,
    required: true,
    minLength: 6,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
