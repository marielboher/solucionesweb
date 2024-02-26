import React from "react";
import "./about.css";
import candado from "../../assets/lock-outline.svg";
import calendario from "../../assets/calendar-outline.svg";
import heart from "../../assets/heart-outline.svg";
import colorpalette from "../../assets/color-palette-outline.svg";
import meet from "../../assets/meetabout.svg";


const About = () => {
  return (
    <div className="container-about" id="about">
      <div className="text-about">
        <div className="text">
          <div className="text-line">
            <p className="line-about"></p>
            <h1>
              <span>ABOUT</span> US
            </h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quidem a
            quis! Natus eaque eligendi cumque sed perferendis assumenda excepturi
            fuga culpa, eius officiis distinctio praesentium, dolor explicabo
            molestiae deleniti quo modi, dolore maxime ratione quos. Debitis quo
            quae quos nulla ipsam. Cumque perspiciatis, aspernatur, laborum fugiat
            obcaecati placeat delectus laboriosam repellat id laudantium aliquam,
            magni ut? Sequi sapiente corrupti magni debitis rerum reiciendis,
            consequatur aut cupiditate nemo!
          </p>
        </div>
        <img className="img-about" src={meet}></img>
      </div>

      <div className="container-cards">
        <div className="card">
          <img src={candado}></img>
          <h2>Confidentiality</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="card">
          <img src={calendario}></img>
          <h2>Projects on time</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="card">
          <img src={heart}></img>

          <h2>made with love</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="card">
          <img src={colorpalette}></img>
          <h2>Creative desings</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
      </div>
    </div>
  );
};

export default About;
