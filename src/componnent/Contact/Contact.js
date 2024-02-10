import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact__one'>
             <h5>Want to connect?</h5>
             <div className='contact__head'>
                  <h1>Contact me</h1>
                  <p>Open to new and exciting opprtunities in the tech space, 
                    I always looking forward to connecting 
                    with like and unlike minds. 
                    You can also say hi, I’ll most likely
                     respond.</p>
                     <button className='btn__contact'>Send A Message</button>
             </div>
             <div className='icon__social '>
                   <i  href="https://github.com/okwisfav" class="fa-brands fa-github"></i>
                   <i class="fa-solid fa-envelope"></i>
                   <i class="fa-brands fa-medium"></i>
                   <i class="fa-brands fa-linkedin-in"></i>
                   <i class="fa-brands fa-twitter"></i>
             </div>
        </div>
    </div>
  )
}

export default Contact