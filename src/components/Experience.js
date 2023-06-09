import React from 'react';
import './Experience.css';
import experience1 from './images/experience1.png';
import experience2 from './images/experience2.png';
import wifi from './icons/wifi.svg';
import coffee from './icons/coffee.svg';
import tv from './icons/tv.svg';
import fridge from './icons/fridge.svg';
import help from './icons/help.svg';
import calendar from './icons/calendar.svg';
const Experience = () => {
  return (
    <div className='row '>
        <div className='col-md-12'>
    <div className='d-flex justify-content-center align-items-center gap-77 '>
        <img src={experience1} alt="Experience" className='width100'></img>
        <img src={experience2} alt="Experience 1" className='mobilehider'></img>
    </div>
    </div>
    <div className='col-md-12'>
    <div className="exp-list-container">
    <div className="exp-list">
        <div className='text-center gridone'>
        <img src={wifi} alt='wifi' className="exp-item"></img>
        <span className='font-weight-600'>Free Internet</span>
        </div>
        <div className='text-center gridtwo'>
        <img src={coffee} alt='coffee' className="exp-item"></img>
        <span  className='font-weight-600'>Free Coffee</span>
        </div>
        <div className='text-center gridone'>
        <img src={tv} alt='tv' className="exp-item"></img>
        <span  className='font-weight-600'>Ergonomic Desks</span>
        </div>
        <div className='text-center gridtwo'>
        <img src={fridge} alt='Kitchen' className="exp-item"></img>
        <span  className='font-weight-600'>Kitchen</span>
        </div>
        <div className='text-center gridthree'>
        <img src={help} alt='Helpdesk' className="exp-item"></img>
        <span  className='font-weight-600'>Full 24/7 Access</span>
        </div>
        <div className='text-center '>
        <img src={calendar} alt='Events' className="exp-item"></img>
        <span  className='font-weight-600'>Events</span>
        </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Experience;
