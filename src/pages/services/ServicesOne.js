import React, {useEffect} from 'react';
import ServicesTypeOne from '../../components/services/services-one/ServicesTypeOne';
import ServicesTypeTwo from '../../components/services/services-two/ServicesTypeTwo';
import servicesData from '../../components/services/services-one/ServicesOneData.json';
import Layout from '../../common/Layout';
import Breadcrumb from '../../common/breadcrumb/Breadcrumb';
import { Helmet } from 'react-helmet';

const ServicesOne = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Services | Regency Security Group</title>
        <meta name="description" content="Regency Security Group" />
        <meta
          name="keywords"
          content="safety, bodyguard, cctv, emergency, Event Security, fire, investigation, investigator, officer, protection, security, Security Camera, Care, Parking  Security"
        />
      </Helmet>
      <Layout>
        <Breadcrumb
          pageTitle="Our Services"
          rootPath="/"
          parentPath="Home"
          currentPath="Our Services"
        />
        {/* Service Start */}
        <div className="service-sec pt-100 pb-100">
          <div className="container">
            <div className="row">
              {servicesData.map((item) => (
                <ServicesTypeTwo key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
        {/* Service End */}
      </Layout>
    </>
  );
};

export default ServicesOne;
