import React from "react";
import {Link} from "react-router-dom";
import FooterServiceNav from "./FooterServiceNav";
import serviceData from "../../components/services/services-one/ServicesOneData.json";

const Footer = () => {
    return (
      <>
        {/* footer Section Start */}
        <footer>
          {/* footer Top Section Start */}
          <div className="footer-sec">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="footer-wedget-one">
                    <Link to="/">
                      <img src={`/images/logo2-unedited.png`} alt="Logo" />
                    </Link>
                    <p></p>
                    <div className="footer-social-profile">
                      <ul>
                        {/* <li>
                                                <a href="">
                                                    <i className="fa fa-facebook" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                            </li> */}
                        <li>
                          <a href="">
                            <i className="fa fa-yelp" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="tel:805-814-2049">
                            <i className="fa fa-phone" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="footer-widget-menu">
                    <h2>Security Services</h2>
                    <ul>
                      {serviceData.map((item) => (
                        <FooterServiceNav key={item.id} data={item} />
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="footer-widget-menu">
                    <h2>Support links</h2>
                    <ul>
                      {/* <li>
                                            <a href="#">support link</a>
                                        </li>
                                        <li>
                                            <a href="#">faq &amp; help center</a>
                                        </li> */}
                      <li>
                        <a href="/about">about us</a>
                      </li>
                      <li>
                        <a href="/our-services">Our Services</a>
                      </li>
                      <li>
                        <a href="/contact-us">Contact Us</a>
                      </li>
                      <li>
                        <a href="/request-a-quote">Request a Quote</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="footer-wedget-four">
                    <h2>contact us </h2>
                    <div className="inner-box">
                      <div className="inner-item">
                        <div className="media">
                          <div className="media-left">
                            <span className="icon">
                              <i className="fa fa-map-marker" />
                            </span>
                          </div>
                          <div className="media-body">
                            <span className="inner-text">
                              1262 Evergreen Ln
                              <br></br>Los Angeles, CA 90017
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="inner-item">
                        <div className="media">
                          <div className="media-left">
                            <span className="icon">
                              <i className="fa fa-envelope-o" />
                            </span>
                          </div>
                          <div className="media-body">
                            <span className="inner-text">
                              info@regencysecuritygroup.com
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="inner-item">
                        <div className="media">
                          <div className="media-left">
                            <span className="icon">
                              <i className="fa fa-phone" />
                            </span>
                          </div>
                          <div className="media-body">
                            <span className="inner-text">
                              +1 (805) 814-2049
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* footer Top Section End */}
          {/* footer Bottom Section Start */}
          {/* <div className="footer-bottom-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copy-right">
                                    <p>
                                        © Copyright 2024{" "}
                                        <span>
                  <a href="#">darwin,</a>
                </span>{" "}
                                        Designed by:<span> Darwin </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
          {/* footer Bottom Section End */}
        </footer>
        {/* footer Section End */}
      </>
    );
}

export default Footer;