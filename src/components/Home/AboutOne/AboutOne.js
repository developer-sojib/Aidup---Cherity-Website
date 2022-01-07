import React from "react";
import about from "./../../../images/about2.jpg";
import { FcDonate } from "react-icons/fc";

const AboutOne = () => {
  return (
    <section className="mb-5">
      <div className="container">
        <div className="row text-start align-items-center">
          <div className="col-md-6">
            <img className="w-100" src={about} alt="" />
          </div>
          <div className="col-md-6 px-5">
            <div className="row align-items-center">
              <div className="col-md-2">
                <h1>70</h1>
              </div>
              <div
                className="col-md-10 text-start"
                style={{ borderLeft: "3px solid #f7f7f7" }}
              >
                <h3>
                  Years <br />
                  in charity
                  <br />
                  Done
                </h3>
              </div>
            </div>
            <div className="text-start mt-3">
              <p>
                The practice of charity means the voluntary giving of help to
                those in need, as a humanitarian act. There are a number of
                philosophies about charity, often associated with religion.
                Effective altruism is the use of evidence and reasoning to
                determine
              </p>
              <FcDonate
                style={{
                  fontSize: "40px",
                  padding: "5px",
                  backgroundColor: "#f4f4f4",
                  borderRadius: "50%",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
              />
              <h4>Donate for helpless</h4>
              <p>
                Charitable giving is the act of giving money, goods or time to
                the unfortunate, either directly or by means of a charitable
                trust or other worthy cause
              </p>
              <FcDonate
                style={{
                  fontSize: "40px",
                  padding: "5px",
                  backgroundColor: "#f4f4f4",
                  borderRadius: "50%",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
              />
              <h4>Save the Humanity</h4>
              <p>
                Charitable giving is the act of giving money, goods or time to
                the unfortunate, either directly or by means of a charitable
                trust or other worthy cause
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;
