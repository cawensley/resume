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
                <a  href="https://drive.google.com/uc?export=download&id=1lglRstTxyR3cgPvq90RcZuVOHOiial1D"
                    className="btn btn-secondary p-1 w-75">
                    <i className="fas mr-2 fa-file-pdf"></i>
                    Download Resume
                </a>
                <br/>
                <a  href="https://docs.google.com/document/d/1jRLh4DvLypQah-dIpQKaFFLboLc_7N6IPy5vSf0Akxs/edit?usp=sharing"
                    className="o-ContactInfo-smallFontsize"
                    rel="noopener noreferrer"
                    target="_blank">
                    Resume available in other formats via Google Drive
                    <i className="fab ml-1 fa-google-drive"></i>
                </a>
                <ul className="social border border-secondary row px-0 py-2 mx-1 mt-4">
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
                <ul className="social text-center pt-2 row">
                    <li className="col-md-4">
                        <a href="https://cawensley.github.io/clean-energy/#/" rel="noopener noreferrer" target="_blank">
                            <i className="fas fa-bolt mr-2 o-ContactInfo-iconwidth"></i>
                            Clean Energy
                            <br/>
                            <img src={require('../images/CleanEnergyWebsite.png')}
                                 alt=""
                                 className="mt-2 mb-4 mb-md-0 border border-primary o-ContactInfo-PhotoWidth"/>
                        </a>
                    </li>
                    <li className="col-md-4">
                        <a href="https://cawensley.github.io/moviegallery/#/" rel="noopener noreferrer" target="_blank">
                            <i className="fas fa-film mr-2 o-ContactInfo-iconwidth"></i>
                            Movie Gallery
                            <br/>
                            <img src={require('../images/MovieWebsite.png')}
                                 alt=""
                                 className="mt-2 mb-4 mb-md-0 border border-primary o-ContactInfo-PhotoWidth"/>
                        </a>
                    </li>
                    <li className="col-md-4">
                        <a href="https://www.warhammer40kbuilder.info/#/" rel="noopener noreferrer" target="_blank">
                            <i className="fas fa-dice-six mr-2 o-ContactInfo-iconwidth"></i>
                            Warhammer 40k
                            <br/>
                            <img src={require('../images/WarhammerWebsite.png')}
                                 alt=""
                                 className="mt-2 mb-4 mb-md-0 border border-primary o-ContactInfo-PhotoWidth"/>
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