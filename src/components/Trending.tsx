import check from "../assets/sushi_assets/assets/check.svg";
import arrowHorizontal from "../assets/sushi_assets/assets/arrow-horizontal.svg";
import arrowVertical from "../assets/sushi_assets/assets/arrow-vertical.svg";
import sushiFive from "../assets/sushi_assets/assets/sushi-5.png";
import sushiFour from "../assets/sushi_assets/assets/sushi-4.png";

const Trending = () => {
  return (
    <>
      <section className="trending" id="food">
        <section className="trending-sushi">
          <div className="trending__content" data-aos="fade-right">
            <p className="sushi__subtitle">What’s Trending / トレンド</p>
            <h3 className="sushi__title">Japanese Sushi</h3>
            <p className="sushi__description">
              Feel the taste of the most delicious Sushi here.
            </p>
            <ul className="trending__list flex-between">
              <li>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Make Sushi</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Nigiri Sushi</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Oshizushi</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Temaki Sushi</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Uramaki Sushi</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Inari Sushi</p>
              </li>
            </ul>
          </div>
          <div className="trending__image flex-center">
            <img src={sushiFive} alt="sushi-5" data-aos="fade-left" />
            <div className="trending__arrow trending__arrow-left">
              <img src={arrowVertical} alt="vertical arrow" />
            </div>
            <div className="trending__arrow trending__arrow-bottom">
              <img src={arrowHorizontal} alt="horizontal arrow" />
            </div>
          </div>
        </section>
        <div className="trending__discover" data-aos="zoom-in">
          <p>Discover</p>
        </div>
        <section className="trending-drinks">
          <div className="trending__image flex-center">
            <img src={sushiFour} alt="sushi-4" data-aos="fade-right" />
            <div className="trending__arrow trending__arrow-top">
              <img src={arrowHorizontal} alt="horizontal arrow" />
            </div>
            <div className="trending__arrow trending__arrow-right">
              <img src={arrowVertical} alt="vertical arrow" />
            </div>
          </div>
          <div className="trending__content" data-aos="fade-left">
            <p className="sushi__subtitle">What’s Trending / トレンド</p>
            <h3 className="sushi__title">Japanese Drinks</h3>
            <p className="sushi__description">
              Feel the taste of the most delicious Japanese drinks here.
            </p>
            <ul className="trending__list flex-between">
              <li>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Oruncha</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Sakura Tea</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Aojiru</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Ofukucha</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Kombu-cha</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Mugicha</p>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </>
  );
};

export default Trending;
