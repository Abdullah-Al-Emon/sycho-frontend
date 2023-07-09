import React from 'react';
import './MainHome.css'
import Banner from '../Banner/Banner';
import OwlCarousel from 'react-owl-carousel2';
import b1_img from '../../../assets/image/banner-1.png';
import b2_img from '../../../assets/image/banner-2.png'
import About from '../About/About';
import Service from '../Service/Service';
import Appointment from '../Appointment/Appointment';
import Case from '../Case/Case';
import Client from '../Client/client';
import Cost from '../Cost/Cost';
import Contact from '../Contact/contact';
import Testimonial from '../Testimonial/Testimonial';
import Blog from '../Blog/blog';

const MainHome = () => {
  const options = {
    rewind: true,
    dots: true,
    dotsData: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
    }
  };
  return (
    <div>
      <div className="banner">
        <OwlCarousel options={options}>
          <div className='item' data-dot="<span>01</span>">
            <Banner img={b1_img} />
          </div>
          <div className='item' data-dot="<span>02</span>">
            <Banner img={b2_img} />
          </div>
          <div className='item' data-dot="<span>03</span>">
            <Banner img={b1_img} />
          </div>
        </OwlCarousel>
      </div>
      <About />
      <Service />
      <Appointment />
      <Case/>
      <Client/>
      <Cost/>
      <Contact/>
      <Testimonial/>
      <Blog/>
    </div>
  )
}

export default MainHome