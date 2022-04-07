import mongoose from "mongoose";

const notificationSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    read: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Notification = mongoose.model("notification", notificationSchema);
export default Notification;
