import React, { useEffect } from 'react';
import Layout from "../common/Layout";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import AboutUs from "../components/about-us/AboutUs";
import Testimonial from "../components/testimonial/Testimonial";
import TeamMembers from "../components/team-members/TeamMembers";
import ClientLogo from "../components/client-logo/ClientLogo";
import {Helmet} from "react-helmet";

const AboutUsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us | Regency Security Group</title>
        <meta name="description" content="Regency Security Group" />
        <meta
          name="keywords"
          content="safety, bodyguard, cctv, emergency, Event Security, fire, investigation, investigator, officer, protection, security, Security Camera, Care, Parking  Security"
        />
      </Helmet>
      <Layout>
        <Breadcrumb
          pageTitle="About Us"
          rootPath="/"
          parentPath="Home"
          currentPath="About Us"
        />
        <AboutUs />
        {/* <TeamMembers /> */}
      </Layout>
    </>
  );
};

export default AboutUsPage;