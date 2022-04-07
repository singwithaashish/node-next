import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    porfilePicture: {
      type: String,
      required: false,
    },
    posts: [
      {
        // type: mongoose.Schema.Types.ObjectId,
        pid: String
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("users", userSchema);

export default User;