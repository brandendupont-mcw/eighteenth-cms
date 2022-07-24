import React from 'react';
import logo from 'uswds/img/logo-img.png';

const Footer = () => (
  <footer className="usa-footer site-footer" role="contentinfo">
    <div className="footer-section-bottom bg-base-lighter">
      <div className="grid-container">
        <div className="grid-row padding-3">
          <div className="tablet:grid-col">
            <div className="logo-links">
              <a className="footer-logo media_link" href="https://www.da18.org/">
                <img src={'https://www.da18.org/wp-content/uploads/DA-Color-Seal_120px.png'} width="100" alt="Agency logo" />
              </a>
            </div>
          </div>
          <div className="tablet:grid-col"></div>
          <div className="tablet:grid-col">
            <ul className="add-list-reset">
              <li> <a href='https://www.da18.org/'>Homepage</a></li>
            </ul>
          </div>
          <div className="tablet:grid-col">
            <ul className="add-list-reset">
         
              <li> <a href='https://www.da18.org/about/contact/'>Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
