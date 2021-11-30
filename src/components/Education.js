import React from "react";

const EducationTile = () => {
  return (
    <div className="education-tile">
      <div>
        <h3>Chandigarh Group of Colleges, Landran</h3>
        <p className="degree">B.Tech(Computer Science and & Engineering)</p>
        <p className="percentage">Percentage/CGPA: 76.2</p>
      </div>
      <div>
        <p className="session">2017-2021</p>
      </div>
    </div>
  );
};

function Education() {
  return (
    <div className="education" id="education">
      <p className="headline">Education</p>
      <EducationTile />
      <EducationTile />
      <EducationTile />
    </div>
  );
}

export default Education;
