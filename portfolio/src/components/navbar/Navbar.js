import React from 'react'
import {Link} from 'react-scroll'
import {logo} from '../../assets/index.js'
import {navLinksdata} from '../../constants/index.js'

function Navbar() {
  return (
    <div className='w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center border-b-[1px] border-b-gray-600'> 
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className='mr-5 flex items-center gap-20'>
            {
                navLinksdata.map(({_id, title, link})=>(
                    <li className='text-md font-bold text-gray-400 tracking-wide cursor-pointer relative group font-poppins' key={_id}>
                        <Link
                        activeClass='active'
                        to={link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                          {title}</Link>
                        <span className='absolute left-0 top-6 w-0 h-[4px] bg-designColor transition-all duration-500 group-hover:w-full'></span>
                    </li>
                ))
            }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
