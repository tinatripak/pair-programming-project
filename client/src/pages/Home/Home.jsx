import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__banner"
        src="/src/assets/home-bg.png"
        alt="coffee surrounded by pinecones and tree branch"
      />
      <div className="top-left">
        <h1 className="home__heading">
          You can't buy <span className="uppercase">happiness</span> <br /> but
          you can buy <span className="uppercase">coffee</span>
        </h1>

        <section className="home__btn">
          <Link to="/coffee-shops">
            <button className="home__btn-left">Coffee Shops</button>
          </Link>
          <Link to="/about-us">
            <button className="home__btn-right">About Us</button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;
