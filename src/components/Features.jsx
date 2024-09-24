import React from 'react'
import { send, shield, star } from '../assets'


const Features = () => {
    return (
        <section id='Features' className='text-white flex flex-col items-center md:flex-row mx-6 md:mx-20 lg:mx-36 xl:mx-48 py-16 md:py-32 gap-8 '>
            <div className='flex flex-1 flex-col items-center md:items-start justify-between py-3 gap-4 '>
                <h2 className='leading-[30px] md:leading-[50px] text-xl md:text-4xl font-semibold'>You do the business,<br /> we'll handle the money.</h2>
                <p cl className='text-white/70 text-md md:text-lg'>With the right credit card, you can improve your financial life by building credit,
                    earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                <button className='font-semibold text-black bg-[linear-gradient(rgba(222,_249,_250,_1),rgba(190,_243,_245,_1),rgba(157,_237,_240,_1),rgba(125,_231,_235,_1),rgba(92,_225,_230,_1),rgba(51,_187,_207,_1))]  px-7 py-3 rounded-lg'>Get Started</button>
            </div>
            <div className='flex flex-1 flex-col gap-4 '>
                <div className='flex items-center gap-4 p-3 hover:bg-[linear-gradient(144.39deg,#ffffff_-278.56%,#6d6d6d_-78.47%,#11101d_91.61%)]
                rounded-2xl 
                hover:shadow-[0px_20px_100px_-10px_rgba(66,71,91,0.1)] hover:cursor-default'>
                    <div className='flex justify-center w-[70px] h-[64px] items-center p-2.5 bg-[rgba(9,_151,_124,_0.1)] rounded-[100%]' >

                        <img src={star} alt='star' className='object-contain '  />
                    </div>
                    <div>
                        <h4 className='font-semibold mb-0.5'>Rewards</h4>
                        <p className='text-md md:text-lg' >The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                    </div>
                </div>
                <div className='flex gap-4 p-3 hover:bg-[linear-gradient(144.39deg,#ffffff_-278.56%,#6d6d6d_-78.47%,#11101d_91.61%)]
                rounded-2xl 
                hover:shadow-[0px_20px_100px_-10px_rgba(66,71,91,0.1)] bg-transparent hover:cursor-default'>
          
                    <div className='flex justify-center w-[70px] h-[64px] items-center p-2.5 bg-[rgba(9,_151,_124,_0.1)] rounded-[100%]'>

                        <img src={shield} alt="shield "  className='object-contain'/>
                    </div>
                    <div >
                        <h4 className='font-semibold mb-0.5' >100% Secured</h4>
                        <p className='text-md md:text-lg' >We take proactive steps make sure your information and transactions are secure.</p>
                    </div>
                </div>
                <div className='flex gap-4 p-3 hover:bg-[linear-gradient(144.39deg,#ffffff_-278.56%,#6d6d6d_-78.47%,#11101d_91.61%)]
                rounded-2xl 
                hover:shadow-[0px_20px_100px_-10px_rgba(66,71,91,0.1)] hover:cursor-default'>
                    <div className='flex justify-center w-[70px] h-[64px] items-center p-2.5 bg-[rgba(9,_151,_124,_0.1)] rounded-[100%]'>
                        <img src={send} alt="send "  className='object-contain'/>
                    </div>
                    <div>
                        <h4 className='font-semibold mb-0.5'>Balance Transfer</h4>
                        <p className='text-md md:text-lg'>A balance transfer credit card can save you a lot of money in interest charges.</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Features