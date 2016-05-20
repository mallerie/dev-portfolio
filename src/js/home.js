
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';


export default class Home extends Component {
  
  render() {

    return(
      <div className="home">
        <header> {/* ----------HEADER ----------*/}

          <div id="header-name-wrapper">
            <h1>Mallerie Shirley</h1>
          </div>

          <nav>

            <ul>
              <li>Home</li>
              <li>Resume</li>
              <li>Portfolio</li>
              <li>Interests</li>
            </ul>

          </nav>
          
        </header> {/* ----------HEADER ----------*/}

        <main> {/* ----------MAIN ----------*/}

          <div className="main-image-wrapper">
            <img src="./images/mallerie-shirley.jpg" alt="Mallerie standing in front of a tree."/>
          </div>

          <div className="content">

            <div className="about-me-wrapper">
              <p>
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui 
                blanditiis praesentium voluptatum deleniti atque corrupti quos 
                dolores et quas molestias excepturi sint occaecati cupiditate 
                non provident, similique sunt in culpa qui officia deserunt mollitia 
                animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis 
                est et expedita distinctio. Nam libero tempore, cum soluta nobis est 
                eligendi optio cumque nihil impedit quo minus id quod maxime placeat 
                facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
              </p>
            </div>

            <div className="preview-wrapper">
              <img src="./images/resume-preview.png" alt="Image of a resume"/>
              <img src="./images/project-preview.png" alt="Image of the skinny ties website"/>
              <img src="./images/mal-working-on-computer.jpg" alt="Mallerie working on a computer"/>
            </div>

          </div>

        </main> {/* ----------MAIN ----------*/}

        <footer> {/* ----------FOOTER ----------*/}

        </footer> {/* ----------FOOTER ----------*/}

      </div>
      )
  }
}