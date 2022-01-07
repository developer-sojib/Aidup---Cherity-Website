import React from "react";
import sticker1 from "./../../../images/f1.png";
import sticker2 from "./../../../images/f2.png";
import sticker3 from "./../../../images/f3.png";
import sticker4 from "./../../../images/f4.png";
import sticker5 from "./../../../images/f5.png";
import sticker6 from "./../../../images/f6.png";

const StickerCarrousel = () => {
  return (
    <section
      style={{
        backgroundColor: "#F7F7F7",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
      className="mb-5"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <img src={sticker1} alt="" />
          </div>
          <div className="col-md-2">
            <img src={sticker2} alt="" />
          </div>
          <div className="col-md-2">
            <img src={sticker3} alt="" />
          </div>
          <div className="col-md-2">
            <img src={sticker4} alt="" />
          </div>
          <div className="col-md-2">
            <img src={sticker5} alt="" />
          </div>
          <div className="col-md-2">
            <img src={sticker6} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickerCarrousel;
