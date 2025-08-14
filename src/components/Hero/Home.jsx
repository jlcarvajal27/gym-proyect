import Header from "../Header/Header";
import "./Home.css";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import portada from "../../assets/portada.png";

const Home = () => {
  return (
    <div className="home-page" id="home">
      <div className="left-h">
        <Header />
        <div className="message">
          <div></div>
          <span>The Best Fitness Club</span>
        </div>
        <div className="home-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span> Ideal Body </span>
          </div>
          <div>
            <span className="">
              Strength doesn't come from what you can do. It comes from
              overcoming the things you once thought you couldn't.
            </span>
          </div>
        </div>

        <div className="data-page">
          <div>
            <span>+140</span>
            <span>expert coach</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="home-buttons">
          <button className="btn">Get started</button>
          <button className="btn"> Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join now</button>

        <div className="home-rate">
          <img src={heart} alt="" />
          <span>Heart rate</span>
          <span> 116 bpn</span>
        </div>

        <img src={portada} alt="" className="home-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />

        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>222Kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
