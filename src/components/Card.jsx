import React from 'react';
import { AiFillGithub, AiFillChrome } from 'react-icons/ai';

const Card = ({ project }) => {
  return (
    <div className="mb-4 flex flex-col sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5">
      <a href='/' className='group h-48 col-span-3 md:h-80'>
        <img src={project.image} alt="" className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg'/>
      </a>
      <div className="flex flex-col col-span-4 p-4 mx-auto my-auto">
        <h2 className="text-gray-200 font-bold text-xl leading-10">
          {project.title}
        </h2>
        <p className="text-gray-400">
          {project.description}
        </p>
      </div>
      <div className="flex flex-row justify-between text-white gap-4 mx-auto pb-4">
        <AiFillGithub className='w-[55px] h-auto'/>
        <AiFillChrome className='w-[55px] h-auto'/>
      </div>
    </div>
  );
}

export default Card;
