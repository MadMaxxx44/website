// import React from 'react';
import sushiNine from "../assets/sushi_assets/assets/sushi-9.png";
import sushiEight from "../assets/sushi_assets/assets/sushi-8.png";
import sushiSeven from "../assets/sushi_assets/assets/sushi-7.png";
import sushiSix from "../assets/sushi_assets/assets/sushi-6.png";
import sushiTwelve from "../assets/sushi_assets/assets/sushi-12.png";
import sushiEleven from "../assets/sushi_assets/assets/sushi-11.png";
import sushiTen from "../assets/sushi_assets/assets/sushi-10.png";
import star from "../assets/sushi_assets/assets/star.svg";
import arrowRight from "../assets/sushi_assets/assets/arrow-right.svg";

const Popular = () => {
  return (
    <section className="popular-foods" id="menu">
      <h2 className="popular-foods__title" data-aos="flip-up">
        Popular Food / 人気
      </h2>
      <div
        className="popular-foods__filters sushi__hide-scrollbar"
        data-aos="fade-up"
      >
        <button className="popular-foods__filter-btn active">All</button>
        <button className="popular-foods__filter-btn">
          <img src={sushiNine} alt="sushi 9" /> Sushi
        </button>
        <button className="popular-foods__filter-btn">
          <img src={sushiEight} alt="sushi 9" /> Ramen
        </button>
        <button className="popular-foods__filter-btn">
          <img src={sushiSeven} alt="sushi 9" /> Udon
        </button>
        <button className="popular-foods__filter-btn">
          <img src={sushiSix} alt="sushi 9" /> Danggo
        </button>
        <button className="popular-foods__filter-btn">All</button>
      </div>
      <div className="popular-foods__catalogue" data-aos="fade-up">
        <div className="popular-foods__card">
          <img
            className="popular-foods__card-image"
            src={sushiTwelve}
            alt="sushi"
          />
          <h4 className="popular-foods__card-title">Chezu Sushi</h4>
          <div className="popular-foods__card-details flex-between">
            <span className="popular-foods__card-rating">
              <img src={star} alt="star" />
              <p>4.9</p>
            </span>
            <span className="popular-foods__card-price">$21.00</span>
          </div>
        </div>
        <div className="popular-foods__card active-card">
          <img
            className="popular-foods__card-image"
            src={sushiEleven}
            alt="sushi"
          />
          <h4 className="popular-foods__card-title">Original Sushi</h4>
          <div className="popular-foods__card-details flex-between">
            <span className="popular-foods__card-rating">
              <img src={star} alt="star" />
              <p>5.0</p>
            </span>
            <span className="popular-foods__card-price">$19.00</span>
          </div>
        </div>
        <div className="popular-foods__card">
          <img
            className="popular-foods__card-image"
            src={sushiTen}
            alt="sushi"
          />
          <h4 className="popular-foods__card-title">Ramen Legendo</h4>
          <div className="popular-foods__card-details flex-between">
            <span className="popular-foods__card-rating">
              <img src={star} alt="star" />
              <p>4.7</p>
            </span>
            <span className="popular-foods__card-price">$13.00</span>
          </div>
        </div>
      </div>
      <button className="popular-foods__button">
        Explore Food
        <img src={arrowRight} alt="arrow-right" />
      </button>
    </section>
  );
};

export default Popular;
