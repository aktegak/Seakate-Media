import React from 'react';
import { Menu } from 'lucide-react';

import services from './service';
import projects from './project';
import contact from './contact';
import About from './About';
import { Footer } from './footer';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logoImage from './assets/1st/seakate media logo 2.jpg';
import img1 from './assets/photo_1_2025-03-30_10-03-07.jpg';
import img2 from './assets/photo_2_2025-03-30_10-03-07.jpg';
import img3 from './assets/photo_3_2025-03-30_10-01-32.jpg'
import img4 from './assets/1st/jrzmqrsmc4rhr7kom8aw.jpg'
 // Import your logo image
function Home() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-900 text-white">

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
        { path: "/projects", label: "PROJECTS" },
        { path: "/services", label: "SERVICES" },
        { path: "/about", label: "ABOUT" },
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

      {/* Navigation */}



      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/di5zfjqlt/video/upload/v1746696643/final/o8lpirabvmik7kacssnf.mp4" type="video/mp4" />
             
          </video>
          <div className="absolute inset-0 bg-gray-900/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-semibold mb-6 heading-font">
              Connecting Stories,<br />
              <span className="heading-font" style={{ fontSize: '4.5rem' }}>Shaping Perspective</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
            We don’t just press “record” we craft stories. 

            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h3 className="text-5xl md:text-6xl mb-8 heading-font text-teal text-center">
        Why Should Anyone <br />Listen To You?
      </h3>
      <div className="text-xl text-gray-300 space-y-6">
        <p className="text-justify">
          At Seakate Media, we believe every moment and every brand has a narrative worth sharing. Our team combines years of professional experience in videography, photography, and storytelling to deliver visuals that captivate and connect. We've worked with educational institutions, churches, and clients from all walks of life, consistently turning their visions into powerful, engaging content. When you work with us, you're not just getting technical expertise—you're getting a dedicated partner who cares about your message, your audience, and your results.
        </p>
      </div>
    </div>
  </div>
</section>

 {/* Gradient fade edges */}
 <div className="relative bg-[#04E4D8] overflow-hidden">
  {/* Gradient fade edges */}
  <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#04E4D8] to-transparent z-10"></div>
  <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#04E4D8] to-transparent z-10"></div>

  <div className="animate-marquee flex whitespace-nowrap group-hover:[animation-play-state:paused] py-8">
    {[...Array(5)].map((_, i) => (
      <span 
        key={i}
        className="heading-font text-white text-4xl md:text-6xl font-semibold tracking-tight mx-12 inline-block transform transition-all duration-300 hover:scale-110"
      >
        Connecting stories and shaping perspective
      </span>
    ))}
  </div>
</div>


    
<section className="py-10 bg-gray-900">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Text Content - Now with precise alignment */}
      <div className="max-w-[540px] mx-auto md:mx-0 w-full">
        <h2 className="text-5xl md:text-6xl mb-8 heading-font">
          How Can We Help You?<br />
        </h2>
        <p className="text-xl text-gray-300 mb-8 text-justify">
          Whether you're a school looking to boost admissions with a powerful promotional video, 
          a nonprofit seeking to share an impactful testimonial, or an engaged couple wanting 
          every wedding detail captured flawlessly we've got you covered. We offer a range of 
          services designed to amplify your voice and capture your most meaningful moments.
        </p>
      </div>
      
      {/* Image - Maintained original styling */}
      <div className="max-w-[540px] mx-auto md:mx-0 w-full">
        <img 
          src={img4}
          alt="Personal Branding"
          className="w-full rounded-lg shadow-xl"
        />
      </div>
    </div>
  </div>
</section>
    

      
     

      {/* Past Projects Section */}
      <section className="py-10 bg-gray-900">
  <div className="container mx-auto px-4">
    <h2 className="text-[#04E4D8] text-xl font-semibold mb-6"></h2>
    <h3 className="text-5xl md:text-6xl mb-16 heading-font text-teal">
      Past Projects We've worked on<br />
      <span className="heading-font italic"></span>
    </h3>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="group">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img 
            src={img1}
            alt="Project 1"
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-[#04E4D8]/0 group-hover:bg-[#04E4D8]/20 transition-colors duration-300"></div>
        </div>
        <h4 className="text-2xl mb-2 heading-font">Healthy Step Into Your Calling: Hillsong College</h4>
        
      </div>
      
      <div className="group">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img 
            src={img2}
            alt="Project 2"
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-[#04E4D8]/0 group-hover:bg-[#04E4D8]/20 transition-colors duration-300"></div>
        </div>
        <h4 className="text-2xl mb-2 heading-font">Ofesa Lavia  </h4>
     
      </div>
      
      <div className="group">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img 
            src={img3}
            alt="Project 3"
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-[#04E4D8]/0 group-hover:bg-[#04E4D8]/20 transition-colors duration-300"></div>
        </div>
        <h4 className="text-2xl mb-2 heading-font">Elohim Malauka  </h4>
 
      </div>
    </div>
  </div>
</section>

      {/* Photo & Video Section */}
<section className="py-10 bg-gray-900">
  <div className="container mx-auto px-4">
  <div className="max-w-4xl mx-auto px-4">
  <h2 className="text-5xl md:text-6xl mb-8 heading-font text-center">
    What Sets Us Apart:
  </h2>

  <p className="text-xl text-gray-300 text-justify leading-relaxed">
    <span className="font-semibold">Expertise & Creativity:</span> From small-scale live streams to cinematic short films, our diverse skill set brings fresh ideas and professional execution. 
    <span className="font-semibold"> Authentic Storytelling:</span> We focus on the heart of your story, ensuring your unique message resonates with viewers. 
    <span className="font-semibold"> Proven Track Record:</span> Having served numerous organizations and individuals—from colleges to couples on their big day—we know how to deliver on-time, on-budget, and above expectations. 
    <span className="font-semibold"> Genuine Partnership:</span> We collaborate closely with you from concept to final cut, making your vision our priority.
  </p>
</div>

  </div>
</section>

      <Footer />
    </div>
  );
}

export default Home;
