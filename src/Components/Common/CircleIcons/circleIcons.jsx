import React from 'react'

const CircleIcons = ({style,icon}) => {
  return (
    // <div className=''>
        <div className='w-10 h-10 bg-slate-300 rounded-full me-5  flex items-center justify-center'>
            <img className='' src={icon} alt="" />
        </div>
    // </div>
  )
}

export default CircleIcons