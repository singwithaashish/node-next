import express from "express";
import User from "../Schemas/user.js";
import jwt from "jsonwebtoken";
import Notification from "../Schemas/notification.js";

const userRouter = express.Router();

userRouter.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    console.log(user._id)
    if (!user) {
      return res.status(401).send({ message: "Invalid Credentials" });
    }
    jwt.sign({  email: req.body.email,
      id: user._id, }, "secretkey", (err, token) => {
      return res.send({ token: token, user: true });
    });

    // return res.json({login: true, user: user})
  } catch (e) {
    res.status(500).send(e);
  }
});

userRouter.post("/register", async (req, res) => {
  //   console.log(req.body);
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    profilePicture: req.body.profilePicture,
  });

  try {
    // * creates user
    const st = await user.save();

    // * creates token and logs user in
    if (!st) {
      return res.status(500).send({ message: "Error in saving user" });
    }
    jwt.sign(
      { email: req.body.email, id: user._id, },
      "secretkey",
      (err, token) => {
        //   console.log(token)
        return res.send({ token: token, user: true });
      }
    );

    // * sends a new welcome notification
    const notification  = new Notification({
      message: `Welcome to the blog ${user.username}`,
      user: user._id,
    });
    notification.save();
    
  } catch (e) {
    res.status(500).send(e);
  }
});


userRouter.get("/me", async (req, res) => {
  const token = req.headers.authorization;
  const user = jwt.verify(token, "secretkey");
  console.log(user);
  if (token) {
    try {
      const userr = await User.findById(user.id);
      console.log(userr);
      if (!userr) {
        return res.status(404).send({ message: "No user found" });
      }
      return res.json({ user: userr });
    } catch (e) {
      res.status(500).send(e);
    }
  } else {
    res.status(401).send({ message: "Unauthorized" });
  }
})

export default userRouter;

