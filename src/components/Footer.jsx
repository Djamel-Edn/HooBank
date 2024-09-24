import React from 'react'
import { facebook, instagram, linkedin, logo, twitter } from '../assets'

const Footer = () => {
    return (
        <footer id='footer' className='flex flex-col gap-4 py-4 mx-2 md:mx-8 xl:mx-44 px-2 text-white'>

            <div className='flex flex-col md:flex-row'>

           
            <div className='flex  flex-col items-center md:items-start gap-6 py-2 '>
                <img src={logo} alt="logo" className='h-1/2 w-1/2' />
                <p className='text-white/70  w-3/4 px-1 md:px-6'>A new way to make the payments easy, reliable and secure.</p>
            </div>
            <div className='grid grid-cols-3 gap-3 md:gap-20'>
                <div className='flex flex-col gap-3 p-2 text-sm'>
                    <h6 className='mb-2 font-semibold' >
                        Useful Links
                    </h6>
                    <a href="#" className='text-white/70 '>
                        Content
                    </a>
                    <a href="#" className='text-white/70 '>
                        How it works
                    </a>
                    <a href="#" className='text-white/70 '>
                        Create
                    </a>
                    <a href="#" className='text-white/70 '>
                        Explore
                    </a>
                    <a href="#" className='text-white/70 '>
                        Terms & Services
                    </a>
                </div>
                <div className='flex flex-col gap-3 p-2 text-sm'>
                    <h6 className='mb-2 font-semibold'>
                        Community
                    </h6>
                    <a href="#" className='text-white/70 '>
                        Help Center
                    </a>
                    <a href="#" className='text-white/70 '>
                        Partners
                    </a>
                    <a href="#" className='text-white/70 '>
                        Suggestions
                    </a>
                    <a href="#" className='text-white/70 '>
                        Blog
                    </a>
                    <a href="#" className='text-white/70 '>
                        Newletters
                    </a>
                </div>
                <div className='flex flex-col gap-3 p-2 text-sm'>
                    <h6 className='mb-2 font-semibold'>
                        Partner
                    </h6>
                    <a href="#" className='text-white/70 '>
                        Our Partner
                    </a>
                    <a href="#" className='text-white/70 '>
                        Become a Partner
                    </a>
                </div>
            </div>
            </div>
            <div className='w-full rounded-lg bg-white/70 h-[1px] md:mx-5'></div>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4 px-2 md:px-8 text-white/70 py-4'>
                <p className='text-sm md:text-md'><span className='mr-2'>Copyright</span> <span className='mr-2'>©</span> 2021 HooBank. All Rights Reserved.</p>
                <div className='flex gap-4 md:gap-8 '>
                    <a href="#">
                    <img src={instagram} alt="" className='h-4 w-4' />
                    </a>
                    <a href="#">
                    <img src={facebook} alt="" className='h-4 w-4' />
                    </a>
                    <a href="#">
                    <img src={twitter} alt="" className='h-4 w-4' />
                    </a>
                    <a href="#">
                    <img src={linkedin} alt="" className='h-4 w-4' />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer