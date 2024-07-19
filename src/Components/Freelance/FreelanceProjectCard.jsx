import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './freelancerStyles.css';

const FreelanceProjectCard = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {modalOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-75 flex justify-center items-center"
          onClick={closeModal}
        >
          <div 
            className="max-w-full max-h-full overflow-auto rounded-2xl border-4 border-transparent animate-gradient-spin"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={project.image} alt={project.title} className="rounded-2xl" />
          </div>
        </div>
      )}
      <div className="relative bg-[#363636] rounded-2xl overflow-hidden border-4 border-transparent animate-gradient-spin h-[500px]">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-t-2xl cursor-pointer w-full h-1/2 object-cover"
          onClick={openModal}
        />
        <div className="p-4 text-[#CCCCCC] h-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-center">{project.title}</h2>
            <p className="text-md md:text-lg mb-4">{project.description}</p>
          </div>
          <div className="flex justify-around">
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-white"
            >
              <FaGithub className="mr-2" /> View Code
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-white"
            >
              <FaExternalLinkAlt className="mr-2" /> Web site
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreelanceProjectCard;
