import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const VuesaxBulkLampOn = ({
  style,
  vuesaxBulkLampOn = "https://anima-uploads.s3.amazonaws.com/projects/648d4fed4f69b81fce6eb19d/releases/648d5af6b28ec4c8efe5b7e3/img/vuesax-bulk-lamp-on-2.svg",
}) => {
  return <img className="vuesax-bulk-lamp-on" style={style} alt="Vuesax bulk lamp on" src={vuesaxBulkLampOn} />;
};

VuesaxBulkLampOn.propTypes = {
  vuesaxBulkLampOn: PropTypes.string,
};
