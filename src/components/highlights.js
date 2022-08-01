import React from 'react';
import circle from 'uswds/img/circle-124.png';
import { Link } from 'gatsby';

/*
  Use this section to highlight key elements of your site. Some sites will only have two while others may have six to eight. 
*/

const Highlights = () => (
  <section className="usa-graphic-list usa-section usa-section--dark">
    <div className="grid-container">
    <h1 ><span className="usa-hero__heading--alt">System Level Metrics and Indicators</span></h1>
    <p className='margin-bottom-6'>Each one of these sections summarizes data about different parts of the prosecution process.</p>
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">

          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
             <Link to="/referral" > <a className='usa-link' style={{color:'white'}}> Felony Referrals</a> </Link> 
            </h3>
            <p>
            Presents information on felony cases referred by law enforcement to the District Attorney’s Office for prosecution. 
            </p>
            
          </div>
          
        </div>
        <div className="usa-media-block tablet:grid-col">

          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              <Link to="/filing_charging" > <a className='usa-link' style={{color:'white'}}>Charging and Filing</a> </Link> 
            </h3>
            <p>
            Presents information on all cases for which a law enforcement agency has filed a case (misdemeanors and petty offenses/infractions) or for which the District Attorney’s Office has decided to file the charges (felonies).  
            </p>
          </div>
        </div>
      </div>
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">

          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              <Link to="/case_resolution" > <a className='usa-link' style={{color:'white'}}>Case Resolution</a> </Link> 
            </h3>
            <p>
            Presents information on all cases prosecuted by the District Attorney's Office that have reached a final resolution.
            </p>
          </div>
        </div>
        <div className="usa-media-block tablet:grid-col">
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
            <Link to="/deferral_and_diversion" > <a className='usa-link' style={{color:'white'}}>Diversion and Deferrals</a> </Link> 
            </h3>
            <p>
            Presents information on all cases for which the District Attorney’s Office granted alternatives to traditional prosecution: diversion and deferred judgment. 
            </p>
          </div>
        </div>
      </div>
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">

          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
            <Link to="/sentencing" > <a className='usa-link' style={{color:'white'}}>Sentencing</a> </Link> 
            </h3>
            <p>
            Presents information on all cases prosecuted by the District Attorney’s Office for which a sentence has been imposed following a conviction. 
            </p>
            
          </div>
          
        </div>
        <div className="usa-media-block tablet:grid-col">

          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
            <Link to="/defendant_characteristics" > <a className='usa-link' style={{color:'white'}}>Defendant Characteristics</a> </Link> 
            </h3>
            <p>
            Presents information on defendant characteristics, including race/ethnicity, socioeconomic status, and criminal history for cases prosecuted by the District Attorney’s Office.
            </p>
          </div>
        </div>
      </div>
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">

          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
            <Link to="/serving_victims" > <a className='usa-link' style={{color:'white'}}>Serving Victims</a> </Link> 
            </h3>
            <p>
            Presents information on ways the District Attorney’s Office engages with victims, witnesses, and the general community. 
            </p>
          </div>
        </div>
        <div className="usa-media-block tablet:grid-col">
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
            <Link to="/staffing_caseload" > <a className='usa-link' style={{color:'white'}}>Staffing and Caseload</a> </Link> 
            </h3>
            <p>
            Presents information about the District Attorney’s Office’s staff capacity, caseload distribution, retention, and staff characteristics.
            </p>
          </div>
        </div>
      </div>

    </div>
    
  </section>
);

export default Highlights;
