import React from 'react';
import './Appointment.css';
import dc_img from '../../../assets/image/doctor-img.png';
import signature_img from '../../../assets/image/signature.png';
import logo from '../../../assets/image/logo-icon.png';
import SectionHeading from '../../../Component/SectionHeading/SectionHeading';
import Button from '../../../Component/Button/Button';

const Appointment = () => {
    return (
        <div className='appointment-section'>
            <div className="doctor-info">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="doctor-img">
                                <img src={dc_img} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="doctor-content">
                                <h3>Dr Noorie Abbas</h3>
                                <h5>Psychotherapist, Medinova Hospital in California</h5>
                                <p>Viverra pede suscipit dapibus litora mus nascetur nec molestie laoreet volutpat egete vul putate. Donec facilisi pede metus. Sapien risus, eleifend ornare adipiscing senectus soci osqu. Scelerisque felis convallis vel cras vel nisl dignissim quis phasellus eleifend potenti oictumst mi nisi semper penatibus maecenas lorem tortor a parturient rhoncus quis pose uere evelum the meaning quam ac.</p>
                                <div className="doctor-button">
                                    <Button buttontext={'Get Appointment'} />
                                    <div>
                                        <img src={signature_img} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="appointment">
                    <div className="row">
                        <div className="col-md-5 p-0">
                            <div className="appointment-left">
                                <h3>Get Appointment</h3>
                                <form className='appointment-form'>
                                    <input className='appointment-input' placeholder='Your Name' type="text" />
                                    <input className='appointment-input' placeholder='Email Address' type="text" />
                                    <textarea className='appointment-input' rows={4} placeholder='Write Message' ></textarea>
                                    <button>make an appointment</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-7 p-0">
                            <div className="appointment-right">
                                <SectionHeading
                                    fastLine='Healing Through More Than'
                                    secondLine='Reality and Games'
                                    textTop='our achievement'
                                    style2={true}
                                />
                                <div className='all-count'>
                                    <div className='customer-count'>
                                        <div className='single-count'>
                                            <span className='number orange'>290</span>
                                            <span className='text'>Psychologist</span>
                                        </div>
                                        <div className='single-count'>
                                            <span className='number green'>215</span>
                                            <span className='text'>All Branches</span>
                                        </div>
                                    </div>
                                    <div className='second-customer-count'>
                                        <div className='second-single-count'>
                                            <span className='number green'>329+</span>
                                            <span className='text'>Total Patient</span>
                                        </div>
                                        <div className='second-single-count'>
                                            <span className='number orange'>152</span>
                                            <span className='text'>Award Winner</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointment