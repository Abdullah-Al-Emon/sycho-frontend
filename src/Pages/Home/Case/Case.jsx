import React from 'react';
import './Case.css'
import OwlCarousel from 'react-owl-carousel2';
import c1_img from '../../../assets/image/case1-img.png';
import c2_img from '../../../assets/image/case2-img.png';
import c3_img from '../../../assets/image/case3-img.png';
import case_bg from '../../../assets/image/feture-bg.png';
import { Icon } from '@iconify/react';
import CaseCard from '../../../Component/CaseCard/CaseCard';

const Case = () => {
    const options = {
        dots: false,
        loop: true,
        rewind: false,
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
                items: 2
            },
            481: {
                items: 2
            },
            715: {
                items: 2
            },
        }
    };
    return (
        <div className="case">
            <div className="case-carousel">
                <OwlCarousel options={options}>
                    <div className='item'>
                        <CaseCard
                            caseCardImg={c1_img}
                            caseCardTitle={'Personal Treatment'}
                        />
                    </div>
                    <div className='item'>
                        <CaseCard
                            caseCardImg={c2_img}
                            caseCardTitle={'Depression Problem'}
                        />
                    </div>
                    <div className='item'>
                        <CaseCard
                            caseCardImg={c3_img}
                            caseCardTitle={'Couple Counselling'}
                        />
                    </div>
                    <div className='item'>
                        <CaseCard
                            caseCardImg={c3_img}
                            caseCardTitle={'Couple Counselling'}
                        />
                    </div>
                    <div className='item'>
                        <CaseCard
                            caseCardImg={c3_img}
                            caseCardTitle={'Couple Counselling'}
                        />
                    </div>
                    <div className='item'>
                        <CaseCard
                            caseCardImg={c3_img}
                            caseCardTitle={'Couple Counselling'}
                        />
                    </div>
                    {/* <div className='item'>
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
                    </div> */}
                </OwlCarousel>
            </div>
            <div className='case-section' style={{ backgroundImage: `url(${case_bg})` }}>
            </div>
        </div>
    )
}

export default Case