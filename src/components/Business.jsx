import React from 'react'
import { card } from '../assets'

const Business = () => {
  return (
    <section className='flex flex-col md:flex-row text-white py-4 md:py-20 gap-4  lg:mx-28  px-5 md:px-20'>
        <div className=' flex flex-col gap-7 '>
            <h2 className='font-semibold text-2xl md:text-4xl mt-16'>Find a better card deal </h2>
            <h2 className='text-end md:text-left font-semibold text-2xl md:text-4xl'>in few easy steps.</h2>
            <p className='text-white/70 w-fit mr-2 md:mr-32'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.
                ç Aliquet ultrices ac, ametau.</p>
                <button className='w-fit self-center md:self-baseline font-semibold text-black bg-[linear-gradient(rgba(222,_249,_250,_1),rgba(190,_243,_245,_1),rgba(157,_237,_240,_1),rgba(125,_231,_235,_1),rgba(92,_225,_230,_1),rgba(51,_187,_207,_1))]  px-7 py-3 rounded-lg'>Get Started</button>
        </div>
        <div className=' py-2 px-2'>
        <img src={card} alt="card" className='h-full w-full object-contain' />
        </div>
    </section>
  )
}

export default Business