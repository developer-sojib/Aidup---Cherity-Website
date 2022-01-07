import React from "react";
import AboutOne from "./AboutOne/AboutOne.js";
import AboutTwo from "./AboutTwo/AboutTwo.js";
import Gallery from "./Gallery/Gallery.js";
import HeroSlider from "./HeroSlider/HeroSlider.js";
import HomeServices from "./HomeServices/HomeServices.js";
import StickerCarrousel from "./StickerCarrousel/StickerCarrousel.js";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <StickerCarrousel />
      <AboutOne />
      <AboutTwo />
      <Gallery />
      <HomeServices />
    </>
  );
};

export default Home;
