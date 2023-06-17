import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const VuesaxTwotone = ({
  vuesaxTwotone = "https://anima-uploads.s3.amazonaws.com/projects/648d4fed4f69b81fce6eb19d/releases/648d5af6b28ec4c8efe5b7e3/img/vuesax-twotone-search-normal-2.svg",
}) => {
  return <img className="vuesax-twotone" alt="Vuesax twotone" src={vuesaxTwotone} />;
};

VuesaxTwotone.propTypes = {
  vuesaxTwotone: PropTypes.string,
};
