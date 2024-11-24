// src/components/ArtistLayout.tsx

import React from "react";
import Image from "next/image";

interface ArtistLayoutProps {
  name: string;
  biography: string;
  discography: string[];
  imageUrl: string; // Path to the artist's image
}

const ArtistLayout: React.FC<ArtistLayoutProps> = ({
  name,
  biography,
  discography,
  imageUrl,
}) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-12">
        <h1 className="text-5xl font-bold text-salsa mb-4">{name}</h1>
        {/* Artist Image */}
        <div className="mb-6">
          <Image
            src={imageUrl}
            alt={`${name} Image`}
            width={400}
            height={400}
            className="rounded-md shadow-md"
          />
        </div>
        {/* Biography */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-semibold text-salsa mb-3">Biography</h2>
          <p className="text-lg text-gray-700">{biography}</p>
        </div>
      </section>

      <section>
        {/* Discography */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-semibold text-salsa mb-3">
            Discography
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            {discography.map((album, index) => (
              <li key={index}>{album}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ArtistLayout;
