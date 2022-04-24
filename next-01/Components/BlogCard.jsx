import React from "react";
import { Button, Card, Dropdown } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import jwt from "jsonwebtoken";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  setBlogIdtoUpdate,
  setShowCreate,
  setCurrentBlog,
} from "../state/stateSlice";
import { deleteBlog } from "../api/api";

function BlogCard({ title, description, image, author, createdAt, _id }) {
  // console.log(author, jwt.decode(localStorage.getItem('token'))._id)

  // get the api uri from redux state
  const apiUrl = useSelector((state) => state.all.apiUrl);
  const dispatch = useDispatch();
  const blogId = useSelector((state) => state.all?.blogIdtoUpdate);

  const redirect = () => {
    dispatch(
      setCurrentBlog({ title, description, image, author, createdAt, _id })
    );
    Router.push(`/blogs/${_id}`);
  };

  // const deleteBlog = async () => {
  //   const deleteBlog = await fetch(`${apiUrl}/blogs/delete`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: localStorage.getItem("token"),
  //       _id: _id,
  //     },
  //   });
  // };

  const updateBlog = () => {
    // const updateBlog = await fetch(`http://localhost:5000/blogs/update`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: localStorage.getItem("token"),
    //     _id: _id,
    //   },
    // });
    dispatch(setBlogIdtoUpdate(_id));
    dispatch(setShowCreate(true));
    console.log(blogId);
  };

  return (
    /* <Card
      onClick={() => redirect()}
      style={{ minWidth: "18rem", maxHeight: "30rem" }}
      className={`col-12 col-md-3 m-2 ${styles.card}`}
    >
      <Card.Img
        style={{ maxHeight: "10rem", objectFit: "cover" }}
        variant="top"
        src={image}
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
      <Card.Footer className="d-flex">
        <small className="text-muted">Last updated {createdAt} ago</small>

        {author === jwt.decode(localStorage.getItem("token"))._id && (
          <Dropdown
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
            ></Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={(e) => {
                  e.stopPropagation();
                  updateBlog();
                }}
              >
                Update
              </Dropdown.Item>
              <Dropdown.Item
                onClick={(e) => {
                  e.stopPropagation();
                  deleteBlog();
                }}
              >
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          // <span className="d-flex">
          //   <Button
          //     variant="outline-danger"
          //     className="me-3"
          //     onClick={(e) => {
          //       e.stopPropagation();
          //       deleteBlog();
          //     }}
          //   >
          //     Delete
          //   </Button>
          //   <Button
          //     variant="outline-info"
          //     onClick={(e) => {
          //       e.stopPropagation();
          //       updateBlog();
          //     }}
          //   >
          //     Update
          //   </Button>
          // </span>
        )}
      </Card.Footer>
    </Card>*/

    <div
      onClick={() => redirect()}
      className="d-flex flex-column col-12 col-md-4 m-2  p-1 rounded "
      style={{
        background: `linear-gradient(0deg, rgba(50, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${image})`,
        backgroundSize: "cover",
        height: "20rem",
      }}
    >
      <div className="d-flex justify-content-between">
        <h2 className="fs-4 text-light fw-light">{title}</h2>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" variant="dark"></Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={(e) => {
                e.stopPropagation();
                updateBlog(apiUrl);
              }}
            >
              Update
            </Dropdown.Item>
            <Dropdown.Item
              onClick={(e) => {
                e.stopPropagation();
                deleteBlog(apiUrl, _id);
              }}
            >
              Delete
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => console.log("hide")}>
              Hide
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="d-flex">
        <h6 className="text-light fw-lighter">
          {/* {createdAt?.substring(0, 10)} */}
          {description.substring(0, 100)}...
        </h6>
      </div>
    </div>
  );
}

export default BlogCard;
