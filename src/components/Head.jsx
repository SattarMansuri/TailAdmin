import React, { useState } from 'react'
import { BiBell } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import user from '../assets/user.png'
import { IoIosArrowDown } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

const Head = () => {
  const [isDark, setIsDark] = useState(false)
  return (
    <div className='head-component'>
      <div className='head-input'>
        <CiSearch className='search' />
        <input type="text" placeholder='Type to search' />
      </div>
      <div style={{ display: 'flex', gap: '1vw', alignItems: 'center' }}>
        <div className='night-mode'>
          {
            !isDark ? <IoMdSunny onClick={() => setIsDark(true)} /> : <IoMoon style={{ marginLeft: '1.6vw' }} onClick={() => setIsDark(false)} />
          }
        </div>
        <div className='info'>
          <GoDotFill className='dot' />
          <BiBell />
        </div >
        <div className='info'>
          <GoDotFill className='dot' />
          <AiOutlineMessage />
        </div>
        <div className='user'>
          <div>
            <h6>Thomas Anree</h6>
            <span>Ux Designer</span>
          </div>
          <img src={user} alt="user-profile" />
          <IoIosArrowDown className='arrow' />
        </div>
      </div>
    </div>
  )
}

export default Head