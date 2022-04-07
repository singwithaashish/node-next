import mongoose from "mongoose";


const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    }
    
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("blog", blogSchema);



export default Blog;