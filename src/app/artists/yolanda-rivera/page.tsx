// src/app/artists/yolanda-rivera/page.tsx

import ArtistLayout from "../../../components/ArtistLayout";

export default function YolandaRiveraPage() {
  const biography = `Yolanda Rivera is a distinguished Mexican singer known for her contributions to traditional and contemporary Latin music. With a career spanning several decades, she has released numerous albums that showcase her versatile vocal abilities and deep emotional expression.`;

  const discography = [
    "Mujer Divina (1995)",
    "En Vivo (2000)",
    "Amor Eterno (2005)",
    "Ritmo y Pasión (2010)",
    "Recuerdos del Alma (2015)",
    // Add more albums as needed
  ];

  const imageUrl = "/images/artists/yolanda-rivera.jpg"; // Ensure this image exists in public/images/artists/

  return (
    <ArtistLayout
      name="Yolanda Rivera"
      biography={biography}
      discography={discography}
      imageUrl={imageUrl}
    />
  );
}
