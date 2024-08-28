import "./TeamMember.scss";

const TeamMember = ({ photo, name, role }) => {
  return (
    <div className="team-member">
      <img className="team-member__photo" src={photo} alt={name} />
      <div className="team-member__content">
        <h3 className="team-member__name">{name}</h3>
        <p className="team-member__role">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;
