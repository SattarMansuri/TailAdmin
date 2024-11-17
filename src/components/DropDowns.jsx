import React, { useContext, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import FormContext from './Context';



const DropDowns = ({ headName, logo, subName }) => {
  const [arrow, setArrow] = useState(false)
  const { form, setform } = useContext(FormContext)
  return (
    <div>
      <div onClick={() => setArrow(!arrow)} className='drop-down'>
        <div className='drop-down-name'>
          {logo}
          <h4>{headName}</h4>
        </div>
        {!arrow ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </div>
      {arrow ?
        subName.map((elem) => (
          <div key={elem.id} className='sub-drop-down'>
            <h5 onClick={() => { elem.subName === 'Pro Form Layout' ? setform(true) : setform(false) }}>{elem.subName}</h5>
            {elem.pro && <span>{elem.pro}</span>}
          </div>
        )) : null
      }
    </div>
  )
}

export default DropDowns