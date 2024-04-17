import React from 'react';

const Topbar = () => {
    return (
      <>
        {/* header Top Start */}
        <div className="hd-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-8">
                <div className="hd-lft">
                  <ul>
                    <li>
                      <i className="fa fa-comment-o" /> 24/7 Live Support
                    </li>
                    <li>
                      <i className="fa fa-phone" />
                      +1 (805) 814-2049
                    </li>
                    <li>
                      <i className="fa fa-map-marker" />
                      California, USA
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="hd-rgt">
                  {/* <span className="follow-title">Follow Us</span>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-vimeo" />
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* header Top End */}
      </>
    );
};

export default Topbar;