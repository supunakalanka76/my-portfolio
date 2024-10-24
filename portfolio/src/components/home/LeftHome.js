import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import {FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6"
import {FaReact, FaHtml5, FaCss3, FaLaravel, FaFigma,} from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'

function LeftHome() {

    const [text] = useTypewriter({
        words: ['a Professional Coder.', 'a Web Developer.', 'an UI Designer.', 'a Software Developer.'],
        loop: true,
        typeSpeed: 80,
        deleteSpeed: 50,
        delay: 1500,
    });

  return (
    <div className='w-1/2 flex flex-col gap-20'>
        <div className='flex flex-col gap-5' >

          <h4 className='text-lg font-normal'>Welcome to My Creative Space!</h4>
          
          <h1 className='text-6xl font-bold text-white'>
            Hi, I'm {' '}
            <span className='text-designColor capitalize'> Supun Akalanka</span>
          </h1>

          <h2 className='text-4xl font-bold text-white'>
            {' '}<span>{text}</span>
            <Cursor 
            cursorBlinking='false'
            cursorStyle='|'
            cursorColor='#00ADB5'
            >
            </Cursor>
          </h2>

            <p className='text-base font-poppins leading-6 tracking-wide'>
              I am a passionate software and web developer with a keen interest in designing innovative and user-friendly applications. My journey in technology has equipped me with a solid foundation in coding and design principles, allowing me to create solutions that not only meet user needs but also enhance their experience. I thrive on challenges and continually seek opportunities to learn and grow in this dynamic field.
            </p>
        </div>
        <div className='flex justify-between'>
        <div>
          <h2 className='text-base uppercase font-poppins mb-4'>
            Connect with Me On:
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

        <div>
        <h2 className='text-base uppercase font-poppins mb-4'>
        Key Skills:
          </h2>
          <div className='flex gap-4'>
            <span className='homeIcon'>
              <FaReact />
            </span>
            <span className='homeIcon'>
              <FaHtml5 />
            </span>
            <span className='homeIcon'>
              <FaCss3 />
            </span>
            <span className='homeIcon'>
              <FaLaravel />
            </span>
            <span className='homeIcon'>
              <FaFigma />
            </span>
            <span className='homeIcon'>
              <RiTailwindCssFill />
            </span>
          </div>
        </div>
        </div>

      </div>
  )
}

export default LeftHome
