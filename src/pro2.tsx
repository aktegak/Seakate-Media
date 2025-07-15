import React, { useState } from 'react';
import { CircleIcon, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from './footer';
import { useLocation } from 'react-router-dom';
import logoImage from './assets/photo_1_2025-03-30_10-00-28.jpg'; // Import your logo image
import img1 from './assets/video/Screenshot (124).png';
import img2 from './assets/video/i.jpg';
import img4 from './assets/video/444.jpg';
import  img3  from './assets/video/333.jpg';
import video1 from './assets/video/Bethany Ward Testimony.mp4';
function Projects() {
  const location = useLocation();
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const projects = [
    {
      type: 'video',
      src: {video1},
 
      title: 'Bethany Ward Testimony',
      description: 'A student story that highlights the journey and experiences of Bethany Ward at Hillsong College.',
      // thumbnail:'https://res.cloudinary.com/di5zfjqlt/image/upload/v1743481485/final/cm3b1higtcggz1e11ruq.jpg' ,
    },
    {
      type: 'image',
      src: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1741394773/photo/jrzmqrsmc4rhr7kom8aw.jpg',
      title: 'Church Photography',
      description: 'Capturing the essence of church events and gatherings.',
    },
    {
      type: 'video',
      thumbnail:  'https://res.cloudinary.com/di5zfjqlt/image/upload/v1743480131/final/b91djim3mi1zjdaycvkl.jpg',
      title: 'Joakim Pärlesköld | Student Stories | Hillsong College',
      src: 'https://res.cloudinary.com/di5zfjqlt/video/upload/v1743481026/final/lum8mgx5hozxmla6lquq.mp4',
      description: 'Engaging social media content that drives engagement.',
    },
    {
      type: 'image',
      src: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1741642419/photo/cg5fcukvbegabsx9ypgl.jpg',
      title: 'Brand Identity',
      description: 'Comprehensive brand identity development and guidelines.',
    },
    {
      type: 'video',
      src: 'https://res.cloudinary.com/di5zfjqlt/video/upload/v1743306898/photo/xzxtpj8wcbkmazrl2a5e.mp4',
      thumbnail: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1743480689/final/dd5rssyfpexhb7yv3uo0.png',
      title: 'Flor And Matthiew',
      description: 'A student story that highlights the journey and experiences of Flor and Matthiew at Hillsong College.',
    },
    {
      type: 'image',
      src: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1743480793/final/giiguimxhwalzqrsuwjk.jpg',
      title: 'Issac Pau Australia',
      description: 'A student story that highlights the journey and experiences of Issac Pau at Hillsong College.',
      
    },
    {
      type: 'video',
      src: 'https://res.cloudinary.com/di5zfjqlt/video/upload/v1743478845/final/rtikmntvfbyk7j99rer6.mp4',
      thumbnail: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1743482042/final/jybngdkvtbms0qh7xpts.jpg',
      title: 'Jonathan Klassen Testimony ',
      description: 'Hillsong College Testimony',
    },
    {
      type: 'image',
      src: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1741394773/photo/jrzmqrsmc4rhr7kom8aw.jpg',
      title: 'Product Photography',
      description: 'Premium product photography that elevates brand perception.',
    },
    {
      type: 'video',
      src: 'https://res.cloudinary.com/di5zfjqlt/video/upload/v1743306880/photo/kl93gt3qqzriit1hnnq8.mp4',
      thumbnail: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1743482124/final/ucj3fbdsghyzcfcj93qn.jpg',
      title: 'Hills Campus Tour | Sydney, Australia',
      description: 'A captivating tour of Hillsong College\'s Sydney campus.',
    },
    {
      type: 'image',
      src: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1743482286/final/vpwrgdut4huvdrqj3xc8.png',
      title: 'Brand Identity',
      description: 'Comprehensive brand identity development and guidelines.',
    },
    {
      type: 'video',
      src: 'https://res.cloudinary.com/di5zfjqlt/video/upload/v1743480457/final/m42kfvqyfzwvnhclzfx6.mp4',
      thumbnail: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1743480220/final/izvqeyr241hvquh5fftb.jpg',  
      title: 'Event Coverage',
      description: 'Professional event coverage and storytelling.',
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
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm">
      <div className="container mx-auto px-8 py-3 flex items-center">
        {/* Circular Logo on Left (Fixed) */}
        <div className="h-16 w-16 rounded-full bg-white p-1 mr-4 flex-shrink-0"> {/* Circular container with white bg */}
          <Link to="/" className="h-full w-full flex items-center justify-center">
            <img 
              src={logoImage}
              alt="KYU MEDIA Logo"
              className="h-full w-full rounded-full object-cover" // Makes image circular
            />
          </Link>
        </div>

        {/* Centered Navigation Links */}
        <div className="hidden md:flex mx-auto space-x-8 items-center">
          <Link 
            to="/" 
            className={`relative px-2 py-1 text-white hover:text-[#04E4D8] transition-colors font-playfair ${location.pathname === '/' ? 'text-[#04E4D8]' : ''}`}
          >
            HOME
            {location.pathname === '/' && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-[#04E4D8] rounded-full"></span>
            )}
          </Link>
          <Link 
            to="/services" 
            className={`relative px-2 py-1 text-white hover:text-[#04E4D8] transition-colors font-playfair ${location.pathname === '/services' ? 'text-[#04E4D8]' : ''}`}
          >
            SERVICES
            {location.pathname === '/services' && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-[#04E4D8] rounded-full"></span>
            )}
          </Link>
          <Link 
            to="/about" 
            className={`relative px-2 py-1 text-white hover:text-[#04E4D8] transition-colors font-playfair ${location.pathname === '/about' ? 'text-[#04E4D8]' : ''}`}
          >
            ABOUT
            {location.pathname === '/about' && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-[#04E4D8] rounded-full"></span>
            )}
          </Link>
          <Link 
            to="/projects" 
            className={`relative px-2 py-1 text-white hover:text-[#04E4D8] transition-colors font-playfair ${location.pathname === '/projects' ? 'text-[#04E4D8]' : ''}`}
          >
            PROJECTS
            {location.pathname === '/projects' && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-[#04E4D8] rounded-full"></span>
            )}
          </Link>
          <Link 
            to="/contact" 
            className={`relative px-2 py-1 text-white hover:text-[#04E4D8] transition-colors font-playfair ${location.pathname === '/contact' ? 'text-[#04E4D8]' : ''}`}
          >
            CONTACT
            {location.pathname === '/contact' && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-[#04E4D8] rounded-full"></span>
            )}
          </Link>
        </div>
      </div>
    </nav>

      {/* Projects Header */}
      <div className="px-16 pt-32 pb-20">
        <div className="flex items-center gap-2">
         
      
        </div>
        
        <h1 className="text-[#04E4D8] text-7xl font-light mt-8 mb-6">Our Projects</h1>
        
        <div className="max-w-2xl space-y-6 text-xl text-gray-300 font-montserrat">
          <p>A showcase of our finest work across various industries and mediums.</p>
          <p>Each project represents our commitment to excellence and innovation.</p>
        </div>
      </div>

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
              ) : (
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-[400px] object-cover rounded-lg group-hover:opacity-90  Past transition-opacity"
                />
              )}
              <div className="mt-6">
                <h3 className="text-2xl font-light mb-2 text-teal ">{project.title}</h3>
                <p className="text-gray-400 font-montserrat">{project.description}</p>
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