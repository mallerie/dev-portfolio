import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

export default class Spotlight extends Component {

  render() {

    return(
      <div className="spotlight">
        
        <div className="spotlight-item">
          <h4>Winner - Atlanta's First All-Women Hackathon</h4>
          <img src="./images/women-hackathon.jpg" alt="Team of four women presenting their app."/>
        </div>

        <div className="spotlight-item">
          <h4>Featured - Hypepotamus Tech Blog</h4>
          <a className="linkable" href="http://www.hypepotamus.com/people/mallerie-shirley/" target="_blank">
            <img className="linkable" 
                 src="./images/hypepotamus-feature.png" 
                 alt="Digital article featuring Mallerie with a close up photo."/>
          </a>
        </div>

        <div className="spotlight-item">
          <h4>Speaker - The Iron Yard</h4> 
            <img src="./images/volunteer-iron-yard.jpg" alt="Mallerie presenting a lecture to a group of programming students."/>
        </div>

        

      </div>
      )
  }
}