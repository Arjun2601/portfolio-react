/*
filename: Projects.js
student name: Arjun Chovatiya
student Id: 301352977
date: 27/09/2024
*/

import React from 'react';
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const Projects = () => {
  return (
    <div className="projects">
      <div className="project-item">
        <img src={project1} alt="Project 1" />
        <div className="project-description">
          <h3>Calculator using c#</h3>
          <p>i made a calculator using GUI in C# as a bonus project in my programming-2 course during my second semester.</p>
        </div>
      </div>

      <div className="project-item">
        <img src={project2} alt="Project 2" />
        <div className="project-description">
          <h3>Personal Homepage</h3>
          <p>this is the first html and css website that i made in my first semester and i am proud by hosting it </p>
        </div>
      </div>

      <div className="project-item">
        <img src={project3} alt="Project 3" />
        <div className="project-description">
          <h3>Work in progress</h3>
          <p>i am making an attractive portfolio website using js and scss.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
