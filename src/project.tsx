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
      src: "https://player.cloudinary.com/embed/?cloud_name=di5zfjqlt&public_id=final%2Frbzoohknekzp0gmnfmtq&profile=cld-default",
      thumbnail: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1743482042/final/jybngdkvtbms0qh7xpts.jpg',
      title: 'Jonathan Klassen Testimony',
      description: 'Hillsong College Testimony',
    },
    {
      type: 'video',
      src: "https://player.cloudinary.com/embed/?cloud_name=di5zfjqlt&public_id=final%2Frbzoohknekzp0gmnfmtq&profile=cld-default",
      thumbnail: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1743482124/final/ucj3fbdsghyzcfcj93qn.jpg',
      title: 'Hills Campus Tour | Sydney, Australia',
      description: "A captivating tour of Hillsong College's Sydney campus.",
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
      thumbnail: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1743481485/final/cm3b1higtcggz1e11ruq.jpg',
      title: 'Bethany Ward Testimony',
      description: 'A student story that highlights the journey and experiences of Bethany Ward at Hillsong College.',
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
      src: "https://player.cloudinary.com/embed/?cloud_name=di5zfjqlt&public_id=final%2Frbzoohknekzp0gmnfmtq&profile=cld-default",
      thumbnail: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1743480131/final/b91djim3mi1zjdaycvkl.jpg',
      title: 'Joakim Pärlesköld | Student Stories',
      description: 'Engaging social media content that drives connection.',
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
      title: 'Brand Identity – Motion Package',
      description: 'Design system and identity rollout with motion support.',
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-playfair">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-gradient-to-r from-gray-900 to-gray-800 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-8 flex items-center py-2">
          <div className="h-28 w-28 rounded-full mr-4 shadow-xl flex-shrink-0">
            <Link to="/" className="h-full w-full flex items-center justify-center">
              <img 
                src={logoImage}
                alt="Seakate Media Logo"
                className="h-full w-full rounded-full object-cover"
              />
            </Link>
          </div>

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

      {/* Spacer */}
      <div className="pt-40" />

      {/* Intro */}
      <div className="text-center py-12 px-4">
        <h1 className="text-5xl font-bold text-[#04E4D8] mb-4 font-playfair">Our Projects</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto font-montserrat">
          From powerful testimonies to cinematic event coverage, here’s a showcase of the stories we’ve told and moments we’ve captured for brands, communities, and world-class events.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="px-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              {project.type === 'video' ? (
                <div className="relative">
                  <div className="w-full h-[400px]">
                    <iframe
                      title={project.title}
                      src={project.src}
                      className="w-full h-full rounded-lg"
                      allow="autoplay; fullscreen; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ) : (
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-[400px] object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                />
              )}
              <div className="mt-6">
                <h3 className="text-2xl font-light mb-2 text-teal font-playfair">{project.title}</h3>
                <p className="text-gray-400 font-montserrat">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-16">
        <h2 className="text-4xl font-bold text-white mb-6 font-playfair">Have a project in mind?</h2>
        <Link
          to="/contact"
          className="inline-block px-8 py-4 bg-[#04E4D8] text-gray-900 rounded-lg font-bold hover:bg-[#04E4D8]/80 transition-colors font-playfair"
        >
          Let’s Talk
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Projects;
