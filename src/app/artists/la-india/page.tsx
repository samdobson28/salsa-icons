// src/app/artists/la-india/page.tsx

import ArtistLayout from "../../../components/ArtistLayout";

export default function LaIndiaPage() {
  const biography = `La India, also known as "La Princesa de la Salsa," is a renowned Puerto Rican singer who has made significant contributions to the salsa genre. With her powerful vocals and dynamic stage presence, she has captivated audiences worldwide and earned numerous awards throughout her career.`;

  const discography = [
    "Dicen Que Soy (1993)",
    "Sobre el Fuego (1994)",
    "Llegó la India (1998)",
    "Sola (2002)",
    "Mi Luz Mayor (2014)",
    // Add more albums as needed
  ];

  const imageUrl = "/images/artists/la-india.jpg"; // Ensure this image exists in public/images/artists/

  return (
    <ArtistLayout
      name="La India"
      biography={biography}
      discography={discography}
      imageUrl={imageUrl}
    />
  );
}
