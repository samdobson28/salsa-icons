// src/app/artists/albita-rodriguez/page.tsx

import ArtistLayout from "../../../components/ArtistLayout";

export default function AlbitaRodriguezPage() {
  const biography = `Albita Rodriguez, commonly known as Albita, is a celebrated Cuban singer and actress. She has made a significant impact on the Latin music scene with her unique blend of salsa, jazz, and traditional Cuban rhythms. Her soulful voice and charismatic performances have earned her a loyal fanbase worldwide.`;

  const discography = [
    "La Albita (1990)",
    "My Latin Soul (1995)",
    "Soul of Latin America (2000)",
    "Vivir (2005)",
    "Love & Rhythm (2010)",
    // Add more albums as needed
  ];

  const imageUrl = "/images/artists/albita-rodriguez.jpg"; // Ensure this image exists in public/images/artists/

  return (
    <ArtistLayout
      name="Albita Rodriguez"
      biography={biography}
      discography={discography}
      imageUrl={imageUrl}
    />
  );
}
