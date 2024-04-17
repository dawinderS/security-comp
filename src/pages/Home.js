import React from "react";
import HomeServices from "../components/home/HomeServices";
import Layout from "../common/Layout";
import AboutUs from "../components/about-us/AboutUs";
import WhyChooseUs from "../components/why-choose-us/WhyChooseUs";
import ProjectsTypeOne from "../components/projects/projects-one/ProjectsTypeOne";
import Testimonial from "../components/testimonial/Testimonial";
import TeamMembers from "../components/team-members/TeamMembers";
import Faq from "../components/faq/Faq";
import HomePost from "../components/home/HomePost";
import HeroSlider from "../components/hero-slider/HeroSlider";
import {Helmet} from "react-helmet";

const Home = () => {
    return (
      <>
        <Helmet>
          <title>Regency Security Group</title>
          <meta name="description" content="Regency Security Group" />
          <meta
            name="keywords"
            content="safety, bodyguard, cctv, emergency, Event Security, fire, investigation, investigator, officer, protection, security, Security Camera, Care, Parking  Security"
          />
        </Helmet>
        <Layout>
          <HeroSlider />
          <AboutUs />
          <WhyChooseUs />
          <HomeServices />
          <ProjectsTypeOne />
          <Testimonial />
          <TeamMembers />
          <Faq />
          <HomePost />
        </Layout>
      </>
    );
}

export default Home;