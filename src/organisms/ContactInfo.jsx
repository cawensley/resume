import React from 'react';
import Footer from "./Footer";

const ContactInfo = () => (
    <div className="container">
        <div className="d-none d-md-block o-ContactInfo-topPadding"/>
        <div className="row o-ContactInfo-transparentBackground border border-dark o-ContactInfo-topmargin">
            <div className="col-md-8 text-white text-center">
                <img src={require('../images/blacksmith.png')}
                     alt=""
                     className="my-4 border border-secondary o-ContactInfo-PhotoWidth"/>
                <p>Welcome, I'm Alex Wensley and this is my website!  Here you will find my contact information,
                    a resume which can be downloaded in multiple formats,
                    and links to my most recent website projects.
                </p>
                <ul className="social text-left px-0 mb-4">
                    <li>
                        <i className="o-ContactInfo-iconwidth fas fa-map-marker"></i>
                        &nbsp;City:&nbsp;Longmont, CO
                    </li><br/>
                    <li>
                        <i className="o-ContactInfo-iconwidth fas fa-phone"></i>
                        &nbsp;Phone:&nbsp;(540) 750-1847
                    </li><br/>
                    <li>
                        <i className="o-ContactInfo-iconwidth fas fa-envelope"></i>
                        &nbsp;Email:&nbsp;alex@wensley.dev
                    </li><br/>
                </ul>
                <button className="button btn-secondary mb-4">Download Resume from Google Drive</button>
                <ul className="social border border-secondary row px-0 py-2 mx-1">
                    <li className="col-lg-6">
                        <a href="https://github.com/cawensley" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-github mr-2"></i>
                            Github Repo
                        </a>
                    </li>
                    <li className="col-lg-6">
                        <a href="https://www.linkedin.com/in/alex-wensley" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-linkedin mr-2"></i>
                            LinkedIn
                        </a>
                    </li>
                </ul>
                <ul className="text-left pt-1">
                    <li>
                        <a href="https://cawensley.github.io/clean-energy/#/" rel="noopener noreferrer" target="_blank">
                            Clean Energy Website
                        </a>
                    </li>
                    <li>
                        <a href="https://cawensley.github.io/moviegallery/#/" rel="noopener noreferrer" target="_blank">
                            Movie Gallery Website
                        </a>
                    </li>
                    <li>
                        <a href="https://www.warhammer40kbuilder.info/#/" rel="noopener noreferrer" target="_blank">
                            Warhammer Website
                        </a>
                    </li>
                </ul>
                <Footer/>
            </div>
            <div className="col-md-4"/>
        </div>
    </div>
);

export default ContactInfo;