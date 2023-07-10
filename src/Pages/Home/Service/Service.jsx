import React from 'react';
import './Service.css';
import logo from '../../../assets/image/logo-icon.png';
import s1_img from '../../../assets/image/s1-card.png';
import s2_img from '../../../assets/image/s2-card.png';
import s3_img from '../../../assets/image/s3-card.png';
import s4_img from '../../../assets/image/s4-card.png';
import s5_img from '../../../assets/image/s5-card.png';
import s6_img from '../../../assets/image/s6-card.png';
import { Icon } from '@iconify/react';
import SectionHeading from '../../../Component/SectionHeading/SectionHeading';
import Button from '../../../Component/Button/Button';

const Service = () => {
    return (
        <div className='service-section'>
            <div className="container">
                <SectionHeading
                    fastLine='Professional Psychology Therapy'
                    secondLine='Service You Can Choose'
                    text='affordable Services'
                />
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="service-card">
                            <img src={s1_img} alt="" />
                            <div className='service-title'>
                                <p>Couple Therapy</p>
                                <p className='icon'><Icon height={28} icon="akar-icons:plus" /></p>
                            </div>
                            <div className='hidden-desc'>
                                <h4>Couple Therapy</h4>
                                <p> Dry waters sea sixth that to over above whose him haden thing man Signs which.</p>
                                <Button buttontext={'More Details'}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="service-card">
                            <img src={s2_img} alt="" />
                            <div className='service-title'>
                                <p>Anxiety Disorder</p>
                                <p className='icon'><Icon height={28} icon="akar-icons:plus" /></p>
                            </div>
                            <div className='hidden-desc'>
                                <h4>Anxiety Disorder</h4>
                                <p> Dry waters sea sixth that to over above whose him haden thing man Signs which.</p>
                                <Button buttontext={'More Details'}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="service-card">
                            <img src={s3_img} alt="" />
                            <div className='service-title'>
                                <p>Personal Meeting</p>
                                <p className='icon'><Icon height={28} icon="akar-icons:plus" /></p>
                            </div>
                            <div className='hidden-desc'>
                                <h4>Personal Meeting</h4>
                                <p> Dry waters sea sixth that to over above whose him haden thing man Signs which.</p>
                                <Button buttontext={'More Details'}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="service-card">
                            <img src={s4_img} alt="" />
                            <div className='service-title'>
                                <p>Depression Problem</p>
                                <p className='icon'><Icon height={28} icon="akar-icons:plus" /></p>
                            </div>
                            <div className='hidden-desc'>
                                <h4>Depression Problem</h4>
                                <p> Dry waters sea sixth that to over above whose him haden thing man Signs which.</p>
                                <Button buttontext={'More Details'}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="service-card">
                            <img src={s5_img} alt="" />
                            <div className='service-title'>
                                <p>Family Counselling</p>
                                <p className='icon'><Icon height={28} icon="akar-icons:plus" /></p>
                            </div>
                            <div className='hidden-desc'>
                                <h4>Family Counselling</h4>
                                <p> Dry waters sea sixth that to over above whose him haden thing man Signs which.</p>
                                <Button buttontext={'More Details'}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="service-card">
                            <img src={s6_img} alt="" />
                            <div className='service-title'>
                                <p>Dating & Relation</p>
                                <p className='icon'><Icon height={28} icon="akar-icons:plus" /></p>
                            </div>
                            <div className='hidden-desc'>
                                <h4>Dating & Relation</h4>
                                <p> Dry waters sea sixth that to over above whose him haden thing man Signs which.</p>
                                <Button buttontext={'More Details'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service