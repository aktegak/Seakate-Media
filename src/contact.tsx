import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Footer } from './footer';
import { Link, useLocation } from 'react-router-dom';
import logoImage from './assets/Seakate Media logo.png';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    testimonial: "Seakate Media transformed our brand narrative through exceptional videography. Their creative vision and professional execution exceeded our expectations."
  },
  {
    name: "Michael Chen",
    role: "Event Coordinator",
    company: "EventPro",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    testimonial: "The live streaming service provided by Seakate Media was flawless. They made our virtual event feel as engaging as an in-person experience."
  },
  {
    name: "Emily Rodriguez",
    role: "Creative Director",
    company: "Design Studio",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    testimonial: "Their photography work captures the essence of our products perfectly. The team's attention to detail and creativity is unmatched."
  }
];

function Contact() {
  const location = useLocation();

  return (
    <div className="bg-gray-900">
      {/* Navigation */}
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

      <br /><br /><br /><br />

      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden mb-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-6xl font-bold text-white mb-6 font-playfair">Get in Touch</h1>
            <p className="text-xl text-gray-200 font-montserrat">Let’s create something amazing together</p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          <h2 className="text-4xl font-bold text-[#04E4D8] mb-8 font-playfair text-center">Contact Information</h2>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-[#04E4D8] mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2 font-playfair">Visit Us</h3>
                <p className="text-gray-300 font-montserrat">
                  7 Durham Street,<br />
                  Mount Druitt, 2770, NSW
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-[#04E4D8] mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2 font-playfair">Call Us</h3>
                <p className="text-gray-300 font-montserrat">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-[#04E4D8] mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2 font-playfair">Email Us</h3>
                <p className="text-gray-300 font-montserrat">hello@seakatemedia.com</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 font-playfair">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#04E4D8] transition-colors">
                <Facebook className="w-8 h-8" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#04E4D8] transition-colors">
                <Twitter className="w-8 h-8" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#04E4D8] transition-colors">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#04E4D8] transition-colors">
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#04E4D8] mb-16 text-center font-playfair">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white font-playfair">{testimonial.name}</h3>
                    <p className="text-[#04E4D8] font-montserrat">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm font-montserrat">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic font-montserrat">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
