import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const VuesaxOutlineWrapper = ({
  vuesaxOutline = "https://anima-uploads.s3.amazonaws.com/projects/648d4fed4f69b81fce6eb19d/releases/648d5af6b28ec4c8efe5b7e3/img/vuesax-outline-category-2.svg",
}) => {
  return <img className="vuesax-outline-wrapper" alt="Vuesax outline" src={vuesaxOutline} />;
};

VuesaxOutlineWrapper.propTypes = {
  vuesaxOutline: PropTypes.string,
};
