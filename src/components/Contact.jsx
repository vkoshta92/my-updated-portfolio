// import React from "react";
// import { FaInstagram } from "react-icons/fa";
// import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
// import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          {/* <a href="https://www.instagram.com/vishnu18695/" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a> */}
          {/* <a href="https://www.facebook.com/vkoshta92" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a> */}
          <a href="https://www.linkedin.com/in/vishnu-kant-9697797b/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          {/* <a href="https://www.google.com" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a> */}
          <a href="https://www.github.com" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:vkoshta92@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
