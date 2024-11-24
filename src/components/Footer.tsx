// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-salsa text-white">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Salsa Icons. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          {/* Placeholder for social media links */}
          <a
            href="#"
            className="hover:text-accent-dark transition-colors duration-300"
          >
            Facebook
          </a>
          <a
            href="#"
            className="hover:text-accent-dark transition-colors duration-300"
          >
            Twitter
          </a>
          <a
            href="#"
            className="hover:text-accent-dark transition-colors duration-300"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
