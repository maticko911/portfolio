import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Matic</span>👋
      <br />A Software Engineer from Slovenia.
    </h1>
  ),
  2: (
    <InfoBox
      text="Student at university In Maribor"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Some of my recent projects."
      link="/projects"
      btnText="Visit my crafts"
    />
  ),
  4: (
    <InfoBox
      text="Want to talk with me? I'm just few keystrokes away!"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || 0;
};

export default HomeInfo;
