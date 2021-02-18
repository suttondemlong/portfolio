import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './About.css'

function About(props) {
  return (
    <div className="about-page">
      <Header/>
      <h2 className="page-title">About Me</h2>
      <div className="about-all">
        <img
          className="my-photo"
          src="https://github.com/suttondemlong/portfolio/blob/main/src/assets/IMG_8767.JPG?raw=true" alt="it-me"></img>
          <p className="about-text">I am a junior developer specializing in Ruby on Rails and React. 
          In a previous life, I studied fine arts and managed a woodworking/sculpor-for-hire studio.
          I gained experience writing code while working with the Arduino IDE to create interactive sculptures. 
          Working with Arduinos and being a part of that open source community sparked my passion 
          for learning programming languages and the open source ideology. 
          <br />
          <br />
          As an artist, I developed a thirst for understanding how the infinite iterations of
          people’s perspectives clash, synchronize and ultimately weave together the fabric of our society.
          This love of community combined with my passion for building fuels my practice as a developer. 
          It is the reason why I am an excellent team member and it is what inspires me to use software 
          engineering to create a positive impact on the world.
          <br />
          <br />
          <strong>Languages and Frameworks</strong>
          <br/>
          {"HTML, CSS, JavaScript, React, Node.js, Ruby, Ruby on Rails, Postgresql, Express, MongoDB, & Mongoose."}
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default About;