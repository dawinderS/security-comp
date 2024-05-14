import React from 'react';
import Layout from '../common/Layout';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ContactUsForm from '../components/contact-us-form/ContactUsForm';
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
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="faq-sec">
                  {/* {getFaqData.map((item) => (
                    <FaqCard key={item.id} data={item} />
                  ))} */}
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-page-sec pt-100 pb-100">
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

                        {/*<span>{data.desc}</span>*/}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Contact Page Section End */}
      </Layout>
    </>
  );
};

export default RequestQuote;
