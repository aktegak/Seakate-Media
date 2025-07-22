// Projects.tsx (Optimized with Cloudinary video player and custom order)

import React, { useState } from 'react';
import { PlayCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Footer } from './footer';
import logoImage from './assets/Seakate Media logo.png';

function Projects() {
  const location = useLocation();
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const projects = [
    {
      type: 'video',
      src: 'https://res.cloudinary.com/dbbtr8tl0/video/upload/v1753013972/Paula_Andrew_Wedding_1_Minute_Version_vncspt.mp4',
      thumbnail: 'https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177027/Thumbnail_Paula_Andrew_zfqmjb.jpg',
      title: 'Paula & Andrew Wedding Highlight',
      description: 'A 1-minute emotional wedding highlight with cinematic visuals.',
    },
    {
      type: 'video',
      src: 'https://res.cloudinary.com/dbbtr8tl0/video/upload/v1753013988/what_is_on_the_horizon_jjb4en.mp4',
      thumbnail: 'https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177027/Thumbnail_What_s_on_the_Horizon_tyx10i.jpg',
      title: 'What’s on the Horizon?',
      description: 'An inspiring look into the future at Hillsong College.',
    },
    {
      type: 'video',
      src: 'https://res.cloudinary.com/dbbtr8tl0/video/upload/v1753013992/hillsong_college_questions_x5twmf.mp4',
      thumbnail: 'https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177027/Thumbnail_Most_googled_Question_about_Hillsong_College_vv3bsq.jpg',
      title: 'Most Googled Questions about Hillsong College',
      description: 'We answer the internet’s most asked questions about Hillsong.',
    },
    {
      type: 'video',
      src: 'https://res.cloudinary.com/dbbtr8tl0/video/upload/v1753013977/Step-into-Your-Calling-2024_ljysuz.mp4',
      thumbnail: 'https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177027/Thumbnail_Step_into_your_calling_ew7uvr.jpg',
      title: 'Step Into Your Calling 2024',
      description: 'A powerful invitation to discover purpose at Hillsong College.',
    },
    {
      type: 'video',
      src: 'https://res.cloudinary.com/dbbtr8tl0/video/upload/v1753176669/Bethany_Ward_Testimony_qm_j7BOV8f4_iannle.mp4',
      thumbnail: 'https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177026/Testimony_Video_Hillsong_College_puljjt.jpg',
      title: 'Bethany Ward Testimony',
      description: 'A moving story of faith and transformation from Hillsong College.',
    },
    {
      type: 'video',
      src: 'https://res.cloudinary.com/dbbtr8tl0/video/upload/v1753013948/CHElZ_Catering_pa7roq.mp4',
      thumbnail: 'https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177670/Thumbnail_Chelz_Catering_drwfkm.jpg',
      title: 'CHELZ Catering Promo',
      description: 'Quick overview of catering service. Note: lower resolution.',
    },
    {
      type: 'video',
      src: 'https://res.cloudinary.com/dbbtr8tl0/video/upload/v1753013975/Betania_Matthew_18_12_2021_1_Minute_Version_tjypgd.mp4',
      thumbnail: 'https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177027/Thumbnail_Betania_Matthew_xlyw4j.jpg',
      title: 'Betania & Matthew Highlight',
      description: 'A beautiful glimpse into a special wedding moment.',
    },
    {
      type: 'video',
      src: 'https://res.cloudinary.com/dbbtr8tl0/video/upload/v1753010172/hills-campus-tour_rjhxrc.mp4',
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
            {["/", "/services", "/about", "/projects", "/contact"].map((path, i) => (
              <Link key={path} to={path} className={`relative px-3 py-1 font-semibold transition-all heading-font ${location.pathname === path ? 'text-[#04E4D8] scale-110' : 'hover:text-[#04E4D8] hover:scale-105'}`}>{path.replace('/', '').toUpperCase() || 'HOME'}</Link>
            ))}
          </div>
        </div>
      </nav>
      <br/><br/><br/><br/><br/>

      <div className="px-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="relative">
                <video
                  poster={project.thumbnail}
                  controls
                  preload="none"
                  className="w-full h-[400px] object-cover rounded-lg"
                >
                  <source src={project.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
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
