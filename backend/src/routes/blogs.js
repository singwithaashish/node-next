import express from "express";
import Blog from "../Schemas/blog.js";
import jwt from "jsonwebtoken";
import User from "../Schemas/user.js";
import mongoose from "mongoose";

const router = express.Router();

// read
router.get("/", (req, res) => {
  const token = req.headers.authorization;
  const user = jwt.verify(token, "secretkey");
  console.log(user);
  if (user.id) {
    return Blog.find()
      .then((blogs) => {
        res.send(blogs);
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    res.status(401).send({ message: "Unauthorized" });
  }
});

// create
router.post("/create", async (req, res) => {
  const token = req.headers.authorization;
  const user = jwt.verify(token, "secretkey");
  console.log(user);
  if (!user.id) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  const blog = new Blog({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    author: req.body.author,
  });
  
  try{
    const reb = await blog.save()
    console.log(reb._id)
    const u = await User.findByIdAndUpdate(user.id, {$push: {posts: reb._id}})
    console.log(u)
    res.send(result);

  }catch(e){
    res.status(500).send(e)
  }
  
  blog
    .save()
    .then((result) => {
    })
    .catch((err) => {
      res.send(err);
    });
    // console.log(blog);
    // ADD BLOG id TO USER'S POST HISTORY
  User.findByIdAndUpdate(user.id, { $push: { blogs: "blog._id" } }).then(() => {
    // console.log("added to user");
  });
  // console.log("bokini bottom")
});

// update
router.put("/update", (req, res) => {
  const token = req.headers.authorization;
  const user = jwt.verify(token, "secretkey");
  if (!user.id) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  // console.log(req.body);


  Blog.findOneAndUpdate(
    { _id: mongoose.Types.ObjectId(req.headers.id) },
    { title: req.body.title, description: req.body.description, image: req.body.image },
  )
    .then((result) => {
      res.send(result);
      // console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

// delete
router.delete("/delete", async (req, res) => {
  const blog_id = req.headers.id;
  const token = req.headers.authorization;
  const user = jwt.verify(token, "secretkey");
  console.log("deletingg");
  if (!user.id ) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  try{
    console.log(blog_id)
    // const blog = await Blog.findById(mongoose.Types.ObjectId(blog_id))
    // console.log(blog.author + "user : " + user.id)
    // if(blog.author != user.id){
    //   console.log("error")
    //   return res.status(401).send({ message: "Unauthorized" });
    // }
    // ! this is not being called !^
    // console.log(blog)
    const result = await Blog.findByIdAndRemove( new mongoose.Types.ObjectId(blog_id), (err, res) => {
      if (err) return handleError(err);
      console.log('removed')
    } )
    // console.log(bl)
    // delete blog from user
    const user = await User.findByIdAndUpdate(user.id, { $pull: { blogs: blog_id } });
    // console.log(user)
    res.send(result);

  }catch(err){
    res.send(err);
  }

});

// read
router.get("/:id", async (req, res) => {
  const token = req.headers.authorization;
  const user = jwt.verify(token, "secretkey");

  if (!user.id) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  try {
    const blog = await Blog.findById(req.params.id);
    res.send(blog);
  } catch (err) {
    res.send(err);
  }
});

router.get('/by/:author', async (req, res) => {
  const token = req.headers.authorization;
  const user = jwt.verify(token, "secretkey");
  if (!user.id) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  try {
    const blog = await Blog.find({ author: req.params.author });
    res.send(blog);
  } catch (err) {
    res.send(err);
  }
});
export default router;
