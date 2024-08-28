import OurStory from "../../components/OurStory/OurStory";
import OurTeam from "../../components/OurTeam/OurTeam";
import ScrollCarousel from "scroll-carousel-react";

import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <OurStory />
      <div className="about__carousel">
        <ScrollCarousel autoplay smartSpeed speed={6}>
          {Array.from({ length: 8 }, (_, index) => (
            <p key={index} className="about__carousel-text">
              Coffee Girls
            </p>
          ))}
        </ScrollCarousel>
      </div>
      <OurTeam />
    </div>
  );
};

export default About;
