import React from "react";
import "./Module.css"; // Make sure to define your styles in Module.css

const Module = ({
  leftLink,
  leftImgSrc,
  leftTitle,
  leftSubTitle,
  centerText,
  centerSubText,
  centerMoreLink,
  rightLink,
  rightImgSrc,
  rightTitle,
}) => {
  return (
    <div className="module clearfix">
      <a href={leftLink} className="moduleleft">
        <img src={leftImgSrc} alt={leftTitle} />
        <p className="index_brand">{leftTitle}</p>
        <p className="index_brandtitle">{leftSubTitle}</p>
        <img src="images/grayarrow.png" alt="" className="index_brandarrow" />
      </a>
      <div className="modulecon">
        <p className="titleText">{centerText}</p>
        <div className="investor">{centerSubText}</div>
        <a href={centerMoreLink} className="morebase">
          <img src="images/whitearrow.png" alt="" className="hideimg" />
          <img src="images/graylink.png" alt="" className="showimg" />
        </a>
      </div>
      <a href={rightLink} className="modulecons">
        <img src={rightImgSrc} alt="" />
        <div className="distributor">{rightTitle}</div>
      </a>
    </div>
  );
};

export default Module;
