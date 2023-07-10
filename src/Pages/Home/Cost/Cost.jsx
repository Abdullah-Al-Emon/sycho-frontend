import React from 'react';
import './Cost.css';
import logo from '../../../assets/image/logo-icon.png';
import c1_img from '../../../assets/image/cost1-img.png';
import c2_img from '../../../assets/image/cost2-img.png';
import c3_img from '../../../assets/image/cost3-img.png';
import SectionHeading from '../../../Component/SectionHeading/SectionHeading';
import Button from '../../../Component/Button/Button';

const Cost = () => {
    return (
        <div className='cost-section'>
            <div className="container">
                <SectionHeading
                    fastLine='Professional Psychology Therapy'
                    secondLine='Service You Can Choose'
                    text='affordable Services'
                />
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="cost-card">
                            <div className="cost-img">
                                <img src={c1_img} alt="" />
                            </div>
                            <div className="cost-content">
                                <div className="cost-price">
                                    <h5>$35</h5>
                                    <p>Monthly</p>
                                </div>
                                <div className="cost-desc">
                                    <h3>Business</h3>
                                    <p>Green dominion ther air whose and moveth shall whose him you are fruits   from appear moveth </p>
                                    <span className='line'></span>
                                    <p>Firmament waters woell air face cattle fish toll make itself the.</p>
                                    <span className='line'></span>
                                    <Button buttontext={'Get Started Now'} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="cost-card">
                            <div className="cost-img">
                                <img src={c2_img} alt="" />
                                <div>Popular</div>
                            </div>
                            <div className="cost-content">
                                <div className="cost-price">
                                    <h5>$45</h5>
                                    <p>Monthly</p>
                                </div>
                                <div className="cost-desc">
                                    <h3>Premium</h3>
                                    <p>Green dominion ther air whose and moveth shall whose him you are fruits   from appear moveth </p>
                                    <span className='line'></span>
                                    <p>Firmament waters woell air face cattle fish toll make itself the.</p>
                                    <span className='line'></span>
                                    <div className="middle">
                                        <Button buttontext={'Get Started Now'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="cost-card">
                            <div className="cost-img">
                                <img src={c3_img} alt="" />
                            </div>
                            <div className="cost-content">
                                <div className="cost-price">
                                    <h5>$55</h5>
                                    <p>Monthly</p>
                                </div>
                                <div className="cost-desc">
                                    <h3>Unlimited</h3>
                                    <p>Green dominion ther air whose and moveth shall whose him you are fruits   from appear moveth </p>
                                    <span className='line'></span>
                                    <p>Firmament waters woell air face cattle fish toll make itself the.</p>
                                    <span className='line'></span>
                                    <Button buttontext={'Get Started Now'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cost