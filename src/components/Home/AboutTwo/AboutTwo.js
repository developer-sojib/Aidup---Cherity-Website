import React from "react";
import { ProgressBar } from "react-bootstrap";
import aboutImg from "./../../../images/about5.png";

const AboutTwo = () => {
  const charity = 60;
  const funcdrising = 75;
  const donation = 85;
  return (
    <section
      style={{
        backgroundColor: "#f7f7f7",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img className="w-100" src={aboutImg} alt="" />
          </div>
          <div className="col-md-6 text-start px-5">
            <h6 style={{ color: "#16caa2" }}>CHERITY</h6>
            <h2>Aidup Charity</h2>
            <p>
              The practice of charity means the voluntary giving of help to
              those in need, as a humanitarian act. There are a number of
              philosophies about charity, often associated with religion.
              Effective altruism is the use of evidence and reasoning to
              determine
            </p>
            <h5>CHARITY</h5>
            <ProgressBar animated now={charity} label={`${charity}%`} />
            <h5>FUNDRAISING</h5>
            <ProgressBar animated now={funcdrising} label={`${funcdrising}%`} />
            <h5>DONATION</h5>
            <ProgressBar animated now={donation} label={`${donation}%`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
