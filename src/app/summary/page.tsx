// src/app/summary/page.tsx
import React from "react";

const Summary: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-12">
        <h1 className="text-5xl font-bold text-salsa mb-6">Summary</h1>
        <p className="text-lg text-gray-700">
          This website explores the cultural and structural obstacles faced by
          renowned female artists. By delving into their stories, we aim to
          understand how these challenges have evolved and what has enabled
          these artists to break through and continue to thrive today.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-salsa mb-4">
          Evolution of Obstacles
        </h2>
        <p className="text-lg text-gray-700">
          Over the years, the barriers for female artists have transformed,
          influenced by societal changes, industry dynamics, and personal
          resilience. This section examines these shifts and their impact on the
          careers of our featured artists.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-salsa mb-4">
          Rooted Path for Modern Artists
        </h2>
        <p className="text-lg text-gray-700">
          Drawing inspiration from the Ceiba tree, a symbol of strength and
          endurance, we highlight how the foundational paths laid by pioneering
          artists have paved the way for contemporary musicians. This metaphor
          underscores the enduring legacy and ongoing challenges in the
          industry.
        </p>
      </section>
    </div>
  );
};

export default Summary;
