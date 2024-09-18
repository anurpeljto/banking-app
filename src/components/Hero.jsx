import React, {useRef, useEffect, useState} from 'react';
import styles from '../style';
import {discount, robot, robotarm, robotarmmod, reacticon, logo} from '../assets';
import GetStarted from './GetStarted';
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section id = 'home' className={`flex md:flex-col flex-row ${styles.paddingY} justify-center items-center mx-12`}>
      

       <div className='flex flex-1 h-full justify-center items-center mt-5 mx-4 mb-[300px] flex-col'>
          <h1 className={`${styles.heading2}`}>Welcome to <ReactTyped className='text-gradient' strings={['anurpeljto.live']} loop typeSpeed={40} backSpeed={50}></ReactTyped></h1>
          <div className='flex flex-col justify-between items-center h-full'>
            <p className={`${styles.paragraph}`}>Please scroll or use the navigation to find out more about me</p>
          </div>
       </div>


      
    </section>
  );
}


export default Hero