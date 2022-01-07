import React from "react";
import { BiDonateHeart } from "react-icons/bi";
import { FaHandHoldingWater } from "react-icons/fa";

const HomeServices = () => {
  return (
    <section className="mt-5">
      <div className="container">
        <h5 style={{ color: "#16caa2" }}>ACHIEVED WITH YOU</h5>
        <h1 style={{ marginBottom: "70px" }}>We need your help</h1>
        <div className="row mt-5">
          <div className="col-md-4 border-light shadow rounded p-5">
            <BiDonateHeart
              style={{
                fontSize: "60px",
                marginTop: "-100px",
                backgroundColor: "#16caa2",
                color: "#fff",
                padding: "10px",
                borderRadius: "50%",
              }}
            />
            <h3>Help poor people</h3>
            <p>
              Help the poor children to have better future in the world. It’s
              for mankind
            </p>
            <button
              style={{
                border: "none",
                backgroundColor: "#16caa2",
                padding: "5px 10px",
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              Read more
            </button>
          </div>
          <div className="col-md-4 rounded p-5">
            <BiDonateHeart
              style={{
                fontSize: "60px",
                marginTop: "-100px",
                backgroundColor: "#16caa2",
                color: "#fff",
                padding: "10px",
                borderRadius: "50%",
              }}
            />
            <h3>Save the Humanity</h3>
            <p>
              Help the poor children to have better future in the world. It’s
              for mankind
            </p>
            <button
              style={{
                border: "none",
                backgroundColor: "#16caa2",
                padding: "5px 10px",
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              Read more
            </button>
          </div>
          <div className="col-md-4 border-light shadow rounded p-5">
            <BiDonateHeart
              style={{
                fontSize: "60px",
                marginTop: "-100px",
                backgroundColor: "#16caa2",
                color: "#fff",
                padding: "10px",
                borderRadius: "50%",
              }}
            />
            <h3>A little means more</h3>
            <p>
              Help the poor children to have better future in the world. It’s
              for mankind
            </p>
            <button
              style={{
                border: "none",
                backgroundColor: "#16caa2",
                padding: "5px 10px",
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              Read more
            </button>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 rounded border border-light p-5">
            <FaHandHoldingWater
              style={{
                fontSize: "60px",
                marginTop: "-100px",
                backgroundColor: "#16caa2",
                color: "#fff",
                padding: "10px",
                borderRadius: "50%",
              }}
            />
            <h3>Water for all children</h3>
            <p>
              Help the poor children to have better future in the world. It’s
              for mankind
            </p>
            <button
              style={{
                border: "none",
                backgroundColor: "#16caa2",
                padding: "5px 10px",
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              Read more
            </button>
          </div>
          <div className="col-md-4 border-light shadow rounded p-5">
            <BiDonateHeart
              style={{
                fontSize: "60px",
                marginTop: "-100px",
                backgroundColor: "#16caa2",
                color: "#fff",
                padding: "10px",
                borderRadius: "50%",
              }}
            />
            <h3>A little means more</h3>
            <p>
              Help the poor children to have better future in the world. It’s
              for mankind
            </p>
            <button
              style={{
                border: "none",
                backgroundColor: "#16caa2",
                padding: "5px 10px",
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              Read more
            </button>
          </div>
          <div className="col-md-4 border-light rounded p-5">
            <BiDonateHeart
              style={{
                fontSize: "60px",
                marginTop: "-100px",
                backgroundColor: "#16caa2",
                color: "#fff",
                padding: "10px",
                borderRadius: "50%",
              }}
            />
            <h3>A little means more</h3>
            <p>
              Help the poor children to have better future in the world. It’s
              for mankind
            </p>
            <button
              style={{
                border: "none",
                backgroundColor: "#16caa2",
                padding: "5px 10px",
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
