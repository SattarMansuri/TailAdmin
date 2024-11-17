import React from 'react'

const Options = ({ logo, headName, pro }) => {
  return (
    <div className='drop-down'>
      <div className='drop-down-name'>
        {logo}
        <h4>{headName}</h4>
      </div>
      {
        pro && <div className='sub-drop-down'>
          {
            pro.map((elem) => (
              <span key={elem.id}>{elem.pro}</span>
            ))
          }
        </div>
      }
    </div>
  )
}

export default Options