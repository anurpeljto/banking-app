import React from 'react'
import styles, {layout} from '../style';
import Button from './Button';
import { card } from '../assets';

const CardDeal = () => 
  (
    <section id="card-deal" className={`${layout.section} flex-row `}>
      <div className={`${layout.sectionInfo} flex-1`}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/> in a few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quisquam, reiciendis voluptas exercitationem dolore ipsum asperiores obcaecati.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg}`}>
        <div className='absolute z-[3] -right-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -right-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
        <img src={card} alt="card" />
      </div>

      
      
    </section>
  )


export default CardDeal