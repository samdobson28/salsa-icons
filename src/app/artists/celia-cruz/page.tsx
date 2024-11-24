// src/app/artists/celia-cruz/page.tsx

import ArtistLayout from "../../../components/ArtistLayout";

export default function CeliaCruzPage() {
  const biography = `Celia Cruz, known as the "Queen of Salsa," was a Cuban singer who became one of the most popular Latin artists of the 20th century. Her powerful voice and vibrant performances made her an icon in the world of salsa music. Over her illustrious career, she recorded numerous hits and inspired countless artists around the globe.`;

  const discography = [
    "La Vida es un Carnaval (1998)",
    "Mi Vida Es Cantar (2004)",
    "Regalo del Alma (2003)",
    "Un Canto por América (1994)",
    "Homenaje a los Reyes del Son (1996)",
    // Add more albums as needed
  ];

  const imageUrl = "/images/artists/celia-cruz.jpg"; // Ensure this image exists in public/images/artists/

  return (
    <ArtistLayout
      name="Celia Cruz"
      biography={biography}
      discography={discography}
      imageUrl={imageUrl}
    />
  );
}
