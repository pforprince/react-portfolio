import React from "react";

function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="intro-name">
        <h2 style={{ fontSize: "32px" }}>Hello</h2>
        <h1 style={{ fontSize: "44px", marginTop: "0.4rem" }}>
          I'm Prince Bansal
        </h1>
        <p style={{ fontSize: "14px", marginTop: "0.8rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          ipsum. Soluta cum optio tempora nostrum, voluptatem accusamus, enim
          possimus quasi debitis animi deleniti eius reiciendis.
        </p>
      </div>
      <div className="intro-img">
        <img
          src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=501&q=80"
          alt=""
        />
      </div>
    </div>
  );
}

export default Intro;
