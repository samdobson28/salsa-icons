// src/app/artists/la-lupe/page.tsx

import ArtistLayout from "../../../components/ArtistLayout";

export default function LaLupePage() {
  const biography = `La Lupe, born Guadalupe Victoria Yolí Raymond, was a Cuban singer renowned for her passionate performances and powerful vocals. She played a pivotal role in the development of Latin jazz and salsa, influencing generations of artists with her dynamic stage presence and emotive singing style.`;

  const discography = [
    "En Vivo (1985)",
    "Fuego y Pasión (1990)",
    "Salsa y Soul (1995)",
    "La Lupe: Her Best (2000)",
    "Eterna (2005)",
    // Add more albums as needed
  ];

  const imageUrl = "/images/artists/la-lupe.jpg"; // Ensure this image exists in public/images/artists/

  return (
    <ArtistLayout
      name="La Lupe"
      biography={biography}
      discography={discography}
      imageUrl={imageUrl}
    />
  );
}
