import React from 'react'

const CTA = () => {
    return (
        <section id='CTA' className='flex flex-col md:flex-row bg-[linear-gradient(-168.39deg,#ffffff_-278.56%,#6d6d6d_-78.47%,#11101d_91.61%)] mx-5 md:mx-20 lg:mx-44 rounded-2xl gap-4 p-2 lg:p-14 px-4 lg:px-24 my-4 md:my-16'>
            <div className='flex flex-1 flex-col text-white items-center py-1'>
                <h3 className='text-xl lg:text-4xl  mb-4 md:mb-10 font-semibold '>Let's try our service now!</h3>
                <p className='md:text-lg text-md text-white/70 mr-4 text-center'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div className='flex flex-1 justify-center items-center'>
                <button className='font-semibold text-black bg-[linear-gradient(rgba(222,_249,_250,_1),rgba(190,_243,_245,_1),rgba(157,_237,_240,_1),rgba(125,_231,_235,_1),rgba(92,_225,_230,_1),rgba(51,_187,_207,_1))]  px-7 py-3 rounded-lg'>Get Started</button>

            </div>
        </section >
    )
}

export default CTA