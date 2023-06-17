import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const VuesaxLinearTask = ({
  vuesaxLinearTask = "https://anima-uploads.s3.amazonaws.com/projects/648d4fed4f69b81fce6eb19d/releases/648d5af6b28ec4c8efe5b7e3/img/vuesax-linear-task-square-2.svg",
}) => {
  return <img className="vuesax-linear-task" alt="Vuesax linear task" src={vuesaxLinearTask} />;
};

VuesaxLinearTask.propTypes = {
  vuesaxLinearTask: PropTypes.string,
};
