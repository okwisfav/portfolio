import React from 'react'
import html from '../../img/Html.png';
import css from '../../img/CSS.png';
import JAVASCRIPT from '../../img/JAVASCRIPT.png';
import react from '../../img/react.png';
import NODE from '../../img/NODE.png';
import fiebase from '../../img/fiebase.png';
import  SASS from '../../img/SASS.png';
import tAILWIND from '../../img/TAILWIND.png';
import atom from '../../img/atom.png';
import typescript from '../../img/typescript.png';
import './Skills.css';

const skill =[
    {
        img: html,
        text: 'HTML',
    },
    {  
        img: css,
        text: 'CSS',
    },
    {  
        img: JAVASCRIPT,
        text: 'css',
    },
    {  
        img: react,
        text: 'React',
    },
    {  
        img: SASS,
        text: 'SASS',
    },
    {  
        img: NODE,
        text: 'NODE',
    },
    {  
        img: atom,
        text: 'React Native',
    },
    {  
        img: tAILWIND,
        text: 'Tailwind',
    },
    {  
        img: fiebase,
        text: 'Firebase',
    },
    {
        img: typescript,
        text: 'TypeScript',
    }
]
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
                     <img src={JAVASCRIPT} alt='javascript' />
                     <p className='java'>JavaScript</p>
                 </div>
                 <div className='icon__img'>
                     <img src={react} alt='react' />
                     <p>React</p>
                 </div>
                 <div className='icon__img'>
                     <img src={NODE} alt='node' />
                     <p>Node</p>
                 </div>
                 <div className='icon__img'>
                     <img src={fiebase} alt='firebase' />
                     <p>Firebase</p>
                 </div>
                 <div className='icon__img'>
                     <img src={SASS} alt='sass' />
                     <p>SASS</p>
                 </div>
                 <div className='icon__img'>
                     <img src={tAILWIND} alt='tailwind' />
                     <p>Tailwind</p>
                 </div>
                 <div className='icon__img'>
                        <img src={atom} alt='atom' />
                        <p>React Native</p>
                 </div>
                 <div className='icon__img'>
                        <img src={typescript} alt='atom' />
                        <p>TypeScript</p>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Skills