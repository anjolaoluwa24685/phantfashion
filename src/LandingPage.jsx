import React, { Component } from 'react';


class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page">
                <div className="middle-text"> <h5>Get Hired by Customers for any job, any time.</h5>
                    <p>Huge community of customers looking to hire designers for<br className="d-none d-sm-block" />
                        their next attire. </p>
                </div>
                <div>
                    <div className="row-wrapper">
                        <div className="custom-row">
                            <div className="cus-col"><small className="inner-div">Where?</small></div>
                            <div className="cus-col"><small className="inner-div">What you need done?</small></div>
                        </div>
                    </div>


                    <div className="custom-input-wrapper">
                        <div className="cus-col-large">
                            <input className="custom-input" placeholder="Location" />
                        </div>
                        <div className="grey-line">&nbsp;</div>
                        <div className="cus-col-large">
                            <input className="custom-input" placeholder="e.g Agbada" />
                        </div>
                        <div className="grey-line">&nbsp;</div>
                        <div className="cus-col-large">
                            <div className="dropdown">
                                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    All Categories
  </a>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        <div className="cus-col-small button-wrapper">
                            <button className="custom-button">Search</button>
                        </div>
                    </div>
                </div>
                <div className="numbers">
                    <div className="first-number">
                        <h4>1,250</h4><small className="designs">Designs Posted</small>
                    </div>
                    <div className="line">&nbsp;</div>
                    <div className="second-number">
                        <h4>598</h4><small className="designs">Designs Completed</small>
                    </div>
                    <div className="line">&nbsp;</div>
                    <div className="number">
                        <h4>65</h4><small className="designs">Designers</small>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;