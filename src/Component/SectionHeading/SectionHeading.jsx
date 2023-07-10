import React from 'react';
import logo from '../../assets/image/logo-icon.png';
import './SectionHeading.css'

const SectionHeading = (props) => {

    return (
        <>
            <div className={`section-title-top ${props.style2 ? 'style2' : ''}`}>
                {
                    props.style2 ?
                        (
                            <div className='section-title-content-top'>
                                <span><img src={logo} alt="" /></span>
                                <h5>{props.textTop}</h5>
                            </div>
                        )
                        :
                        <div className='section-title-logo'><img src={logo} alt="" /></div>
                }
                <div className="section-title">
                    <h2>{props.fastLine} <br /> {props.secondLine}</h2>
                    <p>{props.text}</p>
                </div>
            </div>
        </>
    )
}

export default SectionHeading