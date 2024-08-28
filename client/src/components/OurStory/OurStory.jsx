import cafeImage from "../../assets/about-us.png";
import "./OurStory.scss";

const OurStory = () => {
  return (
    <section className="our-story">
      <div className="our-story__content">
        <h1 className="our-story__heading">Our Story</h1>
        <p className="our-story__text">
          This website was created with a love and by two coffee connoisseurs
          who can't live without coffee because their mood depends on that!
          <br /> <br />
          Coffee is an uncontrollable urge. Coffee is fuel. Coffee is comfort.
          Coffee is my best friend. Coffee is life.
        </p>
      </div>
      <img className="our-story__image" src={cafeImage} alt="About us" />
    </section>
  );
};

export default OurStory;
