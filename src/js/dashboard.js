
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';




export default class Dashboard extends Component {
  
  render() {

    return(
      <div className="dashboard">
        <header> {/* ----------HEADER ----------*/}

          <div id="header-name-wrapper">
            <h1>Mallerie Shirley</h1>
          </div>

          <nav>

            <ul>
              <li><Link to={'/home'}>Home</Link></li>
              <li><Link to={'/resume'}>Resume</Link></li>
              <li><Link to={'/portfolio'}>Portfolio</Link></li>
              <li><Link to={'/interests'}>Interests</Link></li>
            </ul>

          </nav>
          
        </header> {/* ----------HEADER ----------*/}

        <main> {/* ----------MAIN ----------*/}

          {this.props.children}

        </main> {/* ----------MAIN ----------*/}

        <footer> {/* ----------FOOTER ----------*/}

          <div className="contact-info-wrapper">
            <p>Contact</p>
            <p>P - 763.226.5887</p>
            <p>E - mallerie@gmail.com</p>
          </div>

          <div className="social-info-wrapper">
            <a href="https://www.twitter.com/mallerieshirley" target="_blank"><i className="fa fa-twitter-square" aria-hidden="true"/></a>
            <a href="https://www.github.com/mallerie" target="_blank"><i className="fa fa-github-square" aria-hidden="true"/></a>
            <a href="https://www.facebook.com/mallerieshirley" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"/></a>
          </div>

        </footer> {/* ----------FOOTER ----------*/}

      </div>
      )
  }
}