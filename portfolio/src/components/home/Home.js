import React from 'react'
import LeftHome from './LeftHome'
import RightHome from './RightHome'


function Home() {

  return (
    <section id='home' className='w-full pl-10 pr-10 pt-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row border-b-[1px] font-poppins border-b-designColor'>

      <LeftHome />

      <RightHome />
    </section>
  )
}

export default Home

