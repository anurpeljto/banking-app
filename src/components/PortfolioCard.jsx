import React from 'react'

const PortfolioCard = ({img, href, description, style}) => {
  return (
    <a href={href} className='h-[300px] w-[300px] text-white flex flex-col items-center justify-between mt-20'>
        <img src={img} alt='image of website' className={`object-cover w-full h-full ${style}`}/>
        <h2 className='text-nowrap'>{description}</h2>
    </a>
  )
}

export default PortfolioCard