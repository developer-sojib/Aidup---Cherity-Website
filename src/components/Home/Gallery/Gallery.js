import React from "react";
import img1 from "./../../../images/gallery-1.jpg";
import img2 from "./../../../images/gallery-2.jpg";
import img3 from "./../../../images/gallery-3.jpg";
import img4 from "./../../../images/gallery-4.jpg";
import img5 from "./../../../images/gallery-5.jpg";
import img6 from "./../../../images/gallery-6.jpg";

const Gallery = () => {
  return (
    <section className="mt-5">
      <div className="container">
        <h5 style={{ color: "#16caa2" }}>GALLERY</h5>
        <h1 className="mb-5">Our Gallery</h1>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img1} alt="" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <img src={img2} alt="" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <img src={img3} alt="" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <img src={img4} alt="" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <img src={img5} alt="" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <img src={img6} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
