import React from 'react';

const Project = (props) => {
  console.log(props);
  return (
    <div>
      <h2>One of my Projects!</h2>
      <p>This is a page for item no {props.match.params.id}</p>
    </div>
  );
};

export default Project;
