import React from 'react';

const Nav = () => (
    <nav className="navbar custom-navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
            <svg className="web-logo" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="180" height="27" viewBox="0 0 180 27">
                <image id="logo" width="180" height="27" xlinkHref="data:image/png;base64,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" />
            </svg>
        </a>
        <div className="grey-line">&nbsp;</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Senator <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Agbada</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Kaftan</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Casual</a>
                </li>
            </ul>
            <div className=" ml-auto">
                <div className="row">
                    <div className="col-sm-8 icons">
                        <div>
                            <i className="fa fa-plus-square-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fa fa-bell-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fa fa-envelope-o" aria-hidden="true"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div className="message-wrapper">
                                    <p>Messages</p>
                                    <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label className="form-check-label" htmlFor="inlineCheckbox1"></label>
</div>
                                </div>
                                <hr/>
                                <div className="no-message">You have no new message.</div>
                                <div className="all-messages">View All Messages</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 d-none d-sm-block d-md-none d-lg-block">

                        <div className="image-cropper">
                            <img src="/assets/category-1.jpg" alt="profile-pic" className="profile-pic" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
)


export default Nav;