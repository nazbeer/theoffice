import React from 'react';
import '../components/BlogListing.css';

const BlogListing = ({ image, title, description, date, tags }) => {
  
  return (

    <div className="blog-listing ">
      <img src={image} alt="Blog" className="blog-image" />
      <div className="blog-content">
        <h3 className="blog-title mt-3">{title}</h3>
        <p className="blog-description">{description}</p>
        <div className="blog-footer">
          <span className="blog-date">{date}</span> <span className='px-1'>|</span>
          <span className="blog-tags">{tags.join(' | ')}</span>
        </div>
      </div>
    </div>

  );
};

export default BlogListing;
