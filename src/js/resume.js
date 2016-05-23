
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';




export default class Resume extends Component {
  
  render() {

    return(
      <div className="resume">

        <div className="objective">
          <h3>Objective</h3>
          <p>To utilize my knowledge and experience in psychology 
          and web development to build beautiful, functional websites
          for users. My goal is to exceed expectations and deliver a
          "wow" factor to users.</p>
        </div>

        <div className="technical-skills">
          <h3>Technical Skills</h3>
          <p>HTML, CSS & JavaScript, React.js, SASS, AJAX, Git,
          Github, jQuery, and JSON</p>
        </div> 

        <div className="projects">
          <h3>Projects</h3>
          <p>Click here to see my projects.</p>
        </div>

        <div className="education">
          <h3>Education</h3>

          <div className="education-item">
            <h4>The Iron Yard, Front End Engineering, Atlanta, GA - 
            February to May 2016</h4>
            <p>Completed rigorous 12-Week full-time immersive course 
            in front-end web development, learned how to build web 
            applications from scratch using cutting edge tools and 
            industry-standard processes.</p> 
          </div>

          <div className="education-item">
            <h4>University of Minnesota, Master of Social Work, 
            Minneapolis, MN - May 2013</h4>
            <p>Specialty and License in Clinical and Mental Health.</p> 
          </div>

          <div className="education-item">
            <h4>Metropolitan State University, Bachelor of Psychology, 
            Minneapolis, MN - August 2010</h4>
            <p>Focus on Research and Abnormal Psychology</p> 
          </div>

          <div className="education-item">
            <h4>Saint Paul College, Associate of Interpreting, 
            Minneapolis, MN - May 2010</h4>
            <p>Focus in American Sign Language Linguistics</p> 
          </div>

        </div>

        <div className="work">

          <h3>Work</h3>

          <div className="work-item">
            <h4>Freelance Certified Sign Language Interpreter - 2008 - 2016</h4>
            <p>My work centered on medical and mental health interpreting.</p> 
          </div>

          <div className="work-item">
            <h4>Social Worker/Therapist - 2013 - 2015</h4>
            <p>Trauma focused work with youth and adults who suffered mental illness.</p> 
          </div>

        </div>

      </div>
      )
  }
}