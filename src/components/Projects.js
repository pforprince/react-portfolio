import React from "react";
import Tile from "./Tile";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projects-tile">
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </div>
      <div className="projects-info">
        <p className="headline">Projects I've build</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          doloremque quas neque nemo animi cumque veniam mollitia sed illo quod
          quisquam odit, ab pariatur tempora sequi minus dolore error ex? Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Rem, sed!
        </p>
      </div>
    </div>
  );
}

export default Projects;
