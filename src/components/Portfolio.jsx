import React from 'react'
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {
  return (
    <section className='flex flex-col items-start justify-center'>
        <h1 className='text-6xl text-gradient font-bold self-center'>My Portfolio</h1>
        <div className='grid grid-cols-1 sm:grid-cols-3 mx-auto sm:gap-24 gap-10 justify-between'>
            <PortfolioCard href='https://nashville-preds.vercel.app/' img='/nashville2.png' description='Nashville Predators Page (NextJS + Typescript)'/>
            <PortfolioCard href='https://scandiweb-test-1.onrender.com/' img='/scandi2.png' description='ReactJS + GraphQL (PHP) + MySQL  eCommerce site'/>
            <PortfolioCard href='https://store-frontend-8dwl.onrender.com/' img='/eComm.png' description='ReactJS + Express + MongoDB eCommerce' style='object-left'/>
            <PortfolioCard href='https://ecommerce-typing.onrender.com/' img='/business.png' description='Business Website'/>

        </div>

    </section>
  )
}

export default Portfolio