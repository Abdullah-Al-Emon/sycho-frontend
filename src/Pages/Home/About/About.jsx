import React from 'react';
import './About.css';
import f1_icon from '../../../assets/image/f1-icon.png';
import f2_icon from '../../../assets/image/f2-icon.png';
import f3_icon from '../../../assets/image/f3-icon.png';
import about_img from '../../../assets/image/about-img.png';
import about_bg from '../../../assets/image/feture-bg.png';
import left_bg from '../../../assets/image/about-left-text-bg.png';
import about_more from '../../../assets/image/about-more.png'
import { Icon } from '@iconify/react';
import SectionHeading from '../../../Component/SectionHeading/SectionHeading';
import Button from '../../../Component/Button/Button';

const About = () => {
  return (

    <div>
      <div className='about-section' style={{ backgroundImage: `url(${about_bg})` }}>
        <div className="about-top">
          <div className="about-border-bottom">
            <div className='container'>
              <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <div className='single-feature'>
                    <div className='single-feature-left'>
                      <img src={f1_icon} alt="" />
                    </div>
                    <div className='single-feature-right'>
                      <h4>Satisfied <br /> Patient Services</h4>
                      <p>Feel most better on the hearts</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                  <div className='single-feature'>
                    <div className='single-feature-left'>
                      <img src={f2_icon} alt="" />
                    </div>
                    <div className='single-feature-right'>
                      <h4>Dedicated <br /> Professional Doctor</h4>
                      <p>Feel most better on the hearts</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-12'>
                  <div className='single-feature single-feature-last'>
                    <div className='single-feature-left'>
                      <img src={f3_icon} alt="" />
                    </div>
                    <div className='single-feature-right'>
                      <h4>Support <br /> Customer manager</h4>
                      <p>Feel most better on the hearts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ">
              <div className="about-bottom-left">
                <img src={about_img} alt="" />
                <div className='about-left-text' style={{ backgroundImage: `url(${left_bg})` }}>
                  <p>20 Years <br /> Professional <br /> Experience</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="about-bottom-right">
                <SectionHeading
                  fastLine='Proper Physiotherapy From Proper'
                  secondLine='Guided Physiotherapists'
                  textTop='Welcome to Sycho'
                  text='affordable Services'
                  style2={true}
                />
                <div className="about-content-middle">
                  <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed dole there eiusmod tempor incididub
                    labore  dolore magna aliqua denim ads minim veniam, quis nostrud exerctation to ullamco laibor nisi above murli aliquip commodo usto imperdet quam praesent uten dictum. At diam parturiena
                    sit nisi integer potenti vitae egestas parturient.</p>
                  <div className="row">
                    <div className="col-6">
                      <div className='services'>
                        <span className='icon'><Icon height={16} icon="mingcute:check-fill" /></span>
                        <p>Psychodynamic Therapy</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className='services'>
                        <span className='icon'><Icon height={16} icon="mingcute:check-fill" /></span>
                        <p>Personal Development</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className='services'>
                        <span className='icon'><Icon height={16} icon="mingcute:check-fill" /></span>
                        <p>Mindtherafy Professional</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className='services'>
                        <span className='icon'><Icon height={16} icon="mingcute:check-fill" /></span>
                        <p>Assessment Consultation</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='about-content-bottom'>
                  <Button buttontext={'More About Us'} />
                  <div className='about-info'>
                    <div><img src={about_more} alt="" /></div>
                    <div>
                      <h4>Dalian Machen</h4>
                      <span>CEO, Sycho</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About