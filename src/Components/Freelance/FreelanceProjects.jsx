import React from 'react';
import FreelanceProjectCard from './FreelanceProjectCard';
import agriculturaImg from '../../assets/agricultura.jpg';
import quetzalcoatImg from '../../assets/quetzalcoat.jpg';

const projects = [
  {
    image: agriculturaImg,
    title: 'Agricultura Especializada',
    description: 'I designed, developed, and deployed this page together with a group of developers with the aim of making this company dedicated to agriculture boost its sales in a short time.',
    repoLink: 'https://github.com/ChissgaN/srplantas.git',
    liveLink: 'https://agriculturaespecializada.com/',
  },
  {
    image: quetzalcoatImg,
    title: 'Quetzalcoat',
    description: 'I designed, developed, and deployed this website alone, managing to meet the expectation and need of this company achieving digital presence in the market with results in a short time.',
    repoLink: 'https://github.com/ChissgaN/quetzalcoat.git',
    liveLink: 'https://centrodepinturasquetzalcoat.com/',
  },
];

const FreelanceProjects = () => {
  return (
    <div id="freelance-projects" className="py-12 bg-[#191919]">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-[#CCCCCC]">Freelance Projects</h1>
        <p className="text-[#A7A7A7] text-2xl mt-4">Some of my freelance work</p>
      </div>
      <div className="max-w-4xl mx-auto grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-4">
        {projects.map((project, index) => (
          <FreelanceProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default FreelanceProjects;
