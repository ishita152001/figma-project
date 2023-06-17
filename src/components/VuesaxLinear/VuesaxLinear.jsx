import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const VuesaxLinear = ({
  style,
  vuesaxLinear = "https://anima-uploads.s3.amazonaws.com/projects/648d4fed4f69b81fce6eb19d/releases/648d5af6b28ec4c8efe5b7e3/img/vuesax-linear-notification-2.svg",
}) => {
  return <img className="vuesax-linear" style={style} alt="Vuesax linear" src={vuesaxLinear} />;
};

VuesaxLinear.propTypes = {
  vuesaxLinear: PropTypes.string,
};
