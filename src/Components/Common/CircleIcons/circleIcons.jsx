import React from 'react'

const CircleIcons = ({style,icon}) => {
  return (
    // <div className=''>
        <div className='w-10 h-10 sidebar-icon bg-[--light-color] rounded-full me-5  flex items-center justify-center'>
            <img className='' src={icon} alt="" />
        </div>
    // </div>
  )
}

export default CircleIcons