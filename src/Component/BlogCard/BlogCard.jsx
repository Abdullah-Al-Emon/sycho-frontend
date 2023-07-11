import React from 'react';
import './BlogCard.css';
import b1_icon from '../../assets/image/b1-icon.png';
import b2_icon from '../../assets/image/b2-icon.png';
import b3_icon from '../../assets/image/b3-icon.png';

const BlogCard = (props) => {
    return (
        <div className="blog-card">
            <div className="blog-img">
                <img src={props.blogCardImg} alt="" />
            </div>
            <div className="blog-desc">
                <div className="blog-date">
                    <span className='date'>{props.blogDate}</span>
                    <span className='month'>{props.blogMonth}</span>
                </div>
                <div className="top-icon-div"><img src={b3_icon} alt="" /> <span>{props.blogText}</span></div>
                <a href='' className='blog-title'>{props.blogTitle}</a>
                <div className='bottom-icon-div'>
                    <div><img src={b1_icon} alt="" /> <span>{props.blogProblem}</span></div>
                    <div><img src={b2_icon} alt="" /> <span>{props.blogComment} Comment</span></div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard