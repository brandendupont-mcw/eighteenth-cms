import React from 'react';
import flag from 'uswds/img/us_flag_small.png';
import dotGov from 'uswds/img/icon-dot-gov.svg';
import https from 'uswds/img/icon-https.svg';

const Banner = () => (
  <div className="usa-banner">
    <div className="usa-accordion">
      <header className="usa-banner__header">
        <div className="usa-banner__inner">
          <div className="grid-col-auto">
            <img
              className="usa-banner__header-flag"
              src={flag}
              alt="U.S. flag"
            />
          </div>
          <div className="grid-col-fill tablet:grid-col-auto">
            <p className="usa-banner__header-text">
            We're working to improve and add to this site.
            </p>
            <p className="usa-banner__header-action" aria-hidden="true">
              Here’s how you know
            </p>
          </div>
          <button
            aria-controls="gov-banner"
            aria-expanded={false}
            className="usa-accordion__button usa-banner__button"
          >
            <span className="usa-banner__button-text">Feedback, questions, or request data?</span>
          </button>
        </div>
      </header>
      <div
        id="gov-banner"
        className="usa-accordion__content usa-banner__content"
        hidden
      >
        <div className="grid-row grid-gap-lg">
          <div className="usa-banner__guidance-gov tablet:grid-col-6">
            <img
              className="usa-banner__icon usa-media-block__img"
              src={dotGov}
              alt="Dot gov"
            />
            <div className="usa-media-block__body">
              <p>
                <strong>Let us know.</strong>
                <br />
                To provide feedback, request additional data or analysis, or ask questions about the site, contact us <a href='https://www.da18.org/about/contact/'>here</a>.
              </p>
            </div>
          </div>
          <div className="usa-banner__guidance-ssl tablet:grid-col-6">
            <img
              className="usa-banner__icon usa-media-block__img"
              src={https}
              alt="Https"
            />
            <div className="usa-media-block__body">
              <p>
                <strong>The site is secure.</strong>
                <br />
                The <strong>https://</strong> ensures that you are connecting to
                the official website and that any information you provide is
                encrypted and transmitted securely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
