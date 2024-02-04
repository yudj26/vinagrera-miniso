import React from "react";
import "./Footer.css"; // Make sure to create a corresponding CSS file for styling

const Footer = () => {
  return (
    <div className="footer clearfix">
      <div className="footerright clearfix">
        {/* Add additional content here if needed */}
      </div>
      <div>
        <div
          className="copyRight"
          style={{ margin: "0 auto", textAlign: "center" }}
        >
          © Copyright PT. Miniso International Company
          <br /> © COPYRIGHT 2023 MINISO CO.LTD ALL RIGHT RESERVED
          <br /> © Copyright Miniso.com
          <br />{" "}
          <a
            href="https://beian.miit.gov.cn"
            target="_blank"
            rel="noopener noreferrer"
          >
            粤ICP备2021004007号-1
          </a>
        </div>
      </div>
      <div className="topwrap">
        <img src="images/top.png" alt="Go to top" />
      </div>
    </div>
  );
};

export default Footer;
