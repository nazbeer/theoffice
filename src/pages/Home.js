import React from 'react';
// import Slider from '../components/Slider';
// import BlogListing from '../components/BlogListing';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Flexible from '../components/Flexible';
import Discover from '../components/Discover1';
import ServicedOffice from '../components/ServicedOffice';
import Solutions from '../components/Solutions';
import BlogListing from '../components/BlogListing';
import OfficeSquare from '../components/OfficeSquare';
import Footer from '../components/Footer';
import blog1 from '../components/images/blog1.png';
import blog2 from '../components/images/blog2.png';
import blog3 from '../components/images/blog3.png';
import Clients from '../components/Clients';
import Experience from '../components/Experience';
const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const blogListings = [
    {
      image: '../components/images/blog1.png',
      title: 'From Freelancers to Remote Workers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      date: 'June 1, 2023',
      tags: ['Events'],
    },
    {
      image:  'blog2',
      title: 'The Importance of Ergonomics in the Co-Working Environment',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      date: 'June 2, 2023',
      tags: ['News'],
    },
    {
      image:  'blog3',
      title: '5 Co-Working Spaces for Networking and Collaboration',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      date: 'June 3, 2023',
      tags: ['News'],
    },
  ];
  
  return (
    <div className="container-fluid" > 

    {/* <Slider /> */}
    <div className='row'>
   
      <Flexible/>

    </div>
    <div className='row'>

    <Discover/>

    </div>
    <div className='container'>

      <ServicedOffice/>

    </div>
    
    <div className='row'>
   
      <Solutions/>
  
    </div>
    <div className='row'>
      <div className='app-exp'>
        <div className=" ourexp mb-4">
              <div className="container ">
                <div className="row mb-3 ">
                  <div className='justify-content-between align-items-center gap-5 customdisplay'>
                  <h5 className="font-weight-600 text-dark  fs-36s">The Office Square Experience</h5>
             
                  <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. </p>
             
              </div>
        </div>
      </div>
    </div>
    </div></div>
    <Experience/>
    <div className='row'>
      <div className='app-clients'>
        <div className=" ourclients mb-4">
              <div className="container ">
                <div className="row mb-3 ">
                  <div className=' justify-content-between align-items-center gap-5 customdisplay'>
                  <h5 className="font-weight-600 text-dark  fs-64">Companies Who Have Chosen Us</h5>
             
                  <p className='pl-41'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             
              </div>
        </div>
      </div>
    </div>
    </div></div>
      <Clients/>
   
    <div className='row'>
      <div className='app-blog'>
      <div className=" ourblogs mb-4">
      <div className="container ">
       <div className="row mb-3 ">
          <div className='d-flex justify-content-between align-items-center'>
      
          <h5 className="font-weight-600 text-dark  fs-36">Our Latest Blogs</h5>
        
          <button className="btn btn-blogs " type="button">All Posts</button>
          </div>
        </div>
       </div>
      </div>
      </div>
    </div>
    <div className="container py-4 w-80" >
      <div className="row py-4">
        
        {blogListings.map((blog, index) => (
          <div key={index} className="col-md-4">
            <BlogListing
              image={blog1}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              tags={blog.tags}
            />
          </div>
        ))}
      </div>
    </div>
     
      <div className='row'>
        <OfficeSquare/>
      </div>

     <div className='row'>
      <Footer/>
     </div>
    </div>
    
  );
}

export default Home;
