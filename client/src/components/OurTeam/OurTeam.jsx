import TeamMember from "../TeamMember/TeamMember";
import lilyImage from "../../assets/lily-le.png";
import kristinaImage from "../../assets/kristina-tripak.png";

import "./OurTeam.scss";

const OurTeam = () => {
  return (
    <div className="our-team">
      <TeamMember
        photo={kristinaImage}
        name="Kristina Tripak"
        role="Front-End Developer/Designer"
      />
      <TeamMember
        photo={lilyImage}
        name="Lily Le"
        role="FullStack Developer/QA tester"
      />
    </div>
  );
};

export default OurTeam;
