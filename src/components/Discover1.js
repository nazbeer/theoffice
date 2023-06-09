import React from 'react';
import './Discover.css';
import leftimg from './images/discover1.png';
import rightimg from './images/Component1_Mask_group_1.png';
const Discover = () => {
  return (
  <div className='row'>
   <div className='col-md-12 bg-white d-flex justify-content-between align-items-center parallax-container-new'>
    <div className='col-md-2  '>
      <img src={leftimg} alt="office square" className='leftimg'/>

    </div>
    <div className='col-md-8 text-left'>
        <h1 className='text-dark  discover-heading '>Discover premium workspaces <br/>for your business to grow.</h1>
        <p className='discover-content'>For teams of 1-20, we have designed our space to motivate, inspire and boost creativity. </p>
    </div>
    <div className='col-md-2 '>
      <img src={rightimg} alt="office square"  className='rightimg margin-top-150'/>

    </div>
   </div>
   </div>
  );
}

export default Discover;
