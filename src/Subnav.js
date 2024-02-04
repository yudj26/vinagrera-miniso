import React, { useState } from "react";
import "./Subnav.css";

const NavItem = ({ imageSrc, imageHoverSrc, caption, link, onMouseEnter }) => {
  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
    if (onMouseEnter) onMouseEnter(); // Call the prop function if it exists
  };

  return (
    <a
      href={link}
      className="navlis"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovering(false)}
    >
      <img
        src={hovering ? imageHoverSrc : imageSrc}
        alt={caption}
        className="nav-image"
      />
      <div className="navcaption">{caption}</div>
    </a>
  );
};

const ProductItem = ({ link, imageSrc, title, description, altText }) => (
  <a href={link} className="productswrap">
    <div className="subproductsimg">
      <img src={imageSrc} alt={altText} />
    </div>
    <h3 className="productstitle">{title}</h3>
    <div className="productexplain">{description}</div>
    <img src="/images/grayarrow.png" alt={altText} className="promore" />
  </a>
);

const Subnav = ({ navItems, productItems }) => {
  const [activeGroup, setActiveGroup] = useState(0);

  const handleMouseEnter = (index) => {
    setActiveGroup(index);
  };

  return (
    <div className="subnav">
      <div className="basetitle">Best Choice</div>
      <div className="navlistwrap">
        <div className="navlist clearfix">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              {...item}
              onMouseEnter={() => handleMouseEnter(index)}
            />
          ))}
        </div>
      </div>
      <div className="subnavproducts">
        {productItems.map((group, index) => (
          <div
            key={index}
            className={`subproducts ${
              index === activeGroup ? "show" : ""
            } clearfix`}
          >
            {group.map((product, productIndex) => (
              <ProductItem key={productIndex} {...product} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subnav;
