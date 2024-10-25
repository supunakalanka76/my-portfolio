import React from 'react'
import {FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { contact } from '../../assets'

function ContactLeft() {
  return (
    <div className='w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
        <img 
            className='w-full h-64 object-cover rounded-lg mb-2' 
            src={contact} 
            alt="contact" 
        />
        <div className='flex flex-col gap-4'>
            <h3 className='text-3xl font-bold font-poppins text-white'>Supun Akalanka</h3>
            <p className='text-lg font-normal text-gray-400'>Web & Software Developer</p>
            <p className='text-base text-gray-400 tracking-wide'>I am a passionate software and web developer with a keen interest in designing innovative and user-friendly applications. My journey in technology has equipped me with a solid foundation in coding and design principles, allowing me to create solutions that not only meet user needs but also enhance their experience. I thrive on challenges and continually seek opportunities to learn and grow in this dynamic field.
            </p>
            <p className='text-base text-gray-400 flex items-center gap-4'>Phone:
                <span className='text-lightText'>(+94) 785 766 794</span>
            </p>
            <p className='text-base text-gray-400 flex items-center gap-2'>Email: {""}
                <span className='text-lightText'>supunakalanka76@gmail.com</span>
            </p>
        </div>

        <div className='flex flex-col gap-4'>
            <h2 className='text-base uppercase font-poppins'>
                Find Me in:
            </h2>
            <div className='flex gap-4'>
                <span className='homeIcon'>
                    <FaFacebook />
                </span>
                <span className='homeIcon'>
                    <FaSquareXTwitter />
                </span>
                <span className='homeIcon'>
                    <FaLinkedin />
                </span>
                <span className='homeIcon'>
                    <FaGithub />
                </span>
            </div>
        </div>
    </div>
  )
}

export default ContactLeft
