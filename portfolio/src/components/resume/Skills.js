import React from 'react'
import {motion} from 'framer-motion'
// import ResumeCard from './ResumeCard'

function Skills() {
  return (
    <motion.div 
        initial={{opacity:0}} 
        animate={{opacity:1, transition:{duration:0.5}}}
        className='w-full flex gap-20'>
        <div className='w-1/2'>
        <div className='py-12 font-poppins'>
            <p className='text-sm text-designColor tracking-[4px]'>Features</p>
            <h2 className='text-4xl font-bold'>Design Expertise</h2>
        </div>
        <div className='mt-14 w-full flex flex-col gap-6'>
            <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>Photoshop</p>
                <span className='w-full h-2 bg-bgBlack  bg-opacity-40 inline-flex rounded-md mt-2'>
                    <motion.span 
                    initial={{x: "-100%", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='w-[75%] h-full bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-500 rounded-md relative'>
                        <span className='absolute -top-8 right-0'>75%</span>
                    </motion.span>
                </span>
            </div>
            <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>Figma</p>
                <span className='w-full h-2 bg-bgBlack  bg-opacity-40 inline-flex rounded-md mt-2'>
                    <motion.span 
                    initial={{x: "-100%", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='w-[95%] h-full bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-500 rounded-md relative'>
                        <span className='absolute -top-8 right-0'>95%</span>
                    </motion.span>
                </span>
            </div>
            <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>Cap Cut</p>
                <span className='w-full h-2 bg-bgBlack  bg-opacity-40 inline-flex rounded-md mt-2'>
                    <motion.span 
                    initial={{x: "-100%", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='w-[80%] h-full bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-500 rounded-md relative'>
                        <span className='absolute -top-8 right-0'>80%</span>
                    </motion.span>
                </span>
            </div>
            <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>Adobe Premiere Pro</p>
                <span className='w-full h-2 bg-bgBlack  bg-opacity-40 inline-flex rounded-md mt-2'>
                    <motion.span 
                    initial={{x: "-100%", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='w-[50%] h-full bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-500 rounded-md relative'>
                        <span className='absolute -top-8 right-0'>50%</span>
                    </motion.span>
                </span>
            </div>
            <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>Remini</p>
                <span className='w-full h-2 bg-bgBlack  bg-opacity-40 inline-flex rounded-md mt-2'>
                    <motion.span 
                    initial={{x: "-100%", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='w-[85%] h-full bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-500 rounded-md relative'>
                        <span className='absolute -top-8 right-0'>85%</span>
                    </motion.span>
                </span>
            </div>
            
        </div>
        </div>
        
        <div className='w-1/2'>
            <div className='py-12 font-poppins'>
                <p className='text-sm text-designColor tracking-[4px]'>Features</p>
                <h2 className='text-4xl font-bold'>Development Expertise</h2>
            </div>
            <div className='mt-14 w-full flex flex-col gap-6'>
            <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>HTML</p>
                <span className='w-full h-2 bg-bgBlack  bg-opacity-40 inline-flex rounded-md mt-2'>
                    <motion.span 
                    initial={{x: "-100%", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='w-[95%] h-full bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-500 rounded-md relative'>
                        <span className='absolute -top-8 right-0'>95%</span>
                    </motion.span>
                </span>
            </div>
            <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>CSS</p>
                <span className='w-full h-2 bg-bgBlack  bg-opacity-40 inline-flex rounded-md mt-2'>
                    <motion.span 
                    initial={{x: "-100%", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='w-[80%] h-full bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-500 rounded-md relative'>
                        <span className='absolute -top-8 right-0'>80%</span>
                    </motion.span>
                </span>
            </div>
            <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>Java Script</p>
                <span className='w-full h-2 bg-bgBlack  bg-opacity-40 inline-flex rounded-md mt-2'>
                    <motion.span 
                    initial={{x: "-100%", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='w-[55%] h-full bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-500 rounded-md relative'>
                        <span className='absolute -top-8 right-0'>55%</span>
                    </motion.span>
                </span>
            </div>
            <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>React</p>
                <span className='w-full h-2 bg-bgBlack  bg-opacity-40 inline-flex rounded-md mt-2'>
                    <motion.span 
                    initial={{x: "-100%", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='w-[85%] h-full bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-500 rounded-md relative'>
                        <span className='absolute -top-8 right-0'>85%</span>
                    </motion.span>
                </span>
            </div>
            <div className='overflow-x-hidden'>
                <p className='text-sm uppercase font-medium'>Laravel</p>
                <span className='w-full h-2 bg-bgBlack  bg-opacity-40 inline-flex rounded-md mt-2'>
                    <motion.span 
                    initial={{x: "-100%", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='w-[55%] h-full bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-500 rounded-md relative'>
                        <span className='absolute -top-8 right-0'>55%</span>
                    </motion.span>
                </span>
            </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Skills
