import React from 'react'
import {apple, bill, google, picturecode} from '../assets';
import styles, {layout} from '../style'

const Billing = () => 
  (
    <section id="Qualities" className={`${layout.sectionReverse}`}>
      <div className={layout.sectionImgReverse}>
        <img src={picturecode} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
      </div>

      <div className={`${layout.sectionInfo} w-[100%]`}> 
        <h2 className={`${styles.heading2}`}>What do i have to <br className='sm:block hidden'/> <span className='text-gradient'>offer?</span></h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          <ul className='flex flex-1 sm:flex-row flex-col gap-2 justify-center items-start'>
            <div className='flex flex-col w-full h-full gap-5'>
              <span>Responsible</span>
              <span>Reliable</span>
              <span>Good team-player</span>
            </div>

            <div className='flex flex-col w-full h-full gap-5'>
                <span>Always looking to learn and improve</span>
                <span className='mt-5'>Quick to adapt</span>
            </div>
            
            
          </ul>
        </p>

        {/* <div className='flex flex-1 flex-row justify-between max-w-[470px] sm:mt-10 mt-6 '>
          <img src={apple} alt="apple" className='h-[35%] w-[35%] object-contain cursor-pointer'/>
          <img src={google} alt="google" className='h-[35%] w-[35%] object-contain cursor-pointer'/>
        </div> */}
      </div>
    </section>
  )


export default Billing