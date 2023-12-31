/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const Search = ({ className }: Props): JSX.Element => {
  return <img className={`search ${className}`} alt="Search" src="/img/search-01.svg" />;
};
