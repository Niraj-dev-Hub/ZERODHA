import React from "react";

// Dashboard Subcomponent Imports
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';

const HomePage = () => {
  return (
    <>
      {/* Main Page Layout Sections */}
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />

    </>
  );
};

export default HomePage;
