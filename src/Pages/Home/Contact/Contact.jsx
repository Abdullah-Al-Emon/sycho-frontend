import React from 'react';
import './Contact.css';
import contact_bg from '../../../assets/image/client-bg.png';
import SectionHeading from '../../../Component/SectionHeading/SectionHeading';
import Button from '../../../Component/Button/Button';

const Contact = () => {
  return (
    <div className='contact-section' style={{backgroundImage: `url(${contact_bg})`}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-left">
              <SectionHeading
                fastLine='Have any Emergency problem'
                secondLine="Don't Hesitate"
                textTop='our achievement'
                style2={true}
              />
              <div className='contact-form'>
                <form>
                  <div className='input-div'>
                    <input placeholder='Your Name' type="text" />
                    <input placeholder='E-mail Address' type="email" />
                  </div>
                  <div className='input-div'>
                    <input placeholder='Phone Number' type="text" />
                    <select name="prblm" id="prblm">
                      <option value="">Choose Problem</option>
                      <option value="">Couple Therapy</option>
                      <option value="">Anxiety Disorder</option>
                      <option value="">Family Counselling</option>
                    </select>
                  </div>
                  <textarea placeholder='Write Message' name="message" id="message" rows="5"></textarea>
                  <Button buttontext={'Submit Message'}/>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-right">
              <iframe
                width="100%"
                height="100%"
                title="map"
                className="map"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.057892188255!2d90.42798001517453!3d23.745314884591867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9fc951a5071%3A0xfbb644b7ad28de4e!2sTarabagh%20Rd%2002!5e0!3m2!1sen!2sbd!4v1671614350840!5m2!1sen!2sbd"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact