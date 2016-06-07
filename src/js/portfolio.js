import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

export default class Portfolio extends Component {

  render() {

    return(
      <div className="portfolio">

        <div className="portfolio-item">
          
          <div className="portfolio-img-wrapper">
            <img src="./images/skinny-ties.png" 
                 alt="A recreation of the Skinny Ties 
                      website created to pixel perfection."/>
          </div>

          <div className="portfolio-content-wrapper">

            <div className="title-wrapper">
              <h3>Skinny Ties Website</h3>
            </div>

            <div className="project-description-wrapper">
              <div className="project-description">
                <p className="description-paragraph">Skinny Ties website re-created as a static page to pixel perfection 
                  using SASS and implementing new CSS features. See the 
                  actual site <a className="here-link" href="http://www.skinnyties.com" target="_blank">here</a>.</p>
              </div>

              <div className="project-links">
                <div className="link-wrappers"><a href="https://github.com/mallerie/skinny-ties" target="_blank">See My Code</a></div> 
                <div className="link-wrappers"><a href="http://scarce-show.surge.sh/" target="_blank">See It Live</a></div> 
              </div>
            </div>

          </div>
        </div>


        <div className="portfolio-item">

          <div className="portfolio-content-wrapper">

            <div className="project-description-wrapper">
              <div className="project-description">
                <p className="description-paragraph">
                  An app for moms to find places where they can 
                  comfortably breastfeed their babies in public. 
                  Built using the React framework. Used AJAX to pull
                  data from the database, SASS for styling and Git for 
                  version control. 
                </p>
              </div>

              <div className="project-links">
                <div className="link-wrappers"><a href="https://github.com/nursing-station/milk-ninja-js" target="_blank">See The Code</a></div> 
                <div className="link-wrappers"><a href="https://www.milkninja.com" target="_blank">MilkNinja.com</a></div> 
              </div>
            </div>

            <div className="title-wrapper">
              <h3>Milk Ninja</h3>
            </div>

          </div>

          

          <div className="portfolio-img-wrapper">
            <img src="./images/milk-ninja.png" 
                 alt="A recreation of the Skinny Ties 
                      website created to pixel perfection."/>
          </div>
        </div>

        <div className="portfolio-item">
          
          <div className="portfolio-img-wrapper">
            <img src="./images/a-helping-hand.png" 
                 alt=""/>
          </div>

          <div className="portfolio-content-wrapper">

            <div className="title-wrapper">
              <h3>A Helping Hand</h3>
            </div>

            <div className="project-description-wrapper">
              <div className="project-description">
                <p className="description-paragraph">Helping end child sexual exploitation one teacher at a time.
                      allows teachers and other school staff to quickly and anonymously
                      report that they suspect their students may be being exploited. Built
                      using HTML, CSS, Ruby on Rails on the back-end and Javascript on the
                      front-end.</p>
              </div>

              <div className="project-links">
                <div className="link-wrappers"><a href="https://github.com/Teachers-Care/Teachers-Care" target="_blank">See My Code</a></div> 
                <div className="link-wrappers"><a href="http://teachers-care.surge.sh/" target="_blank">See It Live</a></div> 
              </div>
            </div>

          </div>
        </div>

        

      </div>
      )
  }
}