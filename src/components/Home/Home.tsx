/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  property1: "default";
  className: any;
  text: string;
}

export const Home = ({ property1, className, text = "Home" }: Props): JSX.Element => {
  return (
    <div className={`home ${className}`}>
      <div className="text-wrapper">{text}</div>
    </div>
  );
};

Home.propTypes = {
  property1: PropTypes.oneOf(["default"]),
  text: PropTypes.string,
};
