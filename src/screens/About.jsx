import React from 'react';
import Header from '../components/Header'

function About(props) {
  return (
    <div>
      <Header/>
      <h2 className="page-title">About Me</h2>
      <div classname="about-all">
        <img
          className="my-photo"
          src="https://github.com/suttondemlong/portfolio/blob/main/src/assets/IMG_8767.JPG?raw=true"></img>
        <div className="about-content">
          <p className="about-text">I am a junior developer with a background in fine arts and production based woodworking.
          As a production manager at LANNINGSMITH Studios, I learned how to navigate teams of unique individuals,
          balance client expectations with production realities and problem solve/pivot with a looming deadline.
          Through my art practice, I have developed a thirst for understanding how the infinite iterations of
          people’s perspectives clash, synchronize and ultimately weave together the fabric of our society.
          This passion combined with my love for building fuels my practice as a developer. It is the reason
          why I excel as a team member as well as a project lead and it is what inspires me to use software
          engineering to create a positive impact on the world.</p>
          <a className="link" href="http://sutton-demlong.squarespace.com/">Art Practice</a>
        </div>
      </div>
    </div>
  );
}

export default About;