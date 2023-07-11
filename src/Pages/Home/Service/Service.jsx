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
import ServiceCard from '../../../Component/ServiceCard/ServiceCard';

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
                        <ServiceCard
                            serviceImg={s1_img}
                            serviceTitle={'Couple Therapy'}
                            serviceDesc={'Dry waters sea sixth that to over above whose him haden thing man Signs which.'}
                            serviceButton={'More Details'}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <ServiceCard
                            serviceImg={s2_img}
                            serviceTitle={'Anxiety Disorder'}
                            serviceDesc={'Dry waters sea sixth that to over above whose him haden thing man Signs which.'}
                            serviceButton={'More Details'}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <ServiceCard
                            serviceImg={s3_img}
                            serviceTitle={'Personal Meeting'}
                            serviceDesc={'Dry waters sea sixth that to over above whose him haden thing man Signs which.'}
                            serviceButton={'More Details'}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <ServiceCard
                            serviceImg={s4_img}
                            serviceTitle={'Depression Problem'}
                            serviceDesc={'Dry waters sea sixth that to over above whose him haden thing man Signs which.'}
                            serviceButton={'More Details'}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <ServiceCard
                            serviceImg={s5_img}
                            serviceTitle={'Family Counselling'}
                            serviceDesc={'Dry waters sea sixth that to over above whose him haden thing man Signs which.'}
                            serviceButton={'More Details'}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <ServiceCard
                            serviceImg={s6_img}
                            serviceTitle={'Dating & Relation'}
                            serviceDesc={'Dry waters sea sixth that to over above whose him haden thing man Signs which.'}
                            serviceButton={'More Details'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service