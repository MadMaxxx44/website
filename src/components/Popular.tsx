// import React from 'react';
import sushiNine from "../assets/sushi_assets/assets/sushi-9.png";
import sushiEight from "../assets/sushi_assets/assets/sushi-8.png";
import sushiSeven from "../assets/sushi_assets/assets/sushi-7.png";
import sushiSix from "../assets/sushi_assets/assets/sushi-6.png";
import arrowRight from "../assets/sushi_assets/assets/arrow-right.svg";

const Popular = () => {
  return (
    <section className="popular-foods" id="menu">
      <h2 className="popular-foods__title">Popular Food / 人気</h2>
      <div className="popular-foods__filters sushi__hide-scrollbar">
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
        <button className="popular-foods__filter-btn">Others</button>
      </div>
      <div className="popular-foods__catalogue"></div>
      <button className="popular-foods__button">
        Explore Food
        <img src={arrowRight} alt="arrow-right" />
      </button>
    </section>
  );
};

export default Popular;
