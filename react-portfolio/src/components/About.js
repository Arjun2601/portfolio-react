/*
filename: About.js
student name: Arjun Chovatiya
student Id: 301352977
date: 27/09/2024
*/


import React from 'react';
import profileImage from '../assets/profile.jpg';
import resume from './resume.pdf'

const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <img src={profileImage} alt="Arjun" className='MyImg'/>
      <p>Hello, I'm Arjun Chovatiya,</p>
      <p>I am a passionate software developer, with knowledge in c#, python , HTML/CSS, JavaScript, Java, DBMS, and SQL.</p>
      <a href={resume} download>Download My Resume</a>
    </div>
  );
};

export default About;
