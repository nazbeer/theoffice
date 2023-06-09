import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';
//import flexible from './images/flexible.svg';
const Slider = () => {

  const blogListings = [
    { id: 1, title: 'Flexible', content: 'Offices, Meeting Rooms & Virtual Solutions' },
    ];

  return (
    <Carousel>
      {blogListings.map((blog) => (
        <Carousel.Item key={blog.id} >
          <img
            className="d-block w-100 img-responsive bg-cover"
            src=""
            alt="Offices, Meeting Rooms"
            
            width='800px'
          /> 
       
            <h1 className=' font-weight-600 custom-heading'>{blog.title}</h1>
            <p>{blog.content}</p>
        
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
