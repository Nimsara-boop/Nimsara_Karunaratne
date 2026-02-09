import React from 'react'
import mypic from '../assets/startpic.png'

function Head() {
  return (
    <div className=" text-gray-400 flex flex-row w-screen h-screen ">
        <img src={mypic} alt="My Picture" className='h-full w-1/2 object-cover' />
        <div className="bg-black flex-1 ">
            <h1 className='text-9xl font-bold px-6 py-3'>Nimsara</h1>
            <hr className="border-gray-400 mx-6 pb-1"/>
            <h1 className='text-7xl font-bold pl-50 pb-3 '>Karunaratne</h1>
            <div className=" text-gray-500 py-4 font-light text-4xl ">
                <ul className='py-3 px-6'>
                    <button className="hover:text-gray-300" >About Me</button>
                    <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2
    hidden group-hover:block
    bg-black text-white text-sm px-3 py-1 rounded
    whitespace-nowrap">labi labi labi</span>
                </ul>
                <ul className='py-3 px-6'>
                    <button className="hover:text-gray-300">Skills</button>
                </ul>
                <ul className='py-3 px-6'>
                    <button className="hover:text-gray-300">Projects</button>
                </ul>
                <ul className='py-3 px-6'>
                    <button className="hover:text-gray-300">Experience</button>
                </ul>       
                <ul className='py-3 px-6'>
                     <button className="hover:text-gray-300">Contact</button>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Head