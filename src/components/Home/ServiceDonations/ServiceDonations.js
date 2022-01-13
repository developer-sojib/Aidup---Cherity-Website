import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ProgressBar from "@ramonak/react-progress-bar";
import { BsSuitHeart } from "react-icons/bs";
import SingleService from "./SingleService/SingleService.js";
import axios from "axios";

const ServiceDonations = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("https://cryptic-everglades-35803.herokuapp.com/services")
      .then((res) => {
        setServices(res.data);
        // setLoading(false)
      });
  }, []);

  return (
    <Container>
      <Row xs={1} md={3} className="g-3">
        {services.map((service) => (
          <SingleService service={service} key={service._id} />
        ))}
      </Row>
    </Container>
  );
};

export default ServiceDonations;
