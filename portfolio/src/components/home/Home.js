import React from 'react'
import LeftHome from './LeftHome'
import RightHome from './RightHome'


function Home() {

  return (
    <section id='home' className='w-full pt-10 pb-20 flex border-b-[1px] font-poppins border-b-designColor'>

      <LeftHome />

      <RightHome />
    </section>
  )
}

export default Home

