import React from 'react'

const Experience = ({projectName, startingTime, endingTime, picture}) => {
  return (
    <div className='border-[#1E2D3D] hover:scale-[1.1] scale-[1] transition-all rounded-t-lg border-[1px]'>
       
            <img src={picture} className='rounded-t-lg' alt="" />
        <div className='p-3'>
            <h1>{projectName}</h1>
            <p>{`from ${startingTime} to ${endingTime}`}</p>
        </div>
    </div>
  )
}

export default Experience