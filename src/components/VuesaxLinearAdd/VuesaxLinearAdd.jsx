import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const VuesaxLinearAdd = ({
  style,
  vuesaxLinearAdd = "https://anima-uploads.s3.amazonaws.com/projects/648d4fed4f69b81fce6eb19d/releases/648d5af6b28ec4c8efe5b7e3/img/vuesax-linear-add-square-4.svg",
}) => {
  return <img className="vuesax-linear-add" style={style} alt="Vuesax linear add" src={vuesaxLinearAdd} />;
};

VuesaxLinearAdd.propTypes = {
  vuesaxLinearAdd: PropTypes.string,
};
