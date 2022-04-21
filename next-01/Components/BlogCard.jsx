import React from "react";
import { Button, Card } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import jwt from "jsonwebtoken";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setBlogIdtoUpdate, setShowCreate } from "../state/stateSlice";

function BlogCard({ title, description, imgUrl, author, time, id }) {
  // console.log(author, jwt.decode(localStorage.getItem('token')).id)

  // get the api uri from redux state
  const apiUrl = useSelector((state) => state.all.apiUrl);
  const redirect = () => {
    Router.push(
      {
        pathname: "/blogs/" + id,
        query: { title, description, imgUrl, author, time, id },
      },
      `/blogs/${id}`
    );
  };

  const deleteBlog = async () => {
    const deleteBlog = await fetch(`${apiUrl}/blogs/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
        id: id,
      },
    });
  };

  const dispatch = useDispatch();
  const blogId = useSelector((state) => state.all?.blogIdtoUpdate);

  const updateBlog = () => {
    // const updateBlog = await fetch(`http://localhost:5000/blogs/update`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: localStorage.getItem("token"),
    //     id: id,
    //   },
    // });
    dispatch(setBlogIdtoUpdate(id));
    dispatch(setShowCreate(true));
    console.log(blogId);
  };

  return (
    /*<Card
      onClick={() => redirect()}
      style={{ minWidth: "18rem", maxHeight: "30rem" }}
      className={`col-12 col-md-3 m-2 ${styles.card}`}
    >
      <Card.Img
        style={{ maxHeight: "10rem", objectFit: "cover" }}
        variant="top"
        src={imgUrl}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text
          style={{
            textOverflow: "elipsis",
            overflow: "hidden",
            maxHeight: "5rem",
          }}
        >
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated {time} ago</small>
        
        {author === jwt.decode(localStorage.getItem("token")).id ? (
          <span className="d-flex">
            <Button
              variant="outline-danger"
              className="me-3"
              onClick={(e) => {
                e.stopPropagation();
                deleteBlog();
              }}
            >
              Delete
            </Button>
            <Button
              variant="outline-info"
              onClick={(e) => {
                e.stopPropagation();
                updateBlog();
              }}
            >
              Update
            </Button>
          </span>
        ) : (
          <></>
        )}
      </Card.Footer>
    </Card>*/

    <div
      className="d-flex flex-column align-items-center text-center col-12 col-md-3 m-2"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <h2>{title}</h2>
      <div className="d-flex ms-auto">
        <h6 className="text-secondary me-2">{author}</h6>
        <h6 className="text-secondary">{/* {date} */}</h6>
      </div>
    </div>
  );
}

export default BlogCard;
