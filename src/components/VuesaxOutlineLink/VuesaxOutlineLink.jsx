import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const VuesaxOutlineLink = ({
  style,
  vuesaxOutlineLink = "https://anima-uploads.s3.amazonaws.com/projects/648d4fed4f69b81fce6eb19d/releases/648d5af6b28ec4c8efe5b7e3/img/vuesax-outline-link-2.svg",
}) => {
  return <img className="vuesax-outline-link" style={style} alt="Vuesax outline link" src={vuesaxOutlineLink} />;
};

VuesaxOutlineLink.propTypes = {
  vuesaxOutlineLink: PropTypes.string,
};
