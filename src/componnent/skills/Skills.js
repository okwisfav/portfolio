import React from 'react'
import html from '../../img/Html.png';
import css from '../../img/CSS.png';
import jAVASCRIPT from '../../img/JAVASCRIPT.png';
import react from '../../img/react.png';
import nODE from '../../img/NODE.png';
import fiebase from '../../img/fiebase.png';
import sASS from '../../img/SASS.png';
import tAILWIND from '../../img/TAILWIND.png';
import './Skills.css';
const Skills = () => {
  return (
    <div>
        <div className='skill__section'>
            <h2>SKILLS</h2>
            <p className='p__text__skills'>These are some languages I'm familiar with.</p>
            <div className='icons__text__section'>
                 <div className='icon__img'>
                     <img src={html} alt='html' />
                     <p>Html</p>
                 </div>
                 <div className='icon__img'>
                     <img src={css} alt='css' />
                     <p>css</p>
                 </div>
                 <div className='icon__img'>
                     <img src={jAVASCRIPT} alt='html' />
                     <p className='java'>jAVASCRIPT</p>
                 </div>
                 <div className='icon__img'>
                     <img src={react} alt='html' />
                     <p>react</p>
                 </div>
                 <div className='icon__img'>
                     <img src={nODE} alt='html' />
                     <p>nODE</p>
                 </div>
                 <div className='icon__img'>
                     <img src={fiebase} alt='html' />
                     <p>fiebase</p>
                 </div>
                 <div className='icon__img'>
                     <img src={sASS} alt='html' />
                     <p>sASS</p>
                 </div>
                 <div className='icon__img'>
                     <img src={tAILWIND} alt='html' />
                     <p>tAILWIND</p>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Skills