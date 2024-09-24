import React from 'react'
import { apple, bill, google } from '../assets'

const Billing = () => {
  return (
    <section id='Billing' className='flex flex-col items-center md:flex-row gap-24 mx-2 md:mx-16 lg:mx-28  xl:mx-[160px] px-3 relative'>
        <div className='bg-white/60 blur-[300px] w-[40%] h-[50%] top-0 -left-96 absolute rounded-full'/>
        <div className=''>
            <img src={bill} alt="billing" />
        </div>
        <div className='py-8 px-1 md:px-2 flex flex-col items-center md:items-start  gap-6 text-white'>
        <h2 className='font-semibold text-2xl md:text-4xl '>Easily Control your</h2>
        <h2 className='font-semibold text-2xl md:text-4xl mb-4'>billing & invoicing.</h2>
        <p className='text-white/70 mb-8  w-5/6'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. 
            Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
            <div className='flex justify-center md:justify-start gap-4 px-0.5'>
                <div><img src={apple}alt="" /></div>
                <div><img src={google} alt="" /></div>
            </div>
        </div>
    </section>
  )
}

export default Billing