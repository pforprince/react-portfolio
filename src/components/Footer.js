import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <FaLinkedin style={{ margin: "0.4rem", fontSize: "24px" }} />
      <FaGithub style={{ margin: "0.4rem", fontSize: "24px" }} />
    </div>
  );
}

export default Footer;
