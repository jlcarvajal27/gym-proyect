import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import rightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span> Programs</span>
        <span className="stroke-text">To shape you</span>
      </div>

      <div className="programs-categories">
        {programsData.map((program, index) => (
          <div className="category" key={index}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <span>
                <img src={rightArrow} alt="" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
