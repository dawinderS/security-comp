import React, {useEffect} from 'react';
import Layout from '../common/Layout';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
// import ContactUsForm from '../components/contact-us-form/ContactUsForm';
import ClientLogo from '../components/client-logo/ClientLogo';
import Testimonial from '../components/testimonial/Testimonial';
import QuoteForm from '../components/quote-form/QuoteForm';
import { Helmet } from 'react-helmet';

const ContactInfo = [
  {
    title: 'Phone',
    // content: '0123456789<br />0987654321',
    content: '+1 (805) 814-2049',
  },
  {
    title: 'e-mail',
    // content: 'yourmail@gmail.com<br />demomail@gmail.com',
    content: 'info@regencysecuritygroup.com',
  },
  {
    title: 'Region',
    // content: 'united states california<br />united states california',
    content: 'All States,<br />United States',
  },
];

const RequestQuote = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Request A Quote | Regency Security Group</title>
        <meta name="description" content="Regency Security Group" />
        <meta
          name="keywords"
          content="safety, bodyguard, cctv, emergency, Event Security, fire, investigation, investigator, officer, protection, security, Security Camera, Care, Parking  Security"
        />
      </Helmet>
      <Layout>
        <Breadcrumb
          pageTitle="Request A Quote"
          rootPath="/"
          parentPath="Home"
          currentPath="Request A Quote"
        />
        {/* Contact Page Section Start */}
        <div
          className="appoitment-area"
          style={{ backgroundImage: `url(/images/testimonial_bg.jpg)` }}
        >
          <div className="images-overlay" />
          <div className="container">
            <div className="row">
              <div
                className="col-md-4 col-sm-4 col-xs-12"
                id="req-quote-sidebar"
              >
                <div className="faq-sec2">
                  <div>
                    <span>Phone</span>
                    <p>
                      <a href="tel:+18058142049">+1 (805) 814-2049</a>
                    </p>
                  </div>
                  <div>
                    <span>Email</span>
                    <p>
                      <a href="mailto: info@regencysecuritygroup.com">
                        info@regencysecuritygroup.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <span>Locations</span>
                    <p>All States, USA</p>
                  </div>
                  <div
                    className="footer-social-profile"
                    id="footer-social-quotepage"
                  >
                    <ul>
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
                  {/* {getFaqData.map((item) => (
                    <FaqCard key={item.id} data={item} />
                  ))} */}
                </div>
              </div>
              <div className="col-md-8 col-sm-12 col-xs-12">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="contact-page-sec pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="contact-field">
                  <h2>Write Your Message</h2>
                  <ContactUsForm />
                </div>
              </div>
              <div className="col-md-4">
                {ContactInfo.map((data, i) => (
                  <div key={i} className="contact-info">
                    <div className="contact-info-item">
                      <div className="contact-info-text">
                        <h2>{data.title}</h2>
                        <span
                          dangerouslySetInnerHTML={{ __html: data.content }}
                        />

                        <span>{data.desc}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
        {/* Contact Page Section End */}
      </Layout>
    </>
  );
};

export default RequestQuote;
