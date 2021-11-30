import React from "react";
import SkillProgress from "./SkillProgress";

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skills-listing">
        <SkillProgress skill="ReactJs" />
        <SkillProgress skill="NodeJs" />
        <SkillProgress skill="ExpressJs" />
        <SkillProgress skill="MongoDB" />
        <SkillProgress skill="Core Java" />
        <SkillProgress skill="Spring Boot" />
        <SkillProgress skill="Github" />
        <SkillProgress skill="MySQL" />
        <SkillProgress skill="NextJs" />
        <SkillProgress skill="Bootstrap" />
      </div>
      <div className="projects-info">
        <p className="headline">Skills I posses</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          nam aliquid? Dignissimos molestiae rerum culpa? Enim labore corporis
          nemo. Laboriosam facilis iusto nihil exercitationem quo possimus,
          molestias aperiam aspernatur explicabo autem, illum veritatis
          obcaecati qui ullam. Facilis unde iusto ut vitae, quasi autem
          cupiditate aspernatur maiores dignissimos, veniam officia quod?
        </p>
      </div>{" "}
    </div>
  );
}

export default Skills;
