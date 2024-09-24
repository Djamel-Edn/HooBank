import React from 'react'

const Stats = () => {
  return (
    <div className='mx-auto flex flex-col justify-center md:flex-row md:justify-evenly items-center text-white py-2 md:py-8 px-12 lg:gap-4  md:px-20 lg:px-28 xl:px-44'>
      <div className=''>

        <p className='text-lg md:text-2xl font-bold'>
          3800+
          <span className='ml-6 text-sm md:text-lg text-transparent bg-clip-text bg-[radial-gradient(rgba(222,_249,_250,_1),rgba(190,_243,_245,_1),rgba(157,_237,_240,_1),rgba(125,_231,_235,_1),rgba(92,_225,_230,_1),rgba(51,_187,_207,_1))]'>USER ACTIVE</span>
        </p>
      </div>
      <div className='bg-white/40 w-0.5 h-4  rounded-lg hidden md:inline' />
      <div className=''>

        <p className='text-lg md:text-2xl font-bold'>
          230+
          <span className='ml-6 text-sm md:text-lg text-transparent bg-clip-text bg-[radial-gradient(rgba(222,_249,_250,_1),rgba(190,_243,_245,_1),rgba(157,_237,_240,_1),rgba(125,_231,_235,_1),rgba(92,_225,_230,_1),rgba(51,_187,_207,_1))]'>TRUSTED BY COMPANY</span>
        </p>
      </div>
      <div className='bg-white/40 w-0.5 h-4 rounded-lg hidden md:inline' />
      <div className=''>

        <p className='text-lg md:text-2xl font-bold'>
          $230M+
          <span className='ml-6 text-sm md:text-lg text-transparent bg-clip-text bg-[radial-gradient(rgba(222,_249,_250,_1),rgba(190,_243,_245,_1),rgba(157,_237,_240,_1),rgba(125,_231,_235,_1),rgba(92,_225,_230,_1),rgba(51,_187,_207,_1))]'>TRANSACTION</span>
        </p>
      </div>
    </div>
  )
}

export default Stats