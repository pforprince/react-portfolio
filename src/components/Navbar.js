import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { ImMenu } from "react-icons/im";
import { IoCloseSharp } from "react-icons/io5";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    window.innerWidth > 1300 ? setIsSmall(false) : setIsSmall(true);

    window.addEventListener("resize", () => {
      console.log(window.innerWidth, isSmall);
      window.innerWidth > 1300 ? setIsSmall(false) : setIsSmall(true);
    });
  });

  return (
    <div className="sticky-navbar">
      <div className="nav">
        <h2>Prince Bansal</h2>
        <ul style={isSmall && showMenu ? { left: "0px" } : { left: "-2000px" }}>
          <li>
            <Link duration={500} smooth to="intro">
              About
            </Link>
          </li>
          <li>
            <Link duration={500} smooth to="education">
              Education
            </Link>
          </li>
          <li>
            <Link duration={500} smooth to="projects">
              Projects
            </Link>
          </li>
          <li>
            <Link duration={500} smooth to="experience">
              Experience
            </Link>
          </li>
          <li>
            <Link duration={500} smooth to="skills">
              Skills
            </Link>
          </li>
          <li>
            <Link duration={500} smooth to="contact">
              Contact
            </Link>
          </li>
        </ul>
        {isSmall && !showMenu && (
          <p onClick={() => setShowMenu(true)}>
            <ImMenu style={{ color: "white", fontSize: "24px" }} />
          </p>
        )}
        {showMenu && isSmall && (
          <p onClick={() => setShowMenu(false)}>
            <IoCloseSharp style={{ color: "white", fontSize: "24px" }} />
          </p>
        )}
      </div>
    </div>
  );
}

export default Navbar;
