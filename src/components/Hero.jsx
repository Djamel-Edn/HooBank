import React from 'react';
import { arrowUp, discount, robot } from '../assets';

const Hero = () => {
    return (
        <section id="Home" className="flex md:flex-row flex-col px-4 md:px-20 xl:px-[160px]  py-1 md:py-0 ">
            <div className="flex-1  py-2 md:py-14 relative justify-center items-start flex flex-col gap-6 ">
                <div className='absolute -left-40 top-25 bg-white rounded-2xl w-[40%] h-[60%] blur-[280px]' />
                <a
                    href='#'
                    className='hidden md:flex text-md 
                        md:text-lg lg:text-xl cursor-pointer font-semibold rounded-full w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32
                        absolute md:top-28 lg:top-40 md:-right-3 lg:-right-12 xl:-right-2 flex-col justify-center items-center
                        bg-[radial-gradient(rgba(222,249,250,1),rgba(190,243,245,1),rgba(157,237,240,1),rgba(125,231,235,1),rgba(92,225,230,1),rgba(51,187,207,1))]
                        p-[2px]'
                >
                    <div className='flex items-center flex-col bg-[#00040F] rounded-full w-full h-full justify-center'>
                        <div className='flex items-center bg-clip-text text-transparent bg-[radial-gradient(rgba(222,249,250,1),rgba(190,243,245,1),rgba(157,237,240,1),rgba(125,231,235,1),rgba(92,225,230,1),rgba(51,187,207,1))]'>
                            <p>Get</p>
                            <img src={arrowUp} alt="arrow" className='h-8 w-8' />
                        </div>
                        <p className='bg-clip-text text-transparent bg-[radial-gradient(rgba(222,249,250,1),rgba(190,243,245,1),rgba(157,237,240,1),rgba(125,231,235,1),rgba(92,225,230,1),rgba(51,187,207,1))]'>
                            Started
                        </p>
                    </div>
                </a>




                <div className="flex mx-auto md:mx-0 items-center gap-1 md:gap-2 px-1 md:px-2 py-1 rounded-lg bg-[linear-gradient(rgba(39,39,39,1),rgba(17,16,29,1))] w-fit">
                    <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
                    <p className="text-gray-600 text-sm md:text-lg uppercase">
                        <span className="text-white">20%</span> Discount for <span className="text-white">1 month</span> Account
                    </p>
                </div>

                <h1 className="flex md:inline justify-center gap-1 items-center text-lg md:text-3xl lg:text-6xl text-white leading-2 md:leading-snug lg:leading-[75px] font-semibold">
                    The Next <br className='hidden md:inline' />
                    <span className="bg-clip-text text-transparent bg-[radial-gradient(rgba(222,249,250,1),rgba(190,243,245,1),rgba(157,237,240,1),rgba(125,231,235,1),rgba(92,225,230,1),rgba(51,187,207,1))]">
                        Generation
                    </span>
                    <br /> Payment Method.
                </h1>

                <p className="mr-4 md:mr-16 text-white/70 ">
                    Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
                </p>
            </div>



            <div className="flex-1 relative flex justify-center  items-center    ">
                <img src={robot} alt="robot" className=" max-h-[520px] object-contain z-[5]" />
                <div className="pink__gradient w-[40%] h-[60%] top-0 absolute" />
                <div className="rounded-lg white__gradient bottom-40 right-20 w-[40%] h-[60%] absolute" />
                <div className="blue__gradient w-[40%] h-[60%] top-0 absolute" />
            </div>
            <div className='flex justify-center items-center'>

                <a href='#' className='flex md:hidden text-sm  cursor-pointer font-semibold rounded-full w-20 h-20  bg-[radial-gradient(rgba(222,249,250,1),rgba(190,243,245,1),rgba(157,237,240,1),rgba(125,231,235,1),rgba(92,225,230,1),rgba(51,187,207,1))] text-white   flex-col justify-center items-center '>
                    <div className='flex  items-center'>
                        <p className='text-white'>Get</p>
                        <img src={arrowUp} alt="arrow" className='h-6 w-6' />
                    </div>
                    <p>Started</p>
                </a >
            </div>
        </section>
    );
};

export default Hero;
