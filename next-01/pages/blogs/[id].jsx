import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Container, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentBlog } from "../../state/stateSlice";
import Router from "next/router";
import { useTheme } from "next-themes";
import { useState } from "react";

function Blogpost() {
  // console.log(prop);
  const router = useRouter();
  const dispatch = useDispatch();
  // console.log(router.query.id);

  const allLoadedBlogs = useSelector((state) => state.all?.allBlogs);
  // const randomBlogs = allLoadedBlogs.sort(() => 0.5 - Math.random());

  const [thisBlog, setThisBlog] = useState(
    allLoadedBlogs.find((blog) => blog._id === router.query.id)
  );

  const redirect = (_id) => {
    dispatch(setCurrentBlog(thisBlog));
    Router.push(`/blogs/${_id}`);
  };
  const apiUrl = useSelector((state) => state.all.apiUrl);

  useEffect(async () => {
    console.log("reached here");
    if (!thisBlog) {
      console.log("aaaaaaaaaaaaaaaa");
      const thisB = await fetch(`${apiUrl}/blogs/${router.query.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });
      // thisBlog = await thisB.json();
      setThisBlog(await thisB.json());
      console.log(thisBlog);
      dispatch(setCurrentBlog(thisBlog));
    }
  }, [thisBlog, router.query.id]);

  return thisBlog ? (
    <Container className={`d-flex `}>
      <div className="d-flex flex-column align-items-center text-center col-12 col-md-9">
        <h2>{thisBlog.title}</h2>
        <div className="d-flex ms-auto">
          <h6 className="text-secondary me-2">{thisBlog?.author}</h6>
          <h6 className="text-secondary">
            {thisBlog.createdAt?.substring(0, 10)}
          </h6>
        </div>

        <img src={thisBlog.image} className="rounded w-75 my-5" />
        <p>{thisBlog.description}</p>
      </div>
      <div
        className="w-0 w-md-25 ms-2 d-none d-md-block"
        style={{ position: "fixed", right: 0, bottom: 0 }}
      >
        <h3>Up next</h3>
        {allLoadedBlogs &&
          allLoadedBlogs.slice(0, 3).map((blog) => {
            return <NextBlog blog={blog} redirect={redirect} key={blog._id} />;
          })}
      </div>
    </Container>
  ) : (
    <div>Loading...</div>
  );
}

const NextBlog = ({ blog, redirect }) => {
  return (
    <div
      onClick={() => redirect(blog._id)}
      className="d-flex flex-column col-md-12 my-2 p-1 rounded "
      style={{
        background: `linear-gradient(0deg, rgba(50, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${blog.image})`,
        backgroundSize: "cover",
        height: "10rem",
      }}
    >
      <div className="d-flex justify-content-between">
        <h2 className="fs-4 text-light fw-light">{blog.title}</h2>
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic"
            variant="secondary"
          ></Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Update</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Hide</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="d-flex">
        {/* <h6 className="text-primary me-2">{blog.author}</h6> */}
        <h6 className="text-light fw-lighter">
          {blog.createdAt?.substring(0, 10)}
        </h6>
      </div>
    </div>
  );
};

export default Blogpost;
