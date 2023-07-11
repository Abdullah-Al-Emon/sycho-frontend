import React from 'react';
import './TestimonialCard.css';
import y_star from '../../assets/image/yellow-start.png';
import g_star from '../../assets/image/gray-star.png';
import quote from '../../assets/image/quote.png';

const TestimonialCard = (props) => {
    return (
        <div className="testimonial-card">
            <div className="testimonial-top">
                <div className="testimonial-img">
                    <div className="t-img-left">
                        <img src={y_star} alt="" />
                        <img src={y_star} alt="" />
                        <img src={y_star} alt="" />
                        <img src={y_star} alt="" />
                        <img src={g_star} alt="" />
                    </div>
                    <div className='t-img-right'>
                        <img src={quote} alt="" />
                    </div>
                </div>
                <div className='testimonial-desc'>
                    {props.TestimonialCardDesc}
                </div>
            </div>
            <div className="testimonial-bottom">
                <div>
                    <img src={props.TestimonialCardImg} alt="" />
                </div>
                <div>
                    <h4>{props.TestimonialCardTitle}</h4>
                    <p>{props.TestimonialCardPosition}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard