import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
  Container,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setShowCreate } from "../state/stateSlice";

function CnavBar() {
  const dispatch = useDispatch();
  const {theme, setTheme} = useTheme();
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
    <div style={{position: "fixed", width: "100vw", zIndex: 15}}>
      <Navbar bg={theme} className={`bg-${theme}`} expand="lg" variant={theme}>
        <Container>
          <Navbar.Brand href="/">journalist</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 d-flex align-items-center"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link href={"/"}>
                <a className="text-secondary me-2 text-decoration-none">Home</a>
              </Link>
              <Link href={"/notifications"}>
                <a className="text-secondary me-2 text-decoration-none">Notifications</a>
             </Link>
              <Link href={"/profile"}>
                <a className="text-secondary me-2 text-decoration-none">profile</a>
              </Link>
              <Button variant="outline-success" onClick={() => dispatch(setShowCreate(true))}>Create</Button>
            </Nav>
            <Form className="d-flex">
            <Button variant="outline-danger me-3" onClick={logout}>Logout</Button>
              {/* <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-info">Search</Button> */}
              <div className="d-flex align-items-center">

              {/* <label htmlFor="dark" className="me-2">{theme}</label> */}
              {/* <input type="checkbox" id="dark" name="dark" value={theme === "dark" ? true : false} onChange={e => setTheme(e.target.value ? "dark" : "light")}/> */}
              {/* <h5>Theme : </h5> */}
              <h5 className="ms-2 fw-normal text-decoration-underline" onClick={e => setTheme(theme === "light" ? "dark" : "light")} style={{cursor: "pointer"}}>{theme}</h5>
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    <div style={{height: "3.3rem", width: "100vw"}} className={`bg-${theme}`}></div>
    </>
  );
}

export default CnavBar;
