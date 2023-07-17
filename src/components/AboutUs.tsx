// import React from 'react';
import sushi from "../assets/sushi_assets/assets/sushi-3.png";
import sushiTwo from "../assets/sushi_assets/assets/sushi-2.png";
import arrowUpRight from "../assets/sushi_assets/assets/arrow-up-right.svg";

const AboutUs = () => {
  return (
    <section className="about-us" id="about-us">
      <div className="about-us__image">
        <div className="about-us__image-sushi3">
          <img src={sushi} alt="sushi" data-aos="fade-right" />
        </div>
        <button className="about-us__button">
          Learn More
          <img src={arrowUpRight} alt="learn more" />
        </button>
        <div className="about-us__image-sushi2">
          <img src={sushiTwo} alt="sushi2" data-aos="fade-right" />
        </div>
      </div>
      <div className="about-us__content" data-aos="fade-left">
        <p className="sushi__subtitle">About Us / 私たちに関しては</p>
        <h3 className="sushi__title">
          Our mission is to bring true Japanese flavours to you.
        </h3>
        <p className="sushi__description">
          We will continue to provide the experience of Omotenashi, the Japanese
          mindset of hospitality, with our shopping and dining for our
          customers.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
