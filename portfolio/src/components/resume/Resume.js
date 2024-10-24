import React from 'react'
import Title from '../layouts/Title'
import ResumeCard from './ResumeCard'

function Resume() {
  return (
    <section id='resume' className='w-full py-20 border-b-[1px] border-b-bgBlack'>
        <div className='flex justify-center items-center text-center'>
            <Title
                title='Professional Experience'
                des='My Resume:'
            />
        </div>

        <div>
            <ul className='w-full grid grid-cols-4 font-poppins'>
                <li className='w-full h-20 bg-bgBlack  bg-opacity-25 text-xl text-gray-300 flex justify-center items-center cursor-pointer hover:bg-opacity-40 duration-300 border-[2px] rounded-none border-none'>Education</li>
                <li className='w-full h-20 bg-bgBlack bg-opacity-25 text-xl text-gray-300 flex justify-center items-center cursor-pointer hover:bg-opacity-40 duration-300 border-[2px] rounded-none border-none'>Professional Skills</li>
                <li className='w-full h-20 bg-bgBlack bg-opacity-25 text-xl text-gray-300 flex justify-center items-center cursor-pointer hover:bg-opacity-40 duration-300 border-[2px] rounded-none border-none'>Experience</li>
                <li className='w-full h-20 bg-bgBlack bg-opacity-25 text-xl text-gray-300 flex justify-center items-center cursor-pointer hover:bg-opacity-40 duration-300 border-[2px] rounded-none border-none'>Achievements</li>
            </ul>
        </div>

        <div className='py-12 font-poppins'>
            <p className='text-sm text-designColor tracking-[4px]'>2019 - Current</p>
            <h2 className='text-4xl font-bold'>Educational Excellence</h2>
        </div>

        <div className='mt-14 w-1/2 h-[1000px] border-l-[6px] border-bgBlack border-opacity-30 flex flex-col gap-10'>
            <ResumeCard 
                title='BEng (Hons) in Software Engineering (TOP UP)'
                subTitle='London Metropolitan University - UK (2025 - 2026)'
                result=''
                des='Bachelor of Engineering in Software Engineering with specialization in Computer Science and Software Engineering.'
            />

            <ResumeCard 
                title='BTEC Level 5 HND in Computing Software Engineering'
                subTitle='Pearson University - UK (2023 - 2024)'
                result=''
                des='BTEC Level 5 Higher National Diploma in Computing specialization in Software Engineering'
            />

            <ResumeCard 
                title='General Certificate of Education (Advanced Level)'
                subTitle='S.W.R.D. Bandaranayake College, Panduwasnuwara (2019 - 2023)'
                result='C-3'
                des='General Certificate of Education (Advanced Level) . The General Certificate of Education (Advanced Level) is often abbreviated as GCE A/L.'
            />

            <ResumeCard 
                title='General Certificate of Education (Ordinary Level)'
                subTitle='S.W.R.D. Bandaranayake College, Panduwasnuwara (2017 - 2019)'
                result='A-1 B-2 C-6'
                des='The Sri Lankan Ordinary Level (O-level) qualification in Sri Lanka, It is based on the Cambridge University Ordinary Level qualification.'
            />
        </div>
    </section>
  )
}

export default Resume
