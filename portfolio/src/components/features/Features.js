import React from 'react'
import Title from '../layouts/Title'
import { FaGlobe, FaDatabase,  } from 'react-icons/fa'
import { SiAntdesign, SiAdobephotoshop, SiAdobepremierepro, SiVisualstudio } from 'react-icons/si'

import Card from './Card'

function Features() {
  return (
    <section id='features' className='w-full py-20 border-b-[1px] border-b-bgBlack'>

      <Title title='Features' des='Areas of Expertise:' />
      <div className='grid grid-cols-3 gap-20'>
        <Card 
          title="Web Development"
          des="I specialize in creating websites using HTML, CSS, and JavaScript, And frameworks like React.Js and Bootsrap. I also collaborate with developers to create responsive and user-friendlly applications."
          icon={<FaGlobe />}
        />

        <Card 
          title="Software Development"
          des="I am proficient in developing software applications, using tools like Visual Studio Code, and Microsoft's Visual Studio. I also collaborate with developers to create efficient and scalable software."
          icon={<SiVisualstudio />}
        />

        <Card 
          title="UI/UX Design"
          des="I am skilled in designing user interfaces and experiences, using tools like Figma, Sketch, and Adobe XD. I also collaborate with designers and developers to create high-quality products."
          icon={<SiAntdesign />}
        />

        <Card 
          title="Database design"
          des="I am proficient in designing and implementing database schemas, using tools like MySQL, and SQL Server Management Studio. I also collaborate with developers to create robust databases."
          icon={<FaDatabase />}
        />

        <Card 
          title="Graphics design"
          des="I am skilled in creating visually appealing and engaging graphics, using tools like Adobe Photoshop, and Illustrator. I also collaborate with designers to create high-quality products."
          icon={<SiAdobephotoshop />}
        />

        <Card 
          title="Video Editing"
          des="I am proficient in editing videos, using tools like Adobe Premiere Pro, and Cap Cut. I also collaborate with video editors and producers to create high-quality content."
          icon={<SiAdobepremierepro />}
        />

      </div>
    </section>
  )
}

export default Features
