import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "./../../images/logo-dark.png";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";


const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ borderBottom: "1px solid #ddd" }}
    >
      <Container>
        <NavLink to="/home">
          <img style={{ height: "50px", width: "90%" }} src={logo} alt="" />
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center fw-bold">
            <NavLink
              style={{
                textDecoration: "none",
                color: "#000",
                marginRight: "10px",
              }}
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
                marginRight: "10px",
                color: "#000",
              }}
              to="/cherity"
            >
              Cherity
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
                marginRight: "10px",
                color: "#000",
              }}
              to="/pages"
            >
              Pages
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
                marginRight: "10px",
                color: "#000",
              }}
              to="/shop"
            >
              Shop
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
                marginRight: "10px",
                color: "#000",
              }}
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
                marginRight: "50px",
                color: "#000",
              }}
              to="/contact"
            >
              Contact us
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
                fontSize: "22px",
                marginRight: "10px",
                color: "#31BC9C",
              }}
              to="/"
            >
              <BsFillCartFill />
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
                fontSize: "22px",
                color: "#31BC9C",
              }}
              to="/"
            >
              <BsFillSuitHeartFill />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
