import React from 'react'
import { people01, people02, people03, quotes } from '../assets'

const
    About = () => {
        return (
            <section id='About Us' className='flex flex-col gap-10 px-4 md:px-24 xl:px-44 text-white py-16 relative'>
                <div className='bg-[linear-gradient(rgba(26,_41,_128,_1),rgba(38,_208,_206,_1))] blur-[400px] w-[40%] h-[100%] top-0 -right-96 absolute rounded-full'/>
                <div className='flex md:justify-between'>
                    <div className='flex-1 text-xl md:text-4xl font-semibold gap-10 px-4'>
                        <h2 className='mb-6'>What people are</h2>
                        <h2>saying about us</h2>
                    </div>
                    <div className='flex-1 px-2 md:px-32'>

                        <p className='text-white/70'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                    </div>
                </div>
                <div className='grid md:grid-cols-3 py-8'>
                    <div className='flex flex-col items-start gap-10 py-16  px-10 hover:bg-[linear-gradient(144.39deg,#ffffff_-278.56%,#6d6d6d_-78.47%,#11101d_91.61%)]
                rounded-2xl 
                hover:shadow-[0px_20px_100px_-10px_rgba(66,71,91,0.1)] hover:cursor-default'>
                        <div className=' w-full'>
                            <img src={quotes} alt="quotes" />
                        </div>
                        <p>
                            Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
                        </p>
                        <div className='flex gap-2 px-2 items-center'>
                            <img src={people01} alt="image person" className='object-contain h-16 w-16' />
                            <div className='flex flex-col'>
                                <h4 className='text-lg'>Herman Jensen</h4>
                                <p className='text-white/70 text-sm'>Founder & Leader</p>

                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-start gap-10 px-10 py-16 hover:bg-[linear-gradient(144.39deg,#ffffff_-278.56%,#6d6d6d_-78.47%,#11101d_91.61%)]
                rounded-2xl 
                hover:shadow-[0px_20px_100px_-10px_rgba(66,71,91,0.1)] hover:cursor-default'>
                        <div className=' w-full'>
                            <img src={quotes} alt="quotes" />
                        </div>
                        <p>
                        It is usually people in the money business, finance, and international trade that are really rich.
                        </p>
                        <div className='flex gap-2 px-4 items-center'>
                            <img src={people02} alt="image person" className='object-contain h-16 w-16' />
                            <div className='flex flex-col'>
                                <h4 className='text-lg'>Kenn Gallagher</h4>
                                <p className='text-white/70 text-sm'>Founder & Leader</p>

                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-start gap-10 py-16  px-10 hover:bg-[linear-gradient(144.39deg,#ffffff_-278.56%,#6d6d6d_-78.47%,#11101d_91.61%)]
                rounded-2xl 
                hover:shadow-[0px_20px_100px_-10px_rgba(66,71,91,0.1)] hover:cursor-default'>
                        <div className=' w-full'>
                            <img src={quotes} alt="quotes" />
                        </div>
                        <p className='mb-6'>
                        Money makes your life easier. If you're lucky to have it, you're lucky.
                        </p>
                        <div className='flex gap-2 px-4 items-center'>
                            <img src={people03} alt="image person" className='object-contain h-16 w-16'  />
                            <div className='flex flex-col'>
                                <h4 className='text-lg'>Steve Mark</h4>
                                <p className='text-white/70 text-sm'>Founder & Leader</p>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }

export default About
