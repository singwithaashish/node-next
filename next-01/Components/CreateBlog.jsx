import React from "react";
import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import jwt from "jsonwebtoken";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowCreate } from "../state/stateSlice";

function CreateBlog() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState(
    "https://images.unsplash.com/photo-1621243547624-c40189fed5e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8aFNQNkp4OHc0WjR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
  );

  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.all?.showCreate);
  const blog = useSelector((state) => state.all.allBlogs);
  const updId = useSelector((state) => state.all?.blogIdtoUpdate);
  const apiUrl = useSelector(state => state.all.apiUrl)

  const fill = () => {
    console.log(updId);
    const mbb = blog.find((blog) => blog._id === updId);
    if (updId) {
      console.log(mbb);
      setTitle(mbb.title);
      setDescription(mbb.description);
      setImage(mbb.image);
    }
  };

  useEffect(() => {
    fill();
  }, [showModal]);

  const handleSubmit = () => {
    // console.log(title, description, image);
    fetch(`${apiUrl}/blogs/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title: title,
        description: description,
        author: jwt.decode(localStorage.getItem("token")).id,
        image: image,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    handleClose();
  };

  const handleUpdate = async () => {
    const updateBlog = await fetch(`${apiUrl}/blogs/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
        id: updId,
      },
      body: JSON.stringify({
        title: title,
        description: description,
        image: image,
      }),
    });
    // const res = await updateBlog.json();
    console.log(updateBlog);

    handleClose();
  };

  const handleClose = () => dispatch(setShowCreate(false));

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create a blog</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column">
          <span className="mb-3">
            <h5>A sweet title</h5>
            <textarea
              placeholder="Title"
              className="w-100"
              value={title}
              onInput={(e) => setTitle(e.target.value)}
            />
          </span>
          <span className="mb-3">
            <h5>A simple description</h5>
            <textarea
              placeholder="Description"
              className="w-100"
              value={description}
              onInput={(e) => setDescription(e.target.value)}
            />
          </span>
          <h5>An image</h5>
          <Button variant="outline-primary">Choose an Image</Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Abort
        </Button>
        <Button variant="success" onClick={updId ? handleUpdate : handleSubmit}>
          {updId ? "Update" : "Post"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateBlog;
