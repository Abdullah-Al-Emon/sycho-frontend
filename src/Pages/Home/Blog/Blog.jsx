import React from 'react';
import './Blog.css';
import logo from '../../../assets/image/logo-icon.png';
import b1_icon from '../../../assets/image/b1-icon.png';
import b2_icon from '../../../assets/image/b2-icon.png';
import b3_icon from '../../../assets/image/b3-icon.png';
import b1_img from '../../../assets/image/b1-img.png';
import b2_img from '../../../assets/image/b2-img.png';
import b3_img from '../../../assets/image/b3-img.png';
import SectionHeading from '../../../Component/SectionHeading/SectionHeading';

const Blog = () => {
    return (
        <div className='blog-section'>
            <div className="container">
                <SectionHeading
                    fastLine='Professional Psychology Therapy'
                    secondLine='Service You Can Choose'
                    text='affordable Services'
                />
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="blog-card">
                            <div className="blog-img">
                                <img src={b1_img} alt="" />
                            </div>
                            <div className="blog-desc">
                                <div className="blog-date">
                                    <span className='date'>24</span>
                                    <span className='month'>AUG</span>
                                </div>
                                <div className="top-icon-div"><img src={b3_icon} alt="" /> <span>Buffet Causta</span></div>
                                <a href='' className='blog-title'>Evening heaven on spirit them goes first create god together.</a>
                                <div className='bottom-icon-div'>
                                    <div><img src={b1_icon} alt="" /> <span>Couple Problem</span></div>
                                    <div><img src={b2_icon} alt="" /> <span>2 Comment</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="blog-card">
                            <div className="blog-img">
                                <img src={b2_img} alt="" />
                            </div>
                            <div className="blog-desc">
                                <div className="blog-date">
                                    <span className='date'>25</span>
                                    <span className='month'>AUG</span>
                                </div>
                                <div className="top-icon-div"><img src={b3_icon} alt="" /> <span>Darwen Hazard</span></div>
                                <a href='' className='blog-title'>Fifth forth moved were kind moving tree abundantly called.</a>
                                <div className='bottom-icon-div'>
                                    <div><img src={b1_icon} alt="" /> <span>Personal Meeting</span></div>
                                    <div><img src={b2_icon} alt="" /> <span>2 Comment</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="blog-card">
                            <div className="blog-img">
                                <img src={b3_img} alt="" />
                            </div>
                            <div className="blog-desc">
                                <div className="blog-date">
                                    <span className='date'>28</span>
                                    <span className='month'>AUG</span>
                                </div>
                                <div className="top-icon-div"><img src={b3_icon} alt="" /> <span>Eleyas Metrobe</span></div>
                                <a href='' className='blog-title'>Doesn midst whose fish beast subdue shall also setting out can.</a>
                                <div className='bottom-icon-div'>
                                    <div><img src={b1_icon} alt="" /> <span>Couple Problem</span></div>
                                    <div><img src={b2_icon} alt="" /> <span>2 Comment</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog