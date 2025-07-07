import React from 'react';
import { Footer } from './footer';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logoImage from './assets/Seakate Media logo.png';
import img1 from './assets/1st/Screenshot (123).png';
import img2 from './assets/1st/cg5fcukvbegabsx9ypgl (1).jpg';
import img3 from './assets/1st/jrzmqrsmc4rhr7kom8aw.jpg';
import k from './assets/video/TW-LiveStreamingOverview.jpg'
import img4 from './assets/video/download.jpg'
function Services() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
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

      {/* Main Content */}
      <div className="pt-3 px-8 md:px-16">
        {/* Hero Section */}
       

        {/* Services Sections */}
         

        {/* Service Cards Section */}
        <section className="mt-32 max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl mb-8 heading-font text-[#04E4D8] text-center">
      
            Our Videography Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Social Media Content Packages",
                description: "Keep your feeds fresh, consistent, and engaging. We produce high quality short videos and photos delivered monthly to fuel your social media marketing.",
                image: img3
              },
              {
                title: "Live Streaming and Broadcast",
                description: "Seamless small-scale live stream setups for graduations, conferences, church services, or corporate events.",
                image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329"
              },
              {
                title: "Creative consultation",
                description: "Ideation sessions, .",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 text-[#04E4D8]">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-7 max-w-6xl mx-auto">
           
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Portrait",
                description: "Professional portraits that capture personality and essence, perfect for personal branding and corporate headshots.",
                image: img3
              },
              {
                title: "Events",
                description: "Comprehensive event coverage ensuring every important moment is captured with style and precision.",
                image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329"
              },
              {
                title: "Product",
                description: "Showcase your products with stunning photography that highlights every detail and feature.",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 text-[#04E4D8]">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-14 max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl mb-8 heading-font text-[#04E4D8] text-center">
            Our Photography Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Portrait",
                description: "Professional portraits that capture personality and essence, perfect for personal branding and corporate headshots.",
                image: img3
              },
              {
                title: "Events",
                description: "Comprehensive event coverage ensuring every important moment is captured with style and precision.",
                image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329"
              },
              {
                title: "Product",
                description: "Showcase your products with stunning photography that highlights every detail and feature.",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 text-[#04E4D8]">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-7 max-w-6xl mx-auto">
         
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Portrait",
                description: "Professional portraits that capture personality and essence, perfect for personal branding and corporate headshots.",
                image: img3
              },
              {
                title: "Events",
                description: "Comprehensive event coverage ensuring every important moment is captured with style and precision.",
                image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329"
              },
              {
                title: "Product",
                description: "Showcase your products with stunning photography that highlights every detail and feature.",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 text-[#04E4D8]">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Services;
