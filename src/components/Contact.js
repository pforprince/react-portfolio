import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-info" id="contact">
        <p className="headline">Contact me </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloribus
          dolores dignissimos harum repellendus eum consectetur mollitia ullam
          magni, ex in, omnis veritatis. Debitis voluptates adipisci possimus.
          Consequatur, quod voluptatum?
        </p>
      </div>
      <div className="contact-form">
        <input type="name" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="number" placeholder="Your Contact Number" />
        <textarea type="text" placeholder="Your Message" rows="6" />
        <button className="contact-button">Send</button>
      </div>
    </div>
  );
}

export default Contact;
