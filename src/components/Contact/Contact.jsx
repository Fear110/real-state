import React from 'react';
import './Contact.css';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

function Contact() {
  return (
    <section className="cc-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* leftside */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact</span>
          <span className="primaryText">Easy to connect with us</span>
          <span className="secondaryText">
            We always ready to help by providing the best service for you. We
            beliece a good place to live can make your life better
          </span>

          <div className="flexColStart contactModes">
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">9818981677</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
              {/* Second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">9818981677</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>
            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call Now</span>
                    <span className="secondaryText">9818981677</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
              {/* fourth mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">9818981677</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="image-container">
            <img
              src="./contact.jpg"
              alt="contactUs"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
