import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-[#04E4D8] font-bold text-xl mb-4">Seakate Media</h3>
            <p className="text-gray-400">
              Weave stories, shape emotions, and move hearts.
            </p>
          </div>
          <div>
            <h4 className="text-[#04E4D8] font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Video Production</li>
              <li>Photography</li>
              <li>Live Streaming</li>
              <li>Creative Consultation</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#04E4D8] font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>hello@sekeatmedia.com</li>
              
              <li>Address: 7 Durham Street</li>
              <li>Mount Druitt, 2770 , NSW</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#04E4D8] font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
  <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
    <Facebook className="w-6 h-6 text-gray-400 hover:text-[#04E4D8] cursor-pointer transition-colors" />
  </a>
  <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
    <Twitter className="w-6 h-6 text-gray-400 hover:text-[#04E4D8] cursor-pointer transition-colors" />
  </a>
  <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
    <Instagram className="w-6 h-6 text-gray-400 hover:text-[#04E4D8] cursor-pointer transition-colors" />
  </a>
  <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
    <Linkedin className="w-6 h-6 text-gray-400 hover:text-[#04E4D8] cursor-pointer transition-colors" />
  </a>
  <a href="mailto:your@email.com">
    <Mail className="w-6 h-6 text-gray-400 hover:text-[#04E4D8] cursor-pointer transition-colors" />
  </a>
</div>

          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sekeat Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}