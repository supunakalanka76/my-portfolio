import React from 'react'
import {motion} from 'framer-motion'
import ResumeCard from './ResumeCard'

function Achievement() {
  return (
    <motion.div 
        initial={{opacity:0}} 
        animate={{opacity:1, transition:{duration:0.5}}} 
        className='w-full flex gap-20'>
        <div>
        <div className='py-12 font-poppins'>
            <p className='text-sm text-designColor tracking-[4px]'>Features</p>
            <h2 className='text-4xl font-bold'>Educational Achievements</h2>
        </div>

        <div className='mt-14 w-full h-[1000px] border-l-[6px] border-bgBlack border-opacity-30 flex flex-col gap-10'>
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
        </div>
        <div>
            <div>
                <div className='py-12 font-poppins'>
                    <p className='text-sm text-designColor tracking-[4px]'>Features</p>
                    <h2 className='text-4xl font-bold'>Career Achievements</h2>
                </div>

                <div className='mt-14 w-full h-[1000px] border-l-[6px] border-bgBlack border-opacity-30 flex flex-col gap-10'>
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
            </div>
        </div>
    </motion.div>
  )
}

export default Achievement
