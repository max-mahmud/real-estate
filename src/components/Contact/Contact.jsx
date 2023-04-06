import React from "react";
import "./Contact.css";
import { MdOutlineCall } from "react-icons/md";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { AiFillVideoCamera } from "react-icons/ai";
import { BiMessageDots } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <section>
        <div className="container-fluid my-5 px-lg-4">
          <div className="row ">
            <div className="col-lg-6">
              <div className="c-text">
                <h3 className="orangeText">Our Contact Us</h3>
                <h4 className="primaryText py-2">Easy to contact us</h4>
                <p className="secondaryText pb-3">
                  We always ready to help by providijng the best services for
                  you. We beleive <br /> a good blace to live can make your life
                  better
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="contact-number">
                      <div className="contact-wrapper">
                        <span>
                          <MdOutlineCall />
                        </span>
                        <div className="c-text my-text">
                          <h4 className="primaryText">CALL</h4>
                          <p className="secondaryText">017 017 017 012</p>
                        </div>
                      </div>
                      <div className="c-button">
                        <button>Call Now</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-number">
                      <div className="contact-wrapper">
                        <span>
                          <BsFillChatLeftDotsFill />
                        </span>
                        <div className="c-text">
                          <h4 className="primaryText">Chat</h4>
                          <p className="secondaryText">017 017 017 012</p>
                        </div>
                      </div>
                      <div className="c-button">
                        <button>Chat Now</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-number">
                      <div className="contact-wrapper">
                        <span>
                          <AiFillVideoCamera />
                        </span>
                        <div className="c-text">
                          <h4 className="primaryText">Video Call</h4>
                          <p className="secondaryText">017 017 017 012</p>
                        </div>
                      </div>
                      <div className="c-button">
                        <button>Video Call Now</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-number">
                      <div className="contact-wrapper">
                        <span>
                          <BiMessageDots />
                        </span>
                        <div className="c-text">
                          <h4 className="primaryText">Message</h4>
                          <p className="secondaryText">017 017 017 012</p>
                        </div>
                      </div>
                      <div className="c-button">
                        <button>Message Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="c-image">
                <img src="../../../public/contact.jpg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
