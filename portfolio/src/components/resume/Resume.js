import React, { useState } from 'react'
import Title from '../layouts/Title'
import Education from './Education'
import Experience from './Experience'
import Achievement from './Achievement'
import Skills from './Skills'

function Resume() {

    const [educationData, setEducationData] = useState(true);
    const [skillData, setSkillData] = useState(false);
    const [experienceData, setExperienceData] = useState(false);
    const [achievementData, setAchievementData] = useState(false);

  return (
    <section id='resume' className='w-full py-20 border-b-[1px] border-b-designColor'>
        <div className='flex justify-center items-center text-center'>
            <Title
                title='Professional Experience'
                des='My Resume:'
            />
        </div>

        <div>
            <ul className='w-full grid grid-cols-4 font-poppins'>
            <li
                onClick={() => 
                    setEducationData(true) &
                    setSkillData(false) &
                    setExperienceData(false) &
                    setAchievementData(false)
                }
                className={`w-full h-20 ${educationData ? "border-designColor rounded-lg" : "border-bodyColor"} bg-bgBlack text-xl text-gray-300 flex justify-center items-center cursor-pointer hover:bg-opacity-40 duration-300 border-[2px] rounded-none`}>
                    Education
            </li>

            <li
                onClick={() => 
                    setEducationData(false) &
                    setSkillData(true) &
                    setExperienceData(false) &
                    setAchievementData(false)
                }
                className={`w-full h-20 ${skillData ? "border-designColor rounded-lg" : "border-bodyColor"} bg-bgBlack text-xl text-gray-300 flex justify-center items-center cursor-pointer hover:bg-opacity-40 duration-300 border-[2px] rounded-none`}>
                    Professional Skills
            </li>

            <li
                onClick={() => 
                    setEducationData(false) &
                    setSkillData(false) &
                    setExperienceData(true) &
                    setAchievementData(false)
                }
                className={`w-full h-20 ${experienceData ? "border-designColor rounded-lg" : "border-bodyColor"} bg-bgBlack text-xl text-gray-300 flex justify-center items-center cursor-pointer hover:bg-opacity-40 duration-300 border-[2px] rounded-none`}>
                    Experience
            </li>

            <li
                onClick={() => 
                    setEducationData(false) &
                    setSkillData(false) &
                    setExperienceData(false) &
                    setAchievementData(true)
                }
                className={`w-full h-20 ${achievementData ? "border-designColor rounded-lg" : "border-bodyColor"} bg-bgBlack text-xl text-gray-300 flex justify-center items-center cursor-pointer hover:bg-opacity-40 duration-300 border-[2px] rounded-none`}>
                    Achievements
            </li>
            </ul>
        </div>
        { educationData && <Education />}

        {skillData && <Skills />}

        {experienceData && <Experience />}

        {achievementData && <Achievement />}
    </section>
  )
}

export default Resume