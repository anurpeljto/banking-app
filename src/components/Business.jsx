import React from 'react'
import styles, {layout} from '../style';
import {features} from '../constants';
import Button from './Button';
import { anur } from '../assets';

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index == features.length-1 ? 'mb-0' : 'mb-6'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain'/>
    </div>

    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>

      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
        {content}
      </p>
    </div>
  </div>
);

const Business = () => 
  (
    <section id="about" className={`${layout.section} `}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>Who am I?</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          My name is Anur Peljto, and I am a passionate Web Developer and programmer. Currently in the final year of my BSc studies
        </p>

        {/* <Button styles="mt-10" /> */}
      </div>

      {/* <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div> */}

      <img src={anur} alt="anur" className='rounded-[40px] opacity-50 sd:mt-0 mt-5 sd:h-[20%] sd:w-[20%] h-[30%] w-[30%]'/>
    </section>
  )


export default Business