import React from 'react'

const Stats = ({ logo, stats, total, percent, arrow }) => {
  return (
    <div className='stats'>
      <div className='stats-logo'>
        {logo}
      </div>
      <h1>{stats}</h1>
      <div className='stats-card'>
        <h6>{total}</h6> <span>{percent}% {arrow}</span>
      </div>
    </div>
  )
}

export default Stats