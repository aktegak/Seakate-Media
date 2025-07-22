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
      src: 'https://res.cloudinary.com/dbbtr8tl0/video/upload/v1753013988/what_is_on_the_horizon_jjb4en.mp4',
      thumbnail: 'https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177027/Thumbnail_What_s_on_the_Horizon_tyx10i.jpg',
      title: 'What Is On The Horizon?',
      description: 'An inspiring look ahead through the eyes of Hillsong College students.',
    },
    {
      type: 'video',
      src: 'https://res.cloudinary.com/dbbtr8tl0/video/upload/v1753013992/hillsong_college_questions_x5twmf.mp4',
      thumbnail: 'https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177027/Thumbnail_Most_googled_Question_about_Hillsong_College_vv3bsq.jpg',
      title: 'Most Googled Questions about Hillsong College',
      description: 'Students answer the internet’s most popular questions about college life.',
    },
    {
      type: 'video',
      src: 'https://res.cloudinary.com/dbbtr8tl0/video/upload/v1753013977/Step-into-Your-Calling-2024_ljysuz.mp4',
      thumbnail: 'https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177027/Thumbnail_Step_into_your_calling_ew7uvr.jpg',
      title: 'Step into Your Calling in 2024',
      description: 'A call to purpose and leadership at Hillsong College.',
    },
    {
      type: 'video',
      src: 'https://res.cloudinary.com/dbbtr8tl0/video/upload/v1753013975/Betania_Matthew_18_12_2021_1_Minute_Version_tjypgd.mp4',
      thumbnail: 'https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177027/Thumbnail_Betania_Matthew_xlyw4j.jpg',
      title: 'Betania & Matthew Wedding Highlight',
      description: 'A beautiful 1-minute wedding highlight full of joy and love.',
    },
    {
      type: 'video',
      src: 'https://res.cloudinary.com/dbbtr8tl0/video/upload/v1753176669/Bethany_Ward_Testimony_qm_j7BOV8f4_iannle.mp4',
      thumbnail: 'https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177026/Testimony_Video_Hillsong_College_puljjt.jpg',
      title: 'Bethany Ward Testimony',
      description: 'An emotional journey through faith, study, and transformation.',
    },
    {
      type: 'video',
      src: 'https://res.cloudinary.com/dbbtr8tl0/video/upload/v1753013948/CHElZ_Catering_pa7roq.mp4',
      thumbnail: 'https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177670/Thumbnail_Chelz_Catering_drwfkm.jpg',
      title: 'CHElZ Catering Promo',
      description: 'A quick promo for a local catering business.',
    },
    {
      type: 'video',
      src: 'https://res.cloudinary.com/dbbtr8tl0/video/upload/v1753013972/Paula_Andrew_Wedding_1_Minute_Version_vncspt.mp4',
      thumbnail: 'https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177027/Thumbnail_Paula_Andrew_zfqmjb.jpg',
      title: 'Paula & Andrew Wedding Highlight',
      description: 'A timeless 1-minute highlight capturing an unforgettable wedding day.',
    },
    {
      type: 'video',
      src: 'https://res.cloudinary.com/dbbtr8tl0/video/upload/v1753010172/hills-campus-tour_rjhxrc.mp4',
      thumbnail: 'https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177027/Thumbnail_Hills_Campus_Tour_q3ubin.jpg',
      title: 'Hills Campus Tour | Sydney, Australia',
      description: 'Explore Hillsong College through this guided campus tour.',
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
            {["HOME", "SERVICES", "ABOUT", "PROJECTS", "CONTACT"].map((label) => {
              const path = `/${label.toLowerCase() === 'home' ? '' : label.toLowerCase()}`;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`relative px-3 py-1 text-white font-semibold transition-all heading-font ${location.pathname === path ? 'text-[#04E4D8] scale-110' : 'hover:text-[#04E4D8] hover:scale-105'}`}
                >
                  {label}
                  {location.pathname === path && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-[2px] bg-[#04E4D8] rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="pt-36 pb-24 px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="relative">
                {playingVideo === `video-${index}` ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[400px] object-cover rounded-lg"
                    src={project.src}
                  />
                ) : (
                  <>
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-[400px] object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                    />
                    <button
                      onClick={() => setPlayingVideo(`video-${index}`)}
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all"
                    >
                      <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </>
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
