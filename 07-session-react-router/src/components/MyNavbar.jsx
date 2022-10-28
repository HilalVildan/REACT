import React from "react";
import {
  Navbar,
  Container,
  Nav
} from "react-bootstrap";
import logo from "../img/logo.png";
import { Link, NavLink } from "react-router-dom";
const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to="/">
          {" "}
          <img src={logo} alt="" />{" "}
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              to="/"
              className="nav-link"
              style={({ isActive }) => ({ color: isActive && "red" })}
            >
              Home
            </NavLink>
            <NavLink
              to="/teacher"
              className="nav-link"
              style={({ isActive }) => ({ color: isActive && "red" })}
            >
              Teacher
            </NavLink>
            <NavLink
              to="/courses"
              className="nav-link"
              style={({ isActive }) => ({ color: isActive && "red" })}
            >
              Courses
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link"
              style={({ isActive }) => ({ color: isActive && "red" })}
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
