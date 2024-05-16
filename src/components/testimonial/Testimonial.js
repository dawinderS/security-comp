import React from "react";
import Slider from "react-slick";
import "../../assets/css/slick.css";
import "../../assets/css/slick-theme.css";
import getTestimonialData from "./TestimonialData.json";
import TestimonialCard from "./TestimonialCard";
import TestimonialSectionTitle from "../section-title/TestimonialSectionTitle";
import {TestimonialCarouselConfig} from "../../includes/scripts";

const Testimonial = () => {
    return (
      <>
        {/* Testimonial Section Start */}
        <div
          className="testimonial-sec pt-100"
          style={{ backgroundImage: `url(/images/testimonial_bg.jpg)` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <TestimonialSectionTitle
                  subTitle="Your satisfaction is our priority"
                  title="<span>Client</span> Reviews"
                  content="<p>We understand that our clients’ well-being is our reputation. Regency Security offers true professionalism in our security services and would love for your company to join our roster. Here are a few kind words from our clients.</p>"
                  // btnText="Get a Quote"
                  btnLink="/"
                />
              </div>
              <div className="col-md-8 no-padding">
                <Slider
                  className="all-testimonial2"
                  {...TestimonialCarouselConfig}
                >
                  {getTestimonialData.map((item) => (
                    <TestimonialCard key={item.id} data={item} />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial Section End */}
      </>
    );
}

export default Testimonial;