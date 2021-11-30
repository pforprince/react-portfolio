import React from "react";

const ExperienceTile = () => {
  return (
    <div className="experience-tile">
      <div>
        <p className="organisation">Flying Spark Infotech</p>
        <p className="role">ReactJs Developer</p>
        <p className="duration">2 Months</p>
      </div>
      <div className="experience-type">
        <p>Internship</p>
        <p>January 21 - March 21</p>
      </div>
    </div>
  );
};

function Experience() {
  return (
    <div className="experience" id="experience">
      <p className="headline">Experience</p>
      <ExperienceTile />
      <ExperienceTile />
      <ExperienceTile />
    </div>
  );
}

export default Experience;
