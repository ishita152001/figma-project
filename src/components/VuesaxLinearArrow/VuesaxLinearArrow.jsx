import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const VuesaxLinearArrow = ({
  vuesaxLinearArrow = "https://anima-uploads.s3.amazonaws.com/projects/648d4fed4f69b81fce6eb19d/releases/648d5af6b28ec4c8efe5b7e3/img/vuesax-linear-arrow-square-up-4.svg",
}) => {
  return <img className="vuesax-linear-arrow" alt="Vuesax linear arrow" src={vuesaxLinearArrow} />;
};

VuesaxLinearArrow.propTypes = {
  vuesaxLinearArrow: PropTypes.string,
};
