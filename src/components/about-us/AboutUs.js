import React from "react";
import CountUp from 'react-countup';
import SectionTitle from "../section-title/SectionTitle";

const CounterItem = [
  {
    number: '280',
    title: 'clients',
  },
  {
    number: '350',
    title: 'employees',
  },
  {
    number: '15',
    title: 'Branch Offices',
  }
];

const AboutUs = () => {
    return (
      <>
        {/* About Start */}
        <div className="about-sec pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="about-desc">
                  <SectionTitle
                    title="<span>About</span> Our Company"
                    content="<p>At Regency, we are committed to setting the standard for excellence in security
                              services. Founded in 2015, our mission has been clear: to provide superior security
                              solutions that protect people, property, and peace of mind across the United States.
                              Our comprehensive approach combines state-of-the-art technology with a team of
                              seasoned professionals, each rigorously trained and dedicated to delivering
                              exceptional service.</p>
                              <p>From event security to executive protection, Regency ensures
                              meticulous attention to detail and a proactive stance on safety, making us the trusted
                              partner for all your security needs. We believe in a future where everyone can feel
                              safe and secure, and every day, we work tirelessly to make that vision a reality.</p>"
                />
                  <div className="about-countup">
                    {CounterItem.map((data, i) => (
                      <div key={i} className="counting-inner">
                        <div className="countup-text">
                          <h2 className="counter">
                            <CountUp
                              end={data.number}
                              duration={0.5}
                              delay={0.9}
                              start={0}
                            />
                            +
                          </h2>
                          <h4>{data.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="about-us-img">
                  <img src={`/images/about.jpg`} alt="About Thumb" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
      </>
    );
}

export default AboutUs;