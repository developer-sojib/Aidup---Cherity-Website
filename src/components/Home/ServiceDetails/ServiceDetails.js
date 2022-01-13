import React from "react";
import "./style.css";
import single1 from "./../../../images/sinlge-1.jpg";
import { Button, Form } from "react-bootstrap";
import img1 from "./../../../images/gallery-2.jpg";

const ServiceDetails = () => {
  return (
    <section>
      {/* banner part  */}
      <div className="bg-banner d-flex align-items-center text-start">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="ps-5 fw-bold">Cherity Details</h1>
            </div>
            <div className="col-md-12">
              <p className="ps-5 fw-bold">
                Raise a Helping Hand For Poor People
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* body part  */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 text-start">
            <h1>Help poor people</h1>
            <img
              style={{ width: "90%", marginTop: "20px", marginBottom: "20px" }}
              src={single1}
              alt=""
            />
            <p style={{ fontSize: "14px" }} className="pe-5">
              Most forms of charity are concerned with providing basic
              necessities such as food, water, clothing, healthcare and shelter,
              but other actions may be performed as charity: visiting the
              imprisoned or the homebound, ransoming captives specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum Most forms of charity are concerned with providing
              basic necessities such as food, water, clothing, healthcare and
              shelter, but other actions may be performed as charity: visiting
              the imprisoned or the homebound, ransoming captives specimen book.
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <br />
            <br />
            <br />
            <h2>Leave a Reply</h2>
            <p>
              Your email address will not be published. Required fields are
              marked
            </p>
            <div className="comment-form pe-4">
              <div className="d-flex">
                <Form.Control
                  className="w-50"
                  type="text"
                  placeholder="Your Name"
                />
                <Form.Control
                  className="w-50 ms-2"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <br />
              <Form.Label>Write your comment...</Form.Label>
              <Form.Control style={{ resize: "none" }} as="textarea" rows={3} />
            </div>
          </div>

          {/* col md  4 */}
          <div
            style={{ backgroundColor: "" }}
            className="col-md-4 p-5 shadow-sm"
          >
            <Form className="text-start d-flex align-items-center">
              <Form.Group
                className="mb-3 w-75"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Search</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Button className="ms-2 mt-3">Search</Button>
            </Form>
            <br />
            <div className="text-start">
              <h5>Recent Post</h5>
              <br />
              <div className="d-flex align-items-center">
                <div className="w-50">
                  <img className="img-fluid" src={img1} alt="" />
                </div>
                <div className="post-headline ps-3">
                  <span style={{ fontSize: "14px", color: "#31bc9c" }}>
                    11 january, 2022
                  </span>
                  <h6>Help the poor people to have better future in the</h6>
                </div>
              </div>
              <br />
              <div className="d-flex align-items-center">
                <div className="w-50">
                  <img className="img-fluid" src={img1} alt="" />
                </div>
                <div className="post-headline ps-3">
                  <span style={{ fontSize: "14px", color: "#31bc9c" }}>
                    11 january, 2022
                  </span>
                  <h6>Help the poor people to have better future in the</h6>
                </div>
              </div>
              <br />
              <h5>Our Categories</h5>
              <div className="category-li">
                <ul>
                  <li style={{ color: "#31bc9c" }}>
                    <a style={{ textDecoration: "none" }} href="#">
                      CHARITY
                    </a>
                  </li>
                  <li style={{ color: "#31bc9c" }}>
                    <a style={{ textDecoration: "none" }} href="#">
                      FUNDRISING
                    </a>
                  </li>
                  <li style={{ color: "#31bc9c" }}>
                    <a style={{ textDecoration: "none" }} href="#">
                      We love help
                    </a>
                  </li>
                  <li style={{ color: "#31bc9c" }}>
                    <a style={{ textDecoration: "none" }} href="#">
                      Helps people life
                    </a>
                  </li>
                  <li style={{ color: "#31bc9c" }}>
                    <a style={{ textDecoration: "none" }} href="#">
                      Care about people
                    </a>
                  </li>
                  <li style={{ color: "#31bc9c" }}>
                    <a style={{ textDecoration: "none" }} href="#">
                      Donation us to help poor
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tags-area">
                <h5>Popular Tags</h5>
                <div className="tags-btn">
                  <button
                    className="me-2 mb-2"
                    style={{
                      border: "1px solid #ddd",
                      padding: "5px 15px",
                      backgroundColor: "#fff",
                    }}
                  >
                    isabela
                  </button>
                  <button
                    className="me-2 mb-2"
                    style={{
                      border: "1px solid #ddd",
                      padding: "5px 15px",
                      backgroundColor: "#fff",
                    }}
                  >
                    samanta
                  </button>
                  <button
                    className="me-2 mb-2"
                    style={{
                      border: "1px solid #ddd",
                      padding: "5px 15px",
                      backgroundColor: "#fff",
                    }}
                  >
                    emily
                  </button>
                  <button
                    className="me-2 mb-2"
                    style={{
                      border: "1px solid #ddd",
                      padding: "5px 15px",
                      backgroundColor: "#fff",
                    }}
                  >
                    HEATER
                  </button>
                  <button
                    className="me-2 mb-2"
                    style={{
                      border: "1px solid #ddd",
                      padding: "5px 15px",
                      backgroundColor: "#fff",
                    }}
                  >
                    JUNE
                  </button>
                  <button
                    className="me-2 mb-2"
                    style={{
                      border: "1px solid #ddd",
                      padding: "5px 15px",
                      backgroundColor: "#fff",
                    }}
                  >
                    GRACE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
