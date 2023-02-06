import React from "react";
import Features from "../components/Features";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Listing from "../components/Listing";
import { InfoData, InfoDataTwo } from "../data/InfoData";
import { SliderData } from "../data/SliderData";

const Home = () => {
  return (
    <>
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <Listing />
      <Features />
      <InfoSection {...InfoDataTwo} />
    </>
  );
};

export default Home;
