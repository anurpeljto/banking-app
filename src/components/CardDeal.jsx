import React from 'react'
import styles, {layout} from '../style';
import Button from './Button';
import { card, robotarmmod, robotarm2 } from '../assets';

const CardDeal = () => 
  (
    <section id="Skills" className={`${layout.section} flex-row `}>
      <div className={`${layout.sectionInfo} flex-1`}>
        <h2 className={styles.heading2}>My experience & <span className='text-gradient'>skills</span></h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 w-full sm:mt-2 flex sm:gap-2 flex-row sm:justify-between`}>
          <ol className='flex flex-1 flex-row'>
            <div className='flex flex-1 flex-col'>
              <h3 className='font-semibold text-[25px] text-white'>Frontend</h3>
              <span>• NextJS/TS</span>
              <span>• ReactJS/TS</span>
              <span>• Angular</span>   
              <span>• HTML/CSS/JS</span>
              <span>• TailwindCSS</span>
           </div>

           <div className='flex flex-1 flex-col'>
              <h3 className='font-semibold text-[25px] text-white mr-0'>Backend</h3>
              <span>• NodeJS</span>
              <span>• NextJS/TS</span>
              <span>• Javascript & Typescript</span>   
              <span>• Express (ExpressJs)</span>
              <span>• Fastify</span>
              <span>• PHP</span>
              <span>• MySQL</span>
              <span>• MongoDB</span>
           </div>
          
           {/* <div className='flex flex-1 flex-col'>
              <span>• ReactJs</span>
              <span>• Angular</span>   
              <span>• HTML/CSS/JS</span>
              <span>• TailwindCSS</span>
           </div> */}
          </ol>
        </p>

        {/* <Button styles="mt-10" /> */}
      </div>

      <div className={`${layout.sectionImg} sm:flex hidden`}>
        <div className='absolute z-[3] -right-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -right-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
        <img src={robotarmmod} alt="card" className='w-[100%] h-[100%] z-[0] ml-[250px]'/>
      </div>

      <div className={`${layout.sectionImg} gap-0 w-full ml-8 sm:hidden items-center`}>
        <div className='absolute z-[3] -right-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -right-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
        <img src={robotarmmod} alt="card" className='w-[100%] h-[100%] z-[0] scale-x-[-1]'/>
        {/* <img src={robotarm2} className='scale-x-[-1] mt-30 mr-22 h-[254.734px] w-[382px]'/> */}
      </div>



      
      
    </section>
  )


export default CardDeal