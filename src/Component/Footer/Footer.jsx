import React from 'react';
import './footer.css'
import b1_img from '../../assets/image/brand-1.png';
import b2_img from '../../assets/image/brand-2.png';
import b3_img from '../../assets/image/brand-3.png';
import b4_img from '../../assets/image/brand-4.png';
import b5_img from '../../assets/image/brand-5.png';
import logo from '../../assets/image/logo.png';
import msg from '../../assets/image/sycho-psd.png';
import OwlCarousel from 'react-owl-carousel2';
import b_icon from '../../assets/image/button-icon.png';
import { Icon } from '@iconify/react';

const Footer = () => {
  const options = {
    dots: false,
    dotsData: false,
    autoplay: true,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      460: {
        items: 2
      },
      767:{
        items:3
      },
      1100: {
        items: 3
      },
      1200: {
        items: 4
      },
      1300: {
        items: 5
      }
    }
  };
  return (
    <div className='footer-section'>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="row">
              <div className="col-lg-3">
                <div className="brand-title">
                  Certificate & Awards
                </div>
              </div>
              <div className="col-lg-9">
                <div className="brand-logo-all">
                  <OwlCarousel options={options}>
                    <div className='item'>
                      <img src={b1_img} alt="" />
                    </div>
                    <div className='item'>
                      <img src={b2_img} alt="" />
                    </div>
                    <div className='item'>
                      <img src={b3_img} alt="" />
                    </div>
                    <div className='item'>
                      <img src={b4_img} alt="" />
                    </div>
                    <div className='item'>
                      <img src={b5_img} alt="" />
                    </div>
                    <div className='item'>
                      <img src={b1_img} alt="" />
                    </div>
                    <div className='item'>
                      <img src={b2_img} alt="" />
                    </div>
                    <div className='item'>
                      <img src={b3_img} alt="" />
                    </div>
                    <div className='item'>
                      <img src={b4_img} alt="" />
                    </div>
                    <div className='item'>
                      <img src={b5_img} alt="" />
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-main">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-about">
                  <div className="footer-logo">
                    <img src={logo} alt="" />
                  </div>
                  <div className="footer-about-content">
                    <p>Waters divided said aims kind seicond winged form it tree after female the deep a itself creepeth land bring place day sea don't may thing open who their midst to seas.</p>
                  </div>
                  <div className="footer-social">
                    <h4>Follow us</h4>
                    <div className='footer-icon'>
                      <span><Icon height={28} icon="ri:facebook-fill" /></span>
                      <span><Icon height={28} icon="ri:twitter-fill" /></span>
                      <span><Icon height={28} icon="formkit:pinterest" /></span>
                      <span><Icon height={28} icon="mdi:instagram" /></span>
                      <span><Icon height={28} icon="formkit:linkedin" /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-service">
                  <h3>Services</h3>
                  <ul>
                    <li><a href="#">Business Frustation</a></li>
                    <li><a href="#">Anxiety Dosorder</a></li>
                    <li><a href="#">Personal Meeting</a></li>
                    <li><a href="#">Couple Therapy</a></li>
                    <li><a href="#">Family Counselling</a></li>
                    <li><a href="#">Dating & Relation</a></li>
                    <li><a href="#">Depression Problem</a></li>
                    <li><a href="#">Mental Problem</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-info">
                  <h3>Contact Info</h3>
                  <div className="footer-info-desc">
                    <div className="footer-info-details">
                      <p>House no 35, Palmall street,</p>
                      <p>London, England</p>
                    </div>
                    <div className="footer-info-address">
                      <p>Email</p>
                      <a href='#'>info@basictheme.com</a>
                    </div>
                    <div className="footer-info-address">
                      <p>Support</p>
                      <a href='#'>+1 325 562 3265</a>
                    </div>
                    <div className="footer-info-address">
                      <p>Website</p>
                      <a href='#'>www.basictheme.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-touch">
                  <h3>Stay in Touch</h3>
                  <div className='footer-touch-desc'>
                    <p>Fruitful and herb the seasons of fish saying likeness face beas</p>
                    <div className='footer-input-div'>
                      <input placeholder='Email Address' type="text" />
                      <span><img src={msg} alt="" /></span>
                    </div>
                    <button><span><Icon height={22} icon="akar-icons:paper-airplane" /></span> Subscribe now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className='footer-bottom-left'>
            <p>Copyright © 2020 <span>Basictheme</span>. All Rights Reserved.</p>
          </div>
          <div className="footer-bottom-right">
            <p><a href="">Terms & Condition</a> | <a href="">Privacy</a> | <a href="#">Support</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer