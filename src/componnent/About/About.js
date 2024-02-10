import React from 'react'
import './About.css'
const About = () => {
  return (
     <div className='about__all'>
         <div className='about__section'>
            <h1>ABOUT</h1>
         </div>
         <div className='about__text__flex'>
             <div className="about__text">
                <h5>Hey there! I'm oghenekohworo oghenefego, nice to meet you. Please take a look around, you just might like what you see</h5>
             </div>
             <div className='about__text__p'>
                 <p>Learning! I'm always learning. That's been the bedrock of my career so far. I'm an addict for information and knowledge and this has helped me to grow. Of course I'm always willing to dish out this knowledge too, There's no better way to get clearer understanding than by teaching.</p>
                 <p className='about__bold'>Ah Yes! I'm available for Hire.</p>
             </div>
         </div>
     </div>
  )
}

export default About;