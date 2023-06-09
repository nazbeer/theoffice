import React from 'react';
import './Flexible.css';
import flexible from './images/flexiblenew.svg';
const Flexible = () => {
  return (
    <div className='row'>
   <section className='bg-white'>
       

        <div className='videocontainer'>
            
            {/* <img src={flexible}></img> */}
            {/* <video autoPlay loop muted>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type='video/mp4'></source>
            </video> */}
            {/* <h1 className='text-dark font-weight-600 flexible-heading'>Flexible</h1> */}
                   {/* <div data-scroll class="svg-mask cfadeinup-hero">
                        <video autoplay playsinline muted loop poster={flexible}>
                            <source src="https://www.spinxdigital.com/app/themes/spinxdigital/assets/images/hero-bg-video.mp4" />
                            <source src="https://www.spinxdigital.com/app/themes/spinxdigital/assets/images/Hero.webm" />
                        </video>
                        <svg width="975" height="290" viewBox="0 0 975 280" fill="none">
                            <defs>
                            <clipPath id="svgPath">
                          <text x="20" y="150" textLength="600" font-family="Knewave" font-size="90px">Flexible</text>
                        </clipPath>
                            </defs>
                        </svg>
                    </div> */}

<video autoplay playsInline muted loop poster={flexible}>
		<source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm" type='video/webm'></source>
    <source src="http://thenewcode.com/assets/videos/ocean-small.mp4"  type='video/mp4'></source>
	</video>
 	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 80" preserveAspectRatio="xMidYMid slice"  width="975" height="290">
    <defs>
    <mask id="mask" x="0" y="0" width="100%" height="100%" >
      <rect x="0" y="0" width="100%" height="100%" />
    <text  x="20" y="150" textLength="600" fontSize="90px">Flexible</text>
      </mask>
  </defs>
 <rect x="0" y="0" width="100%" height="100%" />
  </svg>

            <p className='flexible-content'>Offices, Meeting Rooms & Virtual Solutions </p>
        </div>
   </section>
   </div>
  );
}

export default Flexible;
