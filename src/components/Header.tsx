// src/components/Header.tsx
"use client";

import Link from "next/link";
import { artists, Artist } from "../data/artists";
import { useState, useEffect, useRef } from "react";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <header className="bg-salsa text-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-accent">
          Salsa Icons
        </Link>
        <div className="flex items-center space-x-6 relative">
          <Link
            href="/summary"
            className="font-medium hover:text-accent-dark transition-colors duration-300"
          >
            Summary
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center font-medium hover:text-accent-dark transition-colors duration-300 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              Artists
              <svg
                className="ml-1 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-20">
                <ul className="py-1">
                  {artists.map((artist: Artist) => (
                    <li
                      key={artist.slug}
                      className="px-4 py-2 hover:bg-salsa-light"
                    >
                      <Link href={`/artists/${artist.slug}`} className="block">
                        {artist.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
