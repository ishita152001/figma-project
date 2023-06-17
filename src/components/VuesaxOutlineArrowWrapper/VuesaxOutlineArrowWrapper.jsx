import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const VuesaxOutlineArrowWrapper = ({
  style,
  vuesaxOutlineArrow = "https://anima-uploads.s3.amazonaws.com/projects/648d4fed4f69b81fce6eb19d/releases/648d5af6b28ec4c8efe5b7e3/img/vuesax-outline-arrow-down-6.svg",
}) => {
  return (
    <img className="vuesax-outline-arrow-wrapper" style={style} alt="Vuesax outline arrow" src={vuesaxOutlineArrow} />
  );
};

VuesaxOutlineArrowWrapper.propTypes = {
  vuesaxOutlineArrow: PropTypes.string,
};
