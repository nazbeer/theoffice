import React from 'react';
import './Clients.css';
import image1 from './clientsimg/simplelife.png';
import image2 from './clientsimg/bauhause.png';
import image3 from './clientsimg/carlston.png';
import image4 from './clientsimg/rokko.png';
import image5 from './clientsimg/stersstudio.png';
import image6 from './clientsimg/venor.png';
const Clients = () => {
  return (
    <div className='container-fluid'>
    <div className="client-list-container">
    <div className="client-list">
    {/* <marquee behavior="scroll" direction="left" scrollamount="5" loop="true"> */}
      <img src={image1} alt="Client 1" className="client-item" />
      <img src={image2} alt="Client 2" className="client-item" />
      <img src={image3} alt="Client 3" className="client-item" />
      <img src={image4} alt="Client 4" className="client-item" />
      <img src={image5} alt="Client 5" className="client-item" />
      <img src={image6} alt="Client 6" className="client-item" />
      <img src={image3} alt="Client 3" className="client-item" />
      <img src={image4} alt="Client 4" className="client-item" />
      <img src={image5} alt="Client 5" className="client-item" />
      <img src={image6} alt="Client 6" className="client-item" />
      <img src={image3} alt="Client 3" className="client-item" />
      <img src={image4} alt="Client 4" className="client-item" />
      <img src={image5} alt="Client 5" className="client-item" />
      <img src={image6} alt="Client 6" className="client-item" />
      <img src={image3} alt="Client 3" className="client-item" />
      <img src={image4} alt="Client 4" className="client-item" />
      <img src={image5} alt="Client 5" className="client-item" />
      <img src={image6} alt="Client 6" className="client-item" />
      {/* </marquee> */}
    </div>
  </div>
  </div>
  );
}

export default Clients;
