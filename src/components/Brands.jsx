import React from 'react'
import { airbnb, binance, coinbase, dropbox } from '../assets'

const Brands = () => {
  return (
    <section id='brands ' className='flex items-center gap-4 md:gap-20  mx-auto py-4 overflow-clip'>
        <img src={airbnb} alt="airbnb" className='h-full w-24 md:w-32 lg:w-48' />
        <img src={binance} alt="binance" className='h-full w-24 md:w-32 lg:w-48'/>
        <img src={coinbase} alt="coinbase" className='h-full w-24 md:w-32 lg:w-48'/>
        <img src={dropbox} alt="dropbox" className='h-full w-24 md:w-32 lg:w-48'/>
    </section>
  )
}

export default Brands