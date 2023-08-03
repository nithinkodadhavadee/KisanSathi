/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const Menu = ({ className }: Props): JSX.Element => {
  return <img className={`menu ${className}`} alt="Menu" src="/img/menu-03.svg" />;
};
