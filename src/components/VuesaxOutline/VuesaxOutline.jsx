import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const VuesaxOutline = ({
  style,
  vuesaxOutline = "https://anima-uploads.s3.amazonaws.com/projects/648d4fed4f69b81fce6eb19d/releases/648d5af6b28ec4c8efe5b7e3/img/vuesax-outline-message-12.svg",
}) => {
  return <img className="vuesax-outline" style={style} alt="Vuesax outline" src={vuesaxOutline} />;
};

VuesaxOutline.propTypes = {
  vuesaxOutline: PropTypes.string,
};
