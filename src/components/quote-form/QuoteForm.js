import React, {useState} from 'react';
import emailjs from "emailjs-com";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AllStateList from "./AllStateList";
import ServiceList from "./ServicesList";

const QuoteForm = () => {
    // const [selectedDate, setSelectedDate] = useState();
    // const [startDate, setStartDate] = useState();

    const [result, setResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_g9qjp6c',
                'template_eqdaqu6',
                e.target,
                'tFAj0ub7yZ4jej7CT'
            )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setResult( true );
    };

    return (
      <>
        <div className="appointment-form">
          <h2>
            Request A Quote Or <a href="tel:+18058142049">Call Us Now</a>
          </h2>
          <form action="" onSubmit={sendEmail}>
            <fieldset>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="sngl-field">
                    <input
                      placeholder="Name"
                      name="name"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="sngl-field">
                    <input
                      placeholder="Email"
                      name="email"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="sngl-field">
                    <input
                      placeholder="Phone"
                      name="tel"
                      type="tel"
                      pattern="[0-9]{10}"
                      // required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="sngl-field">
                    <input placeholder="Company" name="company" type="text" />
                  </div>
                </div>
                {/* <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                             <div className="sngl-field">
                                 <DatePicker
                                     placeholderText="Select Your Date"
                                     selected={selectedDate}
                                     onChange={(date) => setSelectedDate(date)}
                                     minDate={new Date()}
                                     name="date"
                                 />
                             </div>
                         </div> */}
                {/* <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                             <div className="sngl-field">
                                 <DatePicker
                                     placeholderText="Select Your Time"
                                     selected={startDate}
                                     onChange={(date) => setStartDate(date)}
                                     showTimeSelect
                                     showTimeSelectOnly
                                     timeIntervals={15}
                                     timeCaption="Time"
                                     dateFormat="h:mm aa"
                                     name="time"
                                 />
                             </div>
                         </div> */}
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="sngl-field">
                    <div className="select-arrow">
                      <select name="states">
                        <option value="" disabled selected hidden>
                          State(s)
                        </option>
                        {/* <option selected="" >State(s)</option> */}
                        <AllStateList />
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="sngl-field">
                    <div className="select-arrow">
                      <select name="location">
                        <option value="" disabled selected hidden>
                          Type of services
                        </option>
                        <ServiceList />
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="sngl-field">
                    <textarea
                      placeholder="Provide any additional details, describe the security challenges you are currently facing, etc"
                      name="message"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="filed-submitbtn">
                    <input value="Get Your Free Quote Today" type="submit" />
                  </div>
                </div>
              </div>
            </fieldset>
            {result ? (
              <div className="success-send-msg">
                Your message has been sent successfully. We will contact you
                shortly.
              </div>
            ) : null}
          </form>
        </div>
      </>
    );
};

export default QuoteForm;