import React from "react";
import { Button, Container, Modal } from "react-bootstrap";
import BlogCard from "./BlogCard";
import CreateBlog from "./CreateBlog";

function HomePage({ datas}) {
  // console.log(datas)
  return (
    <>
      <Container>
        <div className="row d-flex justify-content-center">
          {
          datas.length > 0 ?
          datas.map((dat, index) => {
            return (
              <BlogCard
                key={index}
                title={dat.title}
                description={dat.description}
                author={dat.author}
                imgUrl={dat.image}
                time={dat.createdAt}
                id={dat._id}
              />
            );
          }) : <h1>Unauthorized or no blogs</h1>}
        </div>
      </Container>
      {/* <CreateBlog creating={creating} setCreating={setCreating}/> */}
    </>
  );
}



export default HomePage;
