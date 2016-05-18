
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';


export default class Home extends Component {
  
  render() {

    return(
      <div className="home">
        <header>

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
          
        </header>

        <main>
          

        </main>

        <footer>

        </footer>

      </div>
      )
  }
}