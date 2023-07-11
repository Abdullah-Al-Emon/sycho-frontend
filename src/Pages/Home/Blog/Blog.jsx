import React from 'react';
import './Blog.css';
import b1_img from '../../../assets/image/b1-img.png';
import b2_img from '../../../assets/image/b2-img.png';
import b3_img from '../../../assets/image/b3-img.png';
import SectionHeading from '../../../Component/SectionHeading/SectionHeading';
import BlogCard from '../../../Component/BlogCard/BlogCard';

const Blog = () => {
    return (
        <div className='blog-section'>
            <div className="container">
                <SectionHeading
                    fastLine='Professional Psychology Therapy'
                    secondLine='Service You Can Choose'
                    text='affordable Services'
                />
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="blog-card">
                            <BlogCard
                                blogCardImg={b1_img}
                                blogDate={'24'}
                                blogMonth={'AUG'}
                                blogText={'Buffet Causta'}
                                blogTitle={'Evening heaven on spirit them goes first create god together.'}
                                blogProblem={'Couple Problem'}
                                blogComment={'2'}
                            />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <BlogCard
                            blogCardImg={b2_img}
                            blogDate={'25'}
                            blogMonth={'AUG'}
                            blogText={'Darwen Hazard'}
                            blogTitle={'Fifth forth moved were kind moving tree abundantly called.'}
                            blogProblem={'Personal Meeting'}
                            blogComment={'2'}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <BlogCard
                            blogCardImg={b3_img}
                            blogDate={'28'}
                            blogMonth={'AUG'}
                            blogText={'Eleyas Metrobe'}
                            blogTitle={"Doesn midst whose fish beast subdue shall also setting out can."}
                            blogProblem={'Couple Problem'}
                            blogComment={'2'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog