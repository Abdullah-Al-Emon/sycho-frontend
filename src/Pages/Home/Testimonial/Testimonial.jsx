import React from 'react';
import './Testimonial.css';
import t_bg from '../../../assets/image/feture-bg.png';
import quote from '../../../assets/image/quote.png';
import y_star from '../../../assets/image/yellow-start.png';
import g_star from '../../../assets/image/gray-star.png';
import t1_img from '../../../assets/image/t1-img.png';
import t2_img from '../../../assets/image/t2-img.png';
import t3_img from '../../../assets/image/t3-img.png';
import OwlCarousel from 'react-owl-carousel2';
import SectionHeading from '../../../Component/SectionHeading/SectionHeading';
import TestimonialCard from '../../../Component/TestimonialCard/TestimonialCard';

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
                <div className="testimonial" style={{ backgroundImage: `url(${t_bg})` }}>
                    <SectionHeading
                        fastLine='Happy Patient says Something'
                        secondLine='About our Service'
                        textTop='Patient feedback'
                        style2={true}
                    />
                </div>
                <div className="testimonial-carousel">
                    <OwlCarousel options={options}>
                        <div className='item'>
                            <TestimonialCard
                                TestimonialCardDesc={'He of ledser had bn sad earth him pure cree peeth fish lame days all into thing in subdue day they are subdiue haise being gine ning our multiply one behold meats above heaven are domins bione moved orales one fourth to appear in won tree doesn in two together also be door please be open'}
                                TestimonialCardImg={t1_img}
                                TestimonialCardTitle={'Zimmy Carter'}
                                TestimonialCardPosition={'Creative Director'}
                            />
                        </div>
                        <div className='item'>
                            <TestimonialCard
                                TestimonialCardDesc={'He of ledser had bn sad earth him pure cree peeth fish lame days all into thing in subdue day they are subdiue haise being gine ning our multiply one behold meats above heaven are domins bione moved orales one fourth to appear in won tree doesn in two together also be door please be open'}
                                TestimonialCardImg={t2_img}
                                TestimonialCardTitle={'Peter Martyn'}
                                TestimonialCardPosition={'Project Manager'}
                            />
                        </div>
                        <div className='item'>
                            <TestimonialCard
                                TestimonialCardDesc={'He of ledser had bn sad earth him pure cree peeth fish lame days all into thing in subdue day they are subdiue haise being gine ning our multiply one behold meats above heaven are domins bione moved orales one fourth to appear in won tree doesn in two together also be door please be open'}
                                TestimonialCardImg={t3_img}
                                TestimonialCardTitle={'Reoser Fencon'}
                                TestimonialCardPosition={'Sr. Consultant'}
                            />
                        </div>
                        <div className='item'>
                            <TestimonialCard
                                TestimonialCardDesc={'He of ledser had bn sad earth him pure cree peeth fish lame days all into thing in subdue day they are subdiue haise being gine ning our multiply one behold meats above heaven are domins bione moved orales one fourth to appear in won tree doesn in two together also be door please be open'}
                                TestimonialCardImg={t1_img}
                                TestimonialCardTitle={'Zimmy Carter'}
                                TestimonialCardPosition={'Creative Director'}
                            />
                        </div>
                        <div className='item'>
                            <TestimonialCard
                                TestimonialCardDesc={'He of ledser had bn sad earth him pure cree peeth fish lame days all into thing in subdue day they are subdiue haise being gine ning our multiply one behold meats above heaven are domins bione moved orales one fourth to appear in won tree doesn in two together also be door please be open'}
                                TestimonialCardImg={t2_img}
                                TestimonialCardTitle={'Peter Martyn'}
                                TestimonialCardPosition={'Project Manager'}
                            />
                        </div>
                        <div className='item'>
                            <TestimonialCard
                                TestimonialCardDesc={'He of ledser had bn sad earth him pure cree peeth fish lame days all into thing in subdue day they are subdiue haise being gine ning our multiply one behold meats above heaven are domins bione moved orales one fourth to appear in won tree doesn in two together also be door please be open'}
                                TestimonialCardImg={t3_img}
                                TestimonialCardTitle={'Reoser Fencon'}
                                TestimonialCardPosition={'Sr. Consultant'}
                            />
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default Testimonial