import React from 'react'
import proj1 from '../assets/proj1.png'
import proj6 from '../assets/proj6.png'
import proj3 from '../assets/proj3.png'
import proj4 from '../assets/proj4.png'
import { AiFillGithub, AiFillChrome } from 'react-icons/ai'

const Portfolio = () => {
  return (
    <div className='pt-16 pb-10 sm:pb-16 lg:pb-16 md:h-[92vh]'>
    <div className="px-7 mx-auto grid sm:grid-cols-2 gap-6">
      
      <div className="mb-4 flex flex-col sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5">
      <a href='/' className='group h-48 col-span-3 md:h-80'>
      <img src={proj1} alt="" className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg'/>
      </a>
      <div className="flex flex-col col-span-4 p-4 mx-auto my-auto">
        <h2 className="text-gray-200 font-bold text-xl leading-10">
            Project #1
        </h2>
        <p className="text-gray-400">
            Lorem empsum dolor sit amet, consecutede adiscipting elit. ut enim ad minium veniam wuia nostrum ecercide jfiuvfju.
        </p>
      </div>
      <div className="flex flex-row justify-between text-white gap-4 mx-auto pb-4">
        <AiFillGithub className='w-[55px] h-auto'/>
        <AiFillChrome className='w-[55px] h-auto'/>
      </div>
      </div>

      <div className="mb-4 flex flex-col sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5">
      <a href='/' className='group h-48 col-span-3 md:h-80'>
      <img src={proj6} alt="" className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg'/>
      </a>
      <div className="flex flex-col col-span-4 p-4 mx-auto my-auto">
        <h2 className="text-gray-200 font-bold text-xl leading-10">
            Project #2
        </h2>
        <p className="text-gray-400">
            Lorem empsum dolor sit amet, consecutede adiscipting elit. ut enim ad minium veniam wuia nostrum ecercide jfiuvfju.
        </p>
      </div>
      <div className="flex flex-row justify-between text-white gap-4 mx-auto pb-4">
        <AiFillGithub className='w-[55px] h-auto'/>
        <AiFillChrome className='w-[55px] h-auto'/>
      </div>
      </div>

      <div className="mb-4 flex flex-col sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5">
      <a href='/' className='group h-48 col-span-3 md:h-80'>
      <img src={proj3} alt="" className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg'/>
      </a>
      <div className="flex flex-col col-span-4 p-4 mx-auto my-auto">
        <h2 className="text-gray-200 font-bold text-xl leading-10">
            Project #3
        </h2>
        <p className="text-gray-400">
            Lorem empsum dolor sit amet, consecutede adiscipting elit. ut enim ad minium veniam wuia nostrum ecercide jfiuvfju.
        </p>
      </div>
      <div className="flex flex-row justify-between text-white gap-4 mx-auto pb-4">
        <AiFillGithub className='w-[55px] h-auto'/>
        <AiFillChrome className='w-[55px] h-auto'/>
      </div>
      </div>

      <div className="mb-4 flex flex-col sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5">
      <a href='/' className='group h-48 col-span-3 md:h-80'>
      <img src={proj4} alt="" className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg'/>
      </a>
      <div className="flex flex-col col-span-4 p-4 mx-auto my-auto">
        <h2 className="text-gray-200 font-bold text-xl leading-10">
            Project #4
        </h2>
        <p className="text-gray-400">
            Lorem empsum dolor sit amet, consecutede adiscipting elit. ut enim ad minium veniam wuia nostrum ecercide jfiuvfju.
        </p>
      </div>
      <div className="flex flex-row justify-between text-white gap-4 mx-auto pb-4">
        <AiFillGithub className='w-[55px] h-auto'/>
        <AiFillChrome className='w-[55px] h-auto'/>
      </div>
      </div>
    </div>
      
    </div>
  )
}

export default Portfolio
