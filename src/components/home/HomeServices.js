import React from 'react';
import ServicesTypeTwo from "../services/services-two/ServicesTypeTwo";
import serviceData from "../services/services-one/ServicesOneData.json";
import SectionTitle from "../section-title/SectionTitle";

const HomeServices = () => {
    const data = serviceData.slice(0, 9);
    return (
        <>
            {/* Service Start */}
            <div className="service2-sec pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <SectionTitle
                                title="The <span>Services</span> We Offer"
                                content="<p>Regency Security Group is the best solution for your security needs and we take pride in our superior security services, may that be logistical, investigatory, or event security. Below are some of the various types of security services we provide to our clients.</p>"
                            />
                        </div>
                    </div>
                    <div className="row">
                        {
                            data.map((item) => (
                                <ServicesTypeTwo
                                    key={item.id}
                                    data={item}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* Service End */}
        </>
    );
};

export default HomeServices;