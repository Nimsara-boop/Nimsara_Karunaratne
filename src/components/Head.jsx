import React from 'react'
import mypic from '../assets/startpic.png'

function Head() {
  return (
    <div className=" text-gray-500 flex flex-row w-screen h-screen ">
        <img src={mypic} alt="My Picture" className='h-full w-1/2 object-cover' />
        <div className="bg-black flex-1 ">
            <h1 className='text-9xl font-bold'>Nimsara</h1>
            <h1 className='text-7xl font-bold '>Karunaratne</h1>
            <div className=" text-gray-500">
                <ul>
                    About Me
                </ul>
                <ul>
                    Skills
                </ul>
                <ul>
                    Projects
                </ul>
                <ul>
                    Experience
                </ul>       
                <ul>
                    Contact
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Head