import React from 'react';
 import './ServicedOffice.css';
import leftimg from './images/serviced-left.png';
import rightimg from './images/serviced-right.png';
const ServicedOffice = () => {
  return (

  <div className='row row-serviced px-3 '>
   <div className=' d-flex justify-content-between align-items-center '>
    <div className='col-md-2  '>
      <img src={leftimg} alt="office square" className='img-responsive s-leftcustomimg' />

    </div>
    <div className='col-md-8 text-left'>
        <p className='text-description p-4'>We are the premier choice for individuals and businesses seeking <span className='servicedofc-text'>serviced office</span> solutions. Within our prestigious locations, we also offer both exclusive and shared <span className='servicedofc-text'>co-working spaces</span>, designed with you in mind. We create an environment where <span className='servicedofc-text'>productivity</span> thrives and <span className='servicedofc-text'>success</span> becomes inevitable.  </p>
    </div>
    <div className='col-md-2 '>
      <img src={rightimg} alt="office square" className='s-rightimg'/>

    </div>
   </div>
   </div>
  );
}

export default ServicedOffice;
