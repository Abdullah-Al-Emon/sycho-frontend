import React from 'react';
import './ServiceCard.css'
import { Icon } from '@iconify/react';
import Button from '../Button/Button';

const ServiceCard = (props) => {
    return (
        <div className="service-card">
            <img src={props.serviceImg} alt="" />
            <div className='service-title'>
                <p>{props.serviceTitle}</p>
                <p className='icon'><Icon height={28} icon="akar-icons:plus" /></p>
            </div>
            <div className='hidden-desc'>
                <h4>{props.serviceTitle}</h4>
                <p> {props.serviceDesc}</p>
                <Button buttontext={props.serviceButton} />
            </div>
        </div>
    )
}

export default ServiceCard