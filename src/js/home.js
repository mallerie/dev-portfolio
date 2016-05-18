
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

          <div className="home-content">

          </div>

        </main> {/* ----------MAIN ----------*/}

        <footer> {/* ----------FOOTER ----------*/}

        </footer> {/* ----------FOOTER ----------*/}

      </div>
      )
  }
}