// src/app/artists/yolanda-rivera/page.tsx

import ArtistLayout from "../../../components/ArtistLayout";

export default function YolandaRiveraPage() {
  const biography = `Yolanda Rivera is ... TBD`;

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
