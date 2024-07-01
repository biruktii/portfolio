import React from 'react'
import Card from './Card'
import proj1 from '../assets/proj1.png'
import proj6 from '../assets/proj6.png'
import proj3 from '../assets/proj3.png'
import proj4 from '../assets/proj4.png'

const projects = [
  {
    title: 'Project #1',
    description: 'Lorem empsum dolor sit amet, consecutede adiscipting elit. ut enim ad minium veniam wuia nostrum ecercide jfiuvfju.',
    image: proj1
  },
  {
    title: 'Project #2',
    description: 'Lorem empsum dolor sit amet, consecutede adiscipting elit. ut enim ad minium veniam wuia nostrum ecercide jfiuvfju.',
    image: proj6
  },
  {
    title: 'Project #3',
    description: 'Lorem empsum dolor sit amet, consecutede adiscipting elit. ut enim ad minium veniam wuia nostrum ecercide jfiuvfju.',
    image: proj3
  },
  {
    title: 'Project #4',
    description: 'Lorem empsum dolor sit amet, consecutede adiscipting elit. ut enim ad minium veniam wuia nostrum ecercide jfiuvfju.',
    image: proj4
  }
];

const Portfolio = () => {
  return (
    <div className='pt-16 pb-10 sm:pb-16 lg:pb-16 md:h-[92vh]'>
      <div className="px-7 mx-auto grid sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </div>
  );
}


export default Portfolio
