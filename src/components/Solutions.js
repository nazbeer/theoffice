import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Solutions.css';
import offices from './images/offices.png';
import coworking from './images/coworking.png';
import license from './images/license.png';
import arrowright from './images/arrowright.svg';
const Solutions = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
  
    return (
        <div className="app app-solution">
        <div className="row oursolutions mb-4">
            <div className="container">
            <div className='d-flex justify-content-between align-items-center solutionone'>
      
      <h5 className="font-weight-600 text-dark  fs-36">Our Solutions</h5>
    
      <button className="btn btn-solutions " type="button">All Solutions</button>
      </div>
      <div className="carousel-container">
        <Slider {...settings}>
          <div className="card">
            <img src={coworking} alt="Card 1" />
            <div className="card-content">
            <div className="card-top-right">
              <span className="card-title">Seat in open landscape</span>
            </div>
            <div className="card-bottom-left">
              <p className="card-description">Co-working</p>
            </div>
            <div className="card-bottom-right">
              <p className="card-info"><img src={arrowright} className="img-responsive"/></p>
            </div>
          </div>
            <div className="card-overlay">
            <div className="card-top">
              <h3 className="card-title">Co-working</h3>
            </div>
            <div className="card-bottom">
              <p>
                <a href="#">Co-working</a>
              </p>
              <p>
                <a href="#"><img src={arrowright} className="img-responsive"/></a>
              </p>
            </div>
            </div>
          </div>
          <div className="card">
            <img src={offices} alt="Card 2" />
            <div className="card-content">
            <div className="card-top-right">
              <span className="card-title">Team of 1-20</span>
            </div>
            <div className="card-bottom-left">
              <p className="card-description">Offices</p>
            </div>
            <div className="card-bottom-right">
              <p className="card-info"><img src={arrowright} className="img-responsive"/></p>
            </div>
          </div>
            <div className="card-overlay">
            <div className="card-top">
              <h3 className="card-title">Offices</h3>
            </div>
            <div className="card-bottom">
              <p>
                <a href="#">Offices</a>
              </p>
              <p>
                <a href="#"><img src={arrowright} className="img-responsive"/></a>
              </p>
            </div>
            </div>
          </div>
          <div className="card">
            <img src={coworking} alt="Card 3" />
            <div className="card-content">
            <div className="card-top-right">
              <span className="card-title">Locations</span>
            </div>
            <div className="card-bottom-left">
              <p className="card-description">Locations</p>
            </div>
            <div className="card-bottom-right">
              <p className="card-info"><img src={arrowright} className="img-responsive"/></p>
            </div>
          </div>
            <div className="card-overlay">
            <div className="card-top">
              <h3 className="card-title">Prestigious<br/>Locations</h3>
            </div>
            <div className="card-bottom">
              <p>
                <a href="#">Virtual Address</a>
              </p>
              <p>
                <a href="#"><img src={arrowright} className="img-responsive"/></a>
              </p>
            </div>
            </div>
          </div>
          <div className="card">
            <img src={license} alt="Card 4" />
            <div className="card-content">
            <div className="card-top-right">
              <span className="card-title">Start your Business</span>
            </div>
            <div className="card-bottom-left">
              <p className="card-description">Licensing</p>
            </div>
            <div className="card-bottom-right">
              <p className="card-info"><img src={arrowright} className="img-responsive"/></p>
            </div>
          </div>
            <div className="card-overlay">
            <div className="card-top">
              <h3 className="card-title">Licensing</h3>
            </div>
            <div className="card-bottom">
              <p>
                <a href="#">Licensing</a>
              </p>
              <p>
                <a href="#"><img src={arrowright} className="img-responsive"/></a>
              </p>
            </div>
            </div>
          </div>
        </Slider>
      </div></div>
      </div></div>
    );
  };
  
  export default  Solutions;