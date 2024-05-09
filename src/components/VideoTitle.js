import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-[4%] absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold w-2/4'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className=''>
        <button className='bg-gray-500 p-3 w-15 mx-2 px-16 text-lg text-white bg-opacity-75 rounded-lg '>Play</button>
              <button className='bg-gray-500 p-3 w-15 mx-2 px-16 text-lg text-white bg-opacity-75 rounded-lg '>More info</button>

      </div>
    </div>
  )
}

export default VideoTitle
