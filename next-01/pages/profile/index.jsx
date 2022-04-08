import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import BlogCard from "../../Components/BlogCard";

function Index() {
  const [userr, setUserr] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const apiUrl = useSelector(state => state.all.apiUrl)

  useEffect(async () => {
    const user = await fetch(`${apiUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });


    // console.log(user)
    const userData = await user.json();
    console.log(userData.user)
   
    
    
    const blogs = await fetch(
      `${apiUrl}/blogs/by/${userData.user._id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
      );
      const blogsData = await blogs.json();
      setBlogs(blogsData);
      console.log(userData.user)
      setUserr(userData.user);
      console.log(userr);
      // console.log(blogs)
  }, []);


  

  return (
    <Container>
      <div className="top d-flex align-items-center py-3 border-bottom border-primary">
        <Image
          fluid
          rounded
          src="https://images.unsplash.com/photo-1621243547624-c40189fed5e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8aFNQNkp4OHc0WjR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="user"
          style={{ width: "300px", height: "300px", objectFit: "cover" }}
        />
        <div className="right">
          <h1 className="text-primary">Username</h1>
          <h5 className="text-secondary">singwithaashish@gmail.com</h5>
          <h6 className="text-muted">user since 2020</h6>
        </div>
      </div>
      <div className="bottom">
        <h2>Posts</h2>
        <div className="posts row d-flex justify-content-center">
          {blogs
            ? blogs.map((post) => {
                return (
                  <BlogCard
                    title={post.title}
                    description={post.description}
                    imgUrl={post.image}
                    author={post.author}
                    time={post.createdAt}
                    id={post._id}
                    key={post._id}
                  />
                );
              })
            : null}
        </div>
      </div>
    </Container>
  );
}

export default Index;
