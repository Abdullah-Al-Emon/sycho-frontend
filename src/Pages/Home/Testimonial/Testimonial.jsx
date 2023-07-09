import React from 'react';
import './Testimonial.css';
import logo from '../../../assets/image/logo-icon.png';
import quote from '../../../assets/image/quote.png';
import y_star from '../../../assets/image/yellow-start.png';
import g_star from '../../../assets/image/gray-star.png';
import t1_img from '../../../assets/image/t1-img.png';
import t2_img from '../../../assets/image/t2-img.png';
import t3_img from '../../../assets/image/t3-img.png';
import OwlCarousel from 'react-owl-carousel2';

const Testimonial = () => {
    const options = {
        dots: false,
        loop: false,
        rewind: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: [
            "<span>←</span>",
            "<span>→</span>"
        ],
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    };
    return (
        <div className='testimonial-section'>
            <div className="container">
                <div className="testimonial">
                    <div className='logo'>
                        <span><img src={logo} alt="" /></span>
                        <span>Patient feedback</span>
                    </div>
                    <h2>Happy Patient says Something About our Service</h2>
                </div>
                <div className="testimonial-carousel">
                    <OwlCarousel options={options}>
                        <div className='item'>
                            <div className="testimonial-card">
                                <div className="testimonial-top">
                                    <div className="testimonial-img">
                                        <div className="t-img-left">
                                            <img src={y_star} alt="" />
                                            <img src={y_star} alt="" />
                                            <img src={y_star} alt="" />
                                            <img src={y_star} alt="" />
                                            <img src={g_star} alt="" />
                                        </div>
                                        <div className='t-img-right'>
                                            <img src={quote} alt="" />
                                        </div>
                                    </div>
                                    <div className='testimonial-desc'>
                                        He of ledser had bn sad earth him pure cree peeth fish lame days all into thing in subdue day they are subdiue haise being gine ning our multiply one behold meats above heaven are domins bione moved orales one fourth to appear in won tree doesn in two together also be door please be open
                                    </div>
                                </div>
                                <div className="testimonial-bottom">
                                    <div>
                                        <img src={t1_img} alt="" />
                                    </div>
                                    <div>
                                        <h4>Zimmy Carter</h4>
                                        <p>Creative Director</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="testimonial-card">
                                <div className="testimonial-top">
                                    <div className="testimonial-img">
                                        <div className="t-img-left">
                                            <img src={y_star} alt="" />
                                            <img src={y_star} alt="" />
                                            <img src={y_star} alt="" />
                                            <img src={g_star} alt="" />
                                            <img src={g_star} alt="" />
                                        </div>
                                        <div className='t-img-right'>
                                            <img src={quote} alt="" />
                                        </div>
                                    </div>
                                    <div className='testimonial-desc'>
                                        He of ledser had bn sad earth him pure cree peeth fish lame days all into thing in subdue day they are subdiue haise being gine ning our multiply one behold meats above heaven are domins bione moved orales one fourth to appear in won tree doesn in two together also be door please be open
                                    </div>
                                </div>
                                <div className="testimonial-bottom">
                                    <div>
                                        <img src={t2_img} alt="" />
                                    </div>
                                    <div>
                                        <h4>Peter Martyn</h4>
                                        <p>Project Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="testimonial-card">
                                <div className="testimonial-top">
                                    <div className="testimonial-img">
                                        <div className="t-img-left">
                                            <img src={y_star} alt="" />
                                            <img src={y_star} alt="" />
                                            <img src={y_star} alt="" />
                                            <img src={y_star} alt="" />
                                            <img src={y_star} alt="" />
                                        </div>
                                        <div className='t-img-right'>
                                            <img src={quote} alt="" />
                                        </div>
                                    </div>
                                    <div className='testimonial-desc'>
                                        He of ledser had bn sad earth him pure cree peeth fish lame days all into thing in subdue day they are subdiue haise being gine ning our multiply one behold meats above heaven are domins bione moved orales one fourth to appear in won tree doesn in two together also be door please be open
                                    </div>
                                </div>
                                <div className="testimonial-bottom">
                                    <div>
                                        <img src={t3_img} alt="" />
                                    </div>
                                    <div>
                                        <h4>Reoser Fencon</h4>
                                        <p>Sr. Consultant</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="testimonial-card">
                                <div className="testimonial-top">
                                    <div className="testimonial-img">
                                        <div className="t-img-left">
                                            <img src={y_star} alt="" />
                                            <img src={y_star} alt="" />
                                            <img src={y_star} alt="" />
                                            <img src={y_star} alt="" />
                                            <img src={g_star} alt="" />
                                        </div>
                                        <div className='t-img-right'>
                                            <img src={quote} alt="" />
                                        </div>
                                    </div>
                                    <div className='testimonial-desc'>
                                        He of ledser had bn sad earth him pure cree peeth fish lame days all into thing in subdue day they are subdiue haise being gine ning our multiply one behold meats above heaven are domins bione moved orales one fourth to appear in won tree doesn in two together also be door please be open
                                    </div>
                                </div>
                                <div className="testimonial-bottom">
                                    <div>
                                        <img src={t1_img} alt="" />
                                    </div>
                                    <div>
                                        <h4>Zimmy Carter</h4>
                                        <p>Creative Director</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="testimonial-card">
                                <div className="testimonial-top">
                                    <div className="testimonial-img">
                                        <div className="t-img-left">
                                            <img src={y_star} alt="" />
                                            <img src={y_star} alt="" />
                                            <img src={y_star} alt="" />
                                            <img src={g_star} alt="" />
                                            <img src={g_star} alt="" />
                                        </div>
                                        <div className='t-img-right'>
                                            <img src={quote} alt="" />
                                        </div>
                                    </div>
                                    <div className='testimonial-desc'>
                                        He of ledser had bn sad earth him pure cree peeth fish lame days all into thing in subdue day they are subdiue haise being gine ning our multiply one behold meats above heaven are domins bione moved orales one fourth to appear in won tree doesn in two together also be door please be open
                                    </div>
                                </div>
                                <div className="testimonial-bottom">
                                    <div>
                                        <img src={t2_img} alt="" />
                                    </div>
                                    <div>
                                        <h4>Peter Martyn</h4>
                                        <p>Project Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="testimonial-card">
                                <div className="testimonial-top">
                                    <div className="testimonial-img">
                                        <div className="t-img-left">
                                            <img src={y_star} alt="" />
                                            <img src={y_star} alt="" />
                                            <img src={y_star} alt="" />
                                            <img src={y_star} alt="" />
                                            <img src={y_star} alt="" />
                                        </div>
                                        <div className='t-img-right'>
                                            <img src={quote} alt="" />
                                        </div>
                                    </div>
                                    <div className='testimonial-desc'>
                                        He of ledser had bn sad earth him pure cree peeth fish lame days all into thing in subdue day they are subdiue haise being gine ning our multiply one behold meats above heaven are domins bione moved orales one fourth to appear in won tree doesn in two together also be door please be open
                                    </div>
                                </div>
                                <div className="testimonial-bottom">
                                    <div>
                                        <img src={t3_img} alt="" />
                                    </div>
                                    <div>
                                        <h4>Reoser Fencon</h4>
                                        <p>Sr. Consultant</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default Testimonial