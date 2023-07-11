import React from 'react';
import './Client.css';
import OwlCarousel from 'react-owl-carousel2';
import c1_img from '../../../assets/image/client1-img.png';
import c2_img from '../../../assets/image/client2-img.png';
import c3_img from '../../../assets/image/client3-img.png';
import c4_img from '../../../assets/image/client4-img.png';
import c5_img from '../../../assets/image/client5-img.png';
import client_bg from '../../../assets/image/client-bg.png';

const Client = () => {
    const options = {
        dots: false,
        loop: true,
        rewind: true,
        margin: 10,
        nav: false,
        autoplay: true,
        center: true,
        responsive: {
            0: {
                items: 2
            },
            400: {
                items: 3
            },
            556:{
                items:4
            },
            834:{
                items: 4
            },
            835:{
                items: 5
            }
        }
    };
    return (
        <div className='client-section' style={{backgroundImage: `url(${client_bg})`}}>
            <OwlCarousel options={options}>
                <div className='item'>
                    <img src={c1_img} alt="" />
                </div>
                <div className='item'>
                    <img src={c2_img} alt="" />
                </div>
                <div className='item'>
                    <img src={c3_img} alt="" />
                </div>
                <div className='item'>
                    <img src={c4_img} alt="" />
                </div>
                <div className='item'>
                    <img src={c5_img} alt="" />
                </div>
            </OwlCarousel>
        </div>
    )
}

export default Client