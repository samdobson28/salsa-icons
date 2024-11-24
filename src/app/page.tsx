// src/app/page.tsx
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold text-salsa mb-4">
          Welcome to Salsa Icons
        </h1>
        <p className="text-xl text-gray-700">
          Explore the journeys of iconic female artists and their triumphs over
          cultural and structural obstacles.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-salsa mb-6">Album Covers</h2>
        <div className="overflow-x-auto">
          <div className="flex space-x-6">
            {/* Placeholder Album Covers */}
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="flex-shrink-0 w-48 h-48 bg-accent-light rounded-md shadow-md flex items-center justify-center text-white text-lg font-semibold"
              >
                Album {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
