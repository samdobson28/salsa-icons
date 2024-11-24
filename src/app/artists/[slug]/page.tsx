// src/app/artists/[slug]/page.tsx
import { notFound } from "next/navigation";
import { artists, Artist } from "../../../data/artists";

interface ArtistPageProps {
  params: {
    slug: string;
  };
}

export default function ArtistPage({ params }: ArtistPageProps) {
  const artist: Artist | undefined = artists.find(
    (a) => a.slug === params.slug
  );

  if (!artist) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-12">
        <h1 className="text-5xl font-bold text-salsa mb-4">{artist.name}</h1>
        {/* Placeholder for Biography */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-semibold text-salsa mb-3">Biography</h2>
          <p className="text-lg text-gray-700">
            Biography content for {artist.name} will be added here.
          </p>
        </div>
      </section>

      <section>
        {/* Placeholder for Discography */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-semibold text-salsa mb-3">
            Discography
          </h2>
          <p className="text-lg text-gray-700">
            Discography content for {artist.name} will be added here.
          </p>
        </div>
      </section>
    </div>
  );
}
