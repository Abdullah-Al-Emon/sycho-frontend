import React from 'react';
import './Case.css'
import OwlCarousel from 'react-owl-carousel2';
import c1_img from '../../../assets/image/case1-img.png';
import c2_img from '../../../assets/image/case2-img.png';
import c3_img from '../../../assets/image/case3-img.png';
import { Icon } from '@iconify/react';

const Case = () => {
    const options = {
        dots: false,
        loop: true,
        rewind: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        center: true,
        navText: [
            "<span>←</span>",
            "<span>→</span>"
        ],
        responsive: {
            0: {
                items: 1
            },
            481:{
                items: 2
            },
            735: {
                items: 2
            },
            736: {
                items: 3
            }
        }
    };
    return (
        <div className="case">
            <div className="case-carousel">
                <OwlCarousel options={options}>
                    <div className='item'>
                        <img src={c1_img} alt="" />
                        <div className='case-title'>
                            Personal Treatment
                            <span><Icon height={30} icon="akar-icons:plus" /></span>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={c2_img} alt="" />
                        <div className='case-title'>
                            Depression Problem
                            <span><Icon height={30} icon="akar-icons:plus" /></span>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={c3_img} alt="" />
                        <div className='case-title'>
                            Couple Counselling
                            <span><Icon height={30} icon="akar-icons:plus" /></span>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={c1_img} alt="" />
                        <div className='case-title'>
                            Personal Treatment
                            <span><Icon height={30} icon="akar-icons:plus" /></span>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={c2_img} alt="" />
                        <div className='case-title'>
                            Depression Problem
                            <span><Icon height={30} icon="akar-icons:plus" /></span>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={c3_img} alt="" />
                        <div className='case-title'>
                            Personal Treatment
                            <span><Icon height={30} icon="akar-icons:plus" /></span>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
            <div className='case-section'>
            </div>
        </div>
    )
}

export default Case