// Projects.tsx (Cloudinary Streaming Player with Toggle Playback)

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Footer } from './footer';
import logoImage from './assets/Seakate Media logo.png';

function Projects() {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const projects = [
    {
      src: 'https://player.cloudinary.com/embed/?cloud_name=dbbtr8tl0&public_id=Paula_Andrew_Wedding_1_Minute_Version_vncspt&fluid=true',
      thumbnail: 'https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177027/Thumbnail_Paula_Andrew_zfqmjb.jpg',
      title: 'Paula & Andrew Wedding Highlight',
      description: 'A 1-minute emotional wedding highlight with cinematic visuals.',
    },
    {
      src: 'https://player.cloudinary.com/embed/?cloud_name=dbbtr8tl0&public_id=what_is_on_the_horizon_jjb4en&fluid=true',
      thumbnail: 'https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177027/Thumbnail_What_s_on_the_Horizon_tyx10i.jpg',
      title: 'What’s on the Horizon?',
      description: 'An inspiring look into the future at Hillsong College.',
    },
    {
      src: 'https://player.cloudinary.com/embed/?cloud_name=dbbtr8tl0&public_id=hillsong_college_questions_x5twmf&fluid=true',
      thumbnail: 'https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177027/Thumbnail_Most_googled_Question_about_Hillsong_College_vv3bsq.jpg',
      title: 'Most Googled Questions about Hillsong College',
      description: 'We answer the internet’s most asked questions about Hillsong.',
    },
    {
      src: 'https://player.cloudinary.com/embed/?cloud_name=dbbtr8tl0&public_id=Step-into-Your-Calling-2024_ljysuz&fluid=true',
      thumbnail: 'https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177027/Thumbnail_Step_into_your_calling_ew7uvr.jpg',
      title: 'Step Into Your Calling 2024',
      description: 'A powerful invitation to discover purpose at Hillsong College.',
    },
    {
      src: 'https://player.cloudinary.com/embed/?cloud_name=dbbtr8tl0&public_id=Bethany_Ward_Testimony_qm_j7BOV8f4_iannle&fluid=true',
      thumbnail: 'https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177026/Testimony_Video_Hillsong_College_puljjt.jpg',
      title: 'Bethany Ward Testimony',
      description: 'A moving story of faith and transformation from Hillsong College.',
    },
    {
      src: 'https://player.cloudinary.com/embed/?cloud_name=dbbtr8tl0&public_id=CHElZ_Catering_pa7roq&fluid=true',
      thumbnail: 'https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177670/Thumbnail_Chelz_Catering_drwfkm.jpg',
      title: 'CHELZ Catering Promo',
      description: 'Quick overview of catering service. Note: lower resolution.',
    },
    {
      src: 'https://player.cloudinary.com/embed/?cloud_name=dbbtr8tl0&public_id=Betania_Matthew_18_12_2021_1_Minute_Version_tjypgd&fluid=true',
      thumbnail: 'https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177027/Thumbnail_Betania_Matthew_xlyw4j.jpg',
      title: 'Betania & Matthew Highlight',
      description: 'A beautiful glimpse into a special wedding moment.',
    },
    {
      src: 'https://player.cloudinary.com/embed/?cloud_name=dbbtr8tl0&public_id=hills-campus-tour_rjhxrc&fluid=true',
      thumbnail: 'https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177027/Thumbnail_Hills_Campus_Tour_q3ubin.jpg',
      title: 'Hills Campus Tour',
      description: 'Get a visual walkthrough of Hillsong’s beautiful campus.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-playfair">
      <nav className="fixed w-full z-50 bg-gradient-to-r from-gray-900 to-gray-800 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-8 flex items-center py-2">
          <div className="h-28 w-28 rounded-full mr-4 shadow-xl flex-shrink-0">
            <Link to="/" className="h-full w-full flex items-center justify-center">
              <img src={logoImage} alt="Seakate Media Logo" className="h-full w-full rounded-full object-cover" />
            </Link>
          </div>
          <div className="hidden md:flex mx-auto space-x-6 items-center heading-font">
            {["/", "/services", "/about", "/projects", "/contact"].map((path) => (
              <Link
                key={path}
                to={path}
                className={`relative px-3 py-1 font-semibold transition-all heading-font ${location.pathname === path ? 'text-[#04E4D8] scale-110' : 'hover:text-[#04E4D8] hover:scale-105'}`}
              >
                {path.replace('/', '').toUpperCase() || 'HOME'}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <br /><br /><br /><br /><br />

      <div className="px-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="relative">
                {activeIndex === index ? (
                  <iframe
                    title={project.title}
                    allow="autoplay; fullscreen; encrypted-media"
                    allowFullScreen
                    src={project.src}
                    className="w-full h-64 rounded-lg border border-gray-700"
                  />
                ) : (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="cursor-pointer w-full h-64 object-cover rounded-lg border border-gray-700"
                    onClick={() => setActiveIndex(index)}
                  />
                )}
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-light mb-2 text-teal font-playfair">{project.title}</h3>
                <p className="text-gray-400 font-montserrat font-playfair">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
