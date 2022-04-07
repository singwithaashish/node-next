import express from "express";
import jwt from "jsonwebtoken";
import Notification from "../Schemas/notification.js";

const notificationRouter = express.Router();

notificationRouter.get("/", (req, res) => {
  const token = req.headers.authorization;
  const user = jwt.verify(token, "secretkey");

  const notifications = Notification.find({
    user: user._id,
  });
  console.log(notifications);
  res.send(notifications);
});

export default notificationRouter;
