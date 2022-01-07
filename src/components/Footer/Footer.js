import React from "react";
import { FormControl } from "react-bootstrap";
import logo from "./../../images/logo-dark.png";
import { NavLink } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <section
      style={{ backgroundColor: "#2F2F2F" }}
      className="pt-5 pb-2 px-3 mt-5 text-white"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-start">
            <div className="row">
              <div className="col-md-4">
                <h4 className="fw-bold" style={{ color: "#31BC9C" }}>
                  Shop
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    paddingLeft: "0",
                  }}
                >
                  <li>
                    <a
                      style={{ textDecoration: "none", color: "#fff" }}
                      href="!#"
                    >
                      Cloths Pot
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ textDecoration: "none", color: "#fff" }}
                      href="!#"
                    >
                      Dispenser Pot
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ textDecoration: "none", color: "#fff" }}
                      href="!#"
                    >
                      Copper Rice Pot
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ textDecoration: "none", color: "#fff" }}
                      href="!#"
                    >
                      Plush Sugar Pot
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h4 className="fw-bold" style={{ color: "#31BC9C" }}>
                  Company
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    paddingLeft: "0",
                  }}
                >
                  <li>
                    <a
                      style={{ textDecoration: "none", color: "#fff" }}
                      href="!#"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ textDecoration: "none", color: "#fff" }}
                      href="!#"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ textDecoration: "none", color: "#fff" }}
                      href="!#"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ textDecoration: "none", color: "#fff" }}
                      href="!#"
                    >
                      Contacts
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h4 className="fw-bold" style={{ color: "#31BC9C" }}>
                  Legal
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    paddingLeft: "0",
                  }}
                >
                  <li>
                    <a
                      style={{ textDecoration: "none", color: "#fff" }}
                      href="!#"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ textDecoration: "none", color: "#fff" }}
                      href="!#"
                    >
                      Checkout
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ textDecoration: "none", color: "#fff" }}
                      href="!#"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-start">
            <img
              style={{ width: "35%", marginBottom: "10px" }}
              src={logo}
              alt=""
            />
            <h4>Subscribe To Our Newsletter</h4>
            <div className="d-flex align-items-center justify-content-start mt-3">
              <FormControl
                style={{ width: "300px" }}
                type="text"
                placeholder="Your Email"
              />
              <button className="btn btn-primary ms-1">SUBMIT</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 text-start">
            <p>© Abdul Awal Sojib - 2021 || All Rights Reserved</p>
          </div>
          <div className="col-md-6 text-end ">
            <NavLink
              style={{
                textDecoration: "none",
                fontSize: "20px",
                color: "#fff",
                marginRight: "10px",
              }}
              to="/"
            >
              <BsFacebook />
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
                fontSize: "20px",
                color: "#fff",
                marginRight: "10px",
              }}
              to="/"
            >
              <BsTwitter />
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
                fontSize: "20px",
                color: "#fff",
                marginRight: "10px",
              }}
              to="/"
            >
              <BsInstagram />
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
                fontSize: "20px",
                color: "#fff",
              }}
              to="/"
            >
              <BsLinkedin />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
