import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const VuesaxLinearWrapper = ({
  style,
  vuesaxLinear = "https://anima-uploads.s3.amazonaws.com/projects/648d4fed4f69b81fce6eb19d/releases/648d5af6b28ec4c8efe5b7e3/img/vuesax-linear-message-question-2.svg",
}) => {
  return <img className="vuesax-linear-wrapper" style={style} alt="Vuesax linear" src={vuesaxLinear} />;
};

VuesaxLinearWrapper.propTypes = {
  vuesaxLinear: PropTypes.string,
};
