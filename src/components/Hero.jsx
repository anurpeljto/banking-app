import React, {useRef, useEffect, useState} from 'react';
import styles from '../style';
import {discount, robot, robotarm, robotarmmod, reacticon} from '../assets';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section id = 'home' className={`flex md:flex-col flex-row ${styles.paddingY} justify-center items-center mx-12`}>
      

       <div className='flex flex-1 h-full justify-center items-center mt-5 mx-4 mb-[300px] flex-col'>
          <h1 className={`${styles.heading2}`}>Welcome to my <span className='text-gradient'>resume website</span></h1>
          <div className='flex flex-col justify-between items-center h-full'>
            <p className={`${styles.paragraph}`}>Please scroll to find out more</p>
          </div>
       </div>


      
    </section>
  );
}


export default Hero