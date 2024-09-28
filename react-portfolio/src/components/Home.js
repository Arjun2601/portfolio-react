/*
filename: Home.js
student name: Arjun Chovatiya
student Id: 301352977
date: 27/09/2024
*/

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>I Love sleeping. 🙂</p>
      <Link to="/about">About Me</Link>
      <p className='light'>This is just a sample portfolio. i am working on my main portfolio website. it was taking too much time so had to make a dummy one 🥸</p>
    </div>
  );
};

export default Home;
