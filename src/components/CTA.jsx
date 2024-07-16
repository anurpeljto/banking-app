import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => 
  (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient rounded-[20px] box-shadow`}>
      <div className='flex flex-col text-white'>
        <h2 className={`${styles.heading2} mb-3`}>Try our service now!</h2>
        <p className={`${styles.paragraph}`}>Everything you need to accept card payments and grow your business anywhere in the world</p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button styles='rounded-[20px]'/>
      </div>
    </section>
  )


export default CTA