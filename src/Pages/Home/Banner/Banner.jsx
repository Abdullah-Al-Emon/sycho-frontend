import React from 'react';
import './Banner.css';
import b1_img from '../../../assets/image/banner-1.png'

const Banner = ({img}) => {
  return (
    <div className='banner-section'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="banner-left">
                        <h4>Every depression solution</h4>
                        <h2>Best therapy makes Excellent yours family</h2>
                        <button className='button'>Contact us now</button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="banner-right">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner