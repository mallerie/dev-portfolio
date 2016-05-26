import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

export default class Home extends Component {

  render() {

    return(
      <div className="home">

          <div className="main-image-wrapper">
            <img src="./images/mallerie-shirley.jpg" alt="Mallerie standing in front of a tree."/>
          </div>

        
          <div className="content">

            <div className="about-me-wrapper">
              <p>
                Thank you for checking out my work. 
                As a visual person and critical thinker, 
                I find great pleasure in solving problems.
                One of my favorite role models, Captain 
                Jean Luc Picard said, "There is a way out 
                of every box, a solution to every puzzle; 
                it's just a matter of finding it." He also
                said, "Things are only impossible until 
                they're not!" This is how I approach programming.
                Complex problems excite me, because I know there
                usually a solution close by, and its
                up to me to just find it.
              </p>
            </div>

            <div className="preview-wrapper">

              <div className="image-wrapper">
                <Link to={'/resume'}>
                  <img src="./images/resume-preview.png" alt="Image of a resume"/>
                </Link>
                <p className="hover-title">See My Resume</p>
              </div>  

              <div className="image-wrapper">  
                <Link to={'/portfolio'}>
                  <img src="./images/project-preview.png" alt="Image of the skinny ties website"/>
                </Link>  
                <p className="hover-title">See My Projects</p>
              </div>

              <div className="image-wrapper">  
                <Link to={'/interests'}>
                  <img src="./images/mal-working-on-computer.jpg" alt="Mallerie working on a computer"/>
                </Link> 
                <p className="hover-title">About Me</p>
              </div>

            </div>

          </div>

      </div>
      )
  }
}