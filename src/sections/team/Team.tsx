import React from "react";
import { Home } from "../../components/Home";
import { HomeVariant } from "../../components/HomeVariant";
import { Mail } from "../../components/Mail";
import { Menu } from "../../components/Menu";
import { Phone } from "../../components/Phone";
import { Search } from "../../components/Search";
import "./style.css";

export const Team = (): JSX.Element => {
  return (
    <div className="border">
        <div className="sectionTitles">
                <span style={{color: "#083900f2"}}>Meet </span>
                <span style={{color: "#24ca09"}}>Our Team </span>
        </div>
        <div>
            <div className="rectangles">
                <div className="rectanglesItem">
                  <div className="rectangle-23" />
                  <img className="unsplash" alt="Unsplash" src="/img/unsplash-3jmfencl24m.png" />
                </div>
                <div className="rectanglesItem">
                  <div className="rectangle-24" />
                  <img className="unsplash-zxbdvbny" alt="Unsplash" src="/img/unsplash-0zx1bdv5bny.png" />
                </div>
                <div className="rectanglesItem">
                  <div className="rectangle-25" />
                  <img className="unsplash-k" alt="Unsplash k" src="/img/unsplash-mez3pofgs-k.png" />
                </div>
                
            </div>

        </div>
    <div className="group-35">
      <div className="overlap-8">
        <div className="meet-our-team">
          <span className="text-wrapper-26">Meet </span>
          <span className="text-wrapper-23">Our Team</span>
        </div>
        <div className="overlap-11">
          <div className="text-wrapper-33">Kylan Gentry</div>
          <div className="text-wrapper-34">CEO &amp; Cofounder</div>
        </div>
        <div className="overlap-12">
          <div className="text-wrapper-33">Sarah</div>
          <div className="text-wrapper-34">Cofounder</div>
        </div>
        <div className="overlap-13">
          <div className="text-wrapper-33">Olivia</div>
          <div className="text-wrapper-34">Project Manager</div>
        </div>
        <img className="ep-arrow-left-bold-3" alt="Ep arrow left bold" src="/img/ep-arrow-left-bold.svg" />
      </div>
    </div>
    </div>
    );
};
