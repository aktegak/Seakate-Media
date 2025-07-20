import React, { useState } from 'react';
import { CircleIcon, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from './footer';
import { useLocation } from 'react-router-dom';
import logoImage from './assets/Seakate Media logo.png';
import img1 from './assets/video/Screenshot (124).png';
import img2 from './assets/video/i.jpg';
import img4 from './assets/video/444.jpg';
import  img3  from './assets/video/333.jpg';

import img11 from './assets/video/Screenshot (124).png'
function Projects() {
  const location = useLocation();
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const projects = [
    {
      type: 'video',
      src: "https://player.cloudinary.com/embed/?cloud_name=di5zfjqlt&public_id=final%2Frbzoohknekzp0gmnfmtq&profile=cld-default",
      thumbnail: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1743482042/final/jybngdkvtbms0qh7xpts.jpg',
      title: 'Jonathan Klassen Testimony ',
      description: 'Hillsong College Testimony',
    },
    {
      type: 'video',
      src: "https://player.cloudinary.com/embed/?cloud_name=di5zfjqlt&public_id=final%2Frbzoohknekzp0gmnfmtq&profile=cld-default",
      thumbnail: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1743482124/final/ucj3fbdsghyzcfcj93qn.jpg',
      title: 'Hills Campus Tour | Sydney, Australia',
      description: 'A captivating tour of Hillsong College\'s Sydney campus.',
    },
    {
      type: 'video',
      src: "https://player.cloudinary.com/embed/?cloud_name=di5zfjqlt&public_id=final%2Frbzoohknekzp0gmnfmtq&profile=cld-default",
      thumbnail: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1743480131/final/b91djim3mi1zjdaycvkl.jpg',
      title: 'Flor And Matthiew',
      description: 'A student story that highlights the journey and experiences of Flor and Matthiew at Hillsong College.',
    },
    {
      type: 'video',
      src: "https://player.cloudinary.com/embed/?cloud_name=di5zfjqlt&public_id=final%2Frbzoohknekzp0gmnfmtq&profile=cld-default",
 
      title: 'Bethany Ward Testimony',
      description: 'A student story that highlights the journey and experiences of Bethany Ward at Hillsong College.',
      thumbnail:'https://res.cloudinary.com/di5zfjqlt/image/upload/v1743481485/final/cm3b1higtcggz1e11ruq.jpg' ,
    },
    {
      type: 'video',
      src: "https://player.cloudinary.com/embed/?cloud_name=di5zfjqlt&public_id=final%2Frbzoohknekzp0gmnfmtq&profile=cld-default",
      thumbnail: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1743480220/final/izvqeyr241hvquh5fftb.jpg',  
      title: 'Event Coverage',
      description: 'Professional event coverage and storytelling.',
    },
    {
      type: 'image',
      src: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1741394773/photo/jrzmqrsmc4rhr7kom8aw.jpg',
      title: 'Church Photography',
      description: 'Capturing the essence of church events and gatherings.',
    },
    {
      type: 'video',
      thumbnail:  img11,
      title: 'Joakim Pärlesköld | Student Stories | Hillsong College',
      src: "https://player.cloudinary.com/embed/?cloud_name=di5zfjqlt&public_id=final%2Frbzoohknekzp0gmnfmtq&profile=cld-default",
      description: 'Engaging social media content that drives engagement.',
    },
    {
      type: 'image',
      src: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1741642419/photo/cg5fcukvbegabsx9ypgl.jpg',
      title: 'Brand Identity',
      description: 'Comprehensive brand identity development and guidelines.',
    },
    
    {
      type: 'image',
      src: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1743480793/final/giiguimxhwalzqrsuwjk.jpg',
      title: 'Issac Pau Australia',
      description: 'A student story that highlights the journey and experiences of Issac Pau at Hillsong College.',
      
    },
   
    {
      type: 'image',
      src: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1741394773/photo/jrzmqrsmc4rhr7kom8aw.jpg',
      title: 'Product Photography',
      description: 'Premium product photography that elevates brand perception.',
    },
    
    {
      type: 'image',
      src: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1743482286/final/vpwrgdut4huvdrqj3xc8.png',
      title: 'Brand Identity',
      description: 'Comprehensive brand identity development and guidelines.',
    },
    
    {
      type: 'image',
      src: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1743480131/final/b91djim3mi1zjdaycvkl.jpg',
      title: 'Joakim Pärlesköld | Student Stories | Hillsong College',
      description: 'A student story that highlights the journey and experiences of Joakim Pärlesköld at Hillsong College.',
      
    }
    
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-playfair">
    <nav className="fixed w-full z-50 bg-gradient-to-r from-gray-900 to-gray-800 backdrop-blur-sm shadow-lg">
  <div className="container mx-auto px-8 flex items-center py-2">
    
    {/* Magnified Logo with Stylish Look */}
    <div className="h-28 w-28 rounded-full mr-4 shadow-xl flex-shrink-0">
      <Link to="/" className="h-full w-full flex items-center justify-center">
        <img 
          src={logoImage}
          alt="Seakate Media Logo"
          className="h-full w-full rounded-full object-cover"
        />
      </Link>
    </div>

    {/* Centered Navigation Links with Reduced Padding */}
    <div className="hidden md:flex mx-auto space-x-6 items-center heading-font">
      {[
        { path: "/", label: "HOME" },
        { path: "/services", label: "SERVICES" },
        { path: "/about", label: "ABOUT" },
        { path: "/projects", label: "PROJECTS" },
        { path: "/contact", label: "CONTACT" }
      ].map((link) => (
        <Link 
          key={link.path}
          to={link.path}
          className={`relative px-3 py-1 text-white font-semibold transition-all heading-font
            ${location.pathname === link.path ? 'text-[#04E4D8] scale-110' : 'hover:text-[#04E4D8] hover:scale-105'}`}
        >
          {link.label}
          {location.pathname === link.path && (
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-[2px] bg-[#04E4D8] rounded-full"></span>
          )}
        </Link>
      ))}
    </div>
  </div>
</nav>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>

      {/* Projects Grid */}
      <div className="px-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              {project.type === 'video' ? (
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
                        className="w-full h-[400px] object-cover rounded-lg group-hover:opacity-90 transition-opacity font-playfair "
                      />
                      <button
                        onClick={() => setPlayingVideo(`video-${index}`)}
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all font-playfair"
                      >
                        <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity font-playfair" />
                      </button>
                    </>
                  )}
                </div>
              ) : (
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-[400px] object-cover rounded-lg group-hover:opacity-90  Past transition-opacity"
                />
              )}
              <div className="mt-6">
                <h3 className="text-2xl font-light mb-2 text-teal font-playfair ">{project.title}</h3>
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
