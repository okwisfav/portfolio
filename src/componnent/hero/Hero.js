import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    // This effect runs once when the component mounts
    setIsModalOpen(true);

    // Cleanup function to set the modal to closed when the component unmounts
    return () => setIsModalOpen(false);
  }, []);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='container__hero'>
      {/* {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-icon" onClick={handleModalClose}>&times;</span>
            <h3>Let x =client; <br />
                if (x==paying) <br />{ 
                  console.log("pamper client")
                }
                else(x==for_exposure) <br />{
                }
            </h3>
            <h3>  console.log("run")</h3>

          </div>
        </div>
      )} */}
      
      <div className='container__text'>
        <h2>Hello, I'm Oghenekohworo Oghenefego,</h2>
        <p>A Front-end Engineer based in <br /> Nigeria.</p>
      </div>
    </div>
  );
};

export default Hero;
