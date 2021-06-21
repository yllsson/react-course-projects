import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <div>
        <Link to='/portfolio/1'>Item One</Link>
        <Link to='/portfolio/2'>Item Two</Link>
      </div>
    </div>
  );
};

export default Portfolio;
