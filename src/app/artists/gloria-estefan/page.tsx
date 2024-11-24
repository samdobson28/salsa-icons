// src/app/artists/gloria-estefan/page.tsx

import ArtistLayout from "../../../components/ArtistLayout";

export default function GloriaEstefanPage() {
  const biography = `Gloria Estefan is a Cuban-American singer, songwriter, and actress who has been a prominent figure in the Latin music industry for decades. Known as the "Queen of Latin Pop," her music seamlessly blends Latin rhythms with pop and dance elements, making her a beloved artist worldwide.`;

  const discography = [
    "Let It Loose (1987)",
    "Mi Tierra (1993)",
    "Abriendo Puertas (1995)",
    "Destiny (1996)",
    "Unwrapped (2003)",
    // Add more albums as needed
  ];

  const imageUrl = "/images/artists/gloria-estefan.jpg"; // Ensure this image exists in public/images/artists/

  return (
    <ArtistLayout
      name="Gloria Estefan"
      biography={biography}
      discography={discography}
      imageUrl={imageUrl}
    />
  );
}
