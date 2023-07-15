// import React from 'react';
import hero from "../assets/sushi_assets/assets/sushi-1.png";
import play from "../assets/sushi_assets/assets/play-circle.svg";
import user from "../assets/sushi_assets/assets/user.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={hero} alt="sushi" />
        <h2>
          日 <br />本 <br />食
        </h2>
        <div className="hero-image__overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-content-info">
          <h1>Feel the taste of Japanese food</h1>
          <p>
            Feel the taste of the most popular Japanese food from anywhere and
            anytime.
          </p>

          <div className="hero-content__buttons">
            <button className="hero-content__order-button">Order Now</button>
            <button className="hero-content__play-button">
              <img src={play} />
              How to Order
            </button>
          </div>
        </div>

        <div className="hero-content__testimonial">
          <div className="hero-content__customer flex-center">
            <h4>
              24<span>k+</span>
              <p>Happy Customers</p>
            </h4>
          </div>
          <div className="hero-content__review">
            <img src={user} alt="user" />
            <p>
              "This is the best Japanese food delivery service that ever
              existed."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
