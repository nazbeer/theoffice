import React from 'react';
import './Flexible.css';
import flexible from './images/flexiblejpg.jpg';
const Flexible = () => {
  return (
    
       

        <div className='videocontainer'>
            
          

<video autoplay playsInline muted loop poster={flexible}>
		<source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm" type='video/webm'></source>
    <source src="http://thenewcode.com/assets/videos/ocean-small.mp4"  type='video/mp4'></source>
	</video>
 	{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 80" preserveAspectRatio="xMidYMid slice"  width="975" height="290">
    <defs>
    <mask id="mask" x="0" y="0" width="100%" height="100%" >
      <rect x="0" y="0" width="100%" height="100%" />
    <text  x="20" y="150" textLength="600" fontSize="90px">Flexible</text>
      </mask>
  </defs>
 <rect x="0" y="0" width="100%" height="100%" />
  </svg> */}

            <p className='flexible-content'>Offices, Meeting Rooms & Virtual Solutions </p>
        </div>

  );
}

export default Flexible;
