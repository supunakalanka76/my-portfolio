import React from 'react'
import {profile2} from '../../assets/index.js'

function RightHome() {
  return (
    <div className='w-1/2 flex justify-center items-center relative'>
        <img 
        className='w-[500px] h-[680px] z-10'
        src={profile2} 
        alt="profile" />
        <div className='absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center'>
        </div>
    </div>
  )
}

export default RightHome