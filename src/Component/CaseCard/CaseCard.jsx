import React from 'react';
import './CaseCard.css'
import { Icon } from '@iconify/react';

const CaseCard = (props) => {
    return (
        <div className='case-card'>
            <img className='case-img' src={props.caseCardImg} alt="" />
            <div className='case-title'>
                {props.caseCardTitle}
                <span><Icon height={30} icon="akar-icons:plus" /></span>
            </div>
        </div>
    )
}

export default CaseCard