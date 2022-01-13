import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ProgressBar from "@ramonak/react-progress-bar";
import { BsSuitHeart } from "react-icons/bs";

const SingleService = ({ service }) => {
  const { title, fee, image, description, goal } = service;

  let donationGoal = goal;
  let donationTotal = fee;
  // const totalStillNeeded= 0,
  // const  reachedGoal= false

  const percentage = (donationTotal, donationGoal) => {
    return (donationTotal / donationGoal) * 100 > 100
      ? 100
      : (donationTotal / donationGoal) * 100;
  };

  let percent = percentage(donationTotal, donationGoal); //5000 taki vagfol 100% var kora
  console.log(percent);

  return (
    <Col>
      <Card>
        <Card.Img
          style={{ width: "100%", height: "250px" }}
          variant="top"
          src={image}
        />
        <Card.Body style={{ height: "185px" }}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description.slice(0, 200)}</Card.Text>
        </Card.Body>

        <div className="row px-3 py-2">
          <div className="d-flex justify-content-between">
            <p>Raised: $ {fee}</p>
            <p>Goal: $ {goal}</p>
          </div>
          <ProgressBar height="15px" completed={percent.toFixed(1)} />
        </div>
        <div className="row px-3">
          <div className="d-flex justify-content-between pb-4 align-items-center">
            <Button>Donate</Button>
            <p>
              <BsSuitHeart style={{ color: "#31BC9C", marginRight: "5px" }} />
              <b>Donars</b>: 30
            </p>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default SingleService;
