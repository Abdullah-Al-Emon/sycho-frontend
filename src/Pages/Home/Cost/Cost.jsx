import React from 'react';
import './Cost.css';
import logo from '../../../assets/image/logo-icon.png';
import c1_img from '../../../assets/image/cost1-img.png';
import c2_img from '../../../assets/image/cost2-img.png';
import c3_img from '../../../assets/image/cost3-img.png';

const Cost = () => {
    return (
        <div className='cost-section'>
            <div className="container">
                <div className="cost-top">
                    <div className='cost-logo'><img src={logo} alt="" /></div>
                    <div className="cost-title">
                        <h2>Professional Psychology Therapy <br /> Service You Can Choose</h2>
                        <p>affordable Services</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
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
                                    <button>Get Started Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
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
                                    <button className='middle'>Get Started Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
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
                                    <button>Get Started Now</button>
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