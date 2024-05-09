import React from 'react';
import {Link} from "react-router-dom";

const ServicesTypeTwo = ({data}) => {
    return (
      <>
        <div className="col-md-4 col-sm-6">
          <div className="service-inner">
            <div
              className="service-img"
              style={{
                backgroundImage: `url(/images/services/service-one/${data.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }}
            ></div>
            {/* <div className="service-details">
              <h2>
                <Link to={`/our-services/${data.id}`}>{data.title}</Link>
              </h2>
              <p>{data.excerpt}</p>
            </div> */}
            <Link to={`/our-services/${data.id}`}>
              {/* <div className="service-details">
                <h2>{data.title}</h2>
                <p>{data.excerpt}</p>
                <Link to={`/service-details/${data.id}`}>{data.btnText}</Link>
              </div> */}
              <div className="service2-inner">
                <div className="media">
                  <div className="media-left">
                    <div className="service2-icon">
                      <img src={`/images/icon/${data.icon}`} alt={data.title} />
                    </div>
                  </div>
                  <div className="media-body">
                    <div className="service2-details">
                      <h2>{data.title}</h2>
                      <p>{data.excerpt}</p>
                      {/* <Link to={`/service-details/${data.id}`}>
                        {data.btnText}
                      </Link> */}
                      <Link to={`/our-services/${data.id}`}>
                        {data.btnText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </>
    );
};

export default ServicesTypeTwo;