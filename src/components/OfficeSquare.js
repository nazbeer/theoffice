import React from "react";
import officesquare from './images/officesquare.svg';
import './OfficeSquare.css';
import arrowright1 from './images/arrowright1.svg';
const OfficeSquare = () => {


return(
    <div className="container mt-4">
        <div className="row mt-4">
           <div className="container1">
      <div className="scrolling-row">
        <div className="scrolling-bg" />
        <div className="scrolling-content">
          <h1 className="text-center text-dark">Book A Tour <img src={arrowright1} alt="arrow right"></img></h1>
        </div>
        </div> 
      </div>
    </div>
    
    </div>
    // <>
    // <div className="container mt-4">
    //     <div className="row mt-4">
        
    //       <div className="row-container">
    //         <div className="row-content">
            
    //         </div>
    //         <h1 className="text-center">Book A Tour</h1>
    //     </div>
    //     </div>
    // </div>
    // </>
)
};
export default OfficeSquare;