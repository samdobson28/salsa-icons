// src/app/artists/yolanda-rivera/page.tsx

import React from "react";
import ArtistLayout from "../../../components/ArtistLayout";

const YolandaRiveraPage: React.FC = () => {
  const discography = [
    "Explorando (1978)",
    "Energized (1979)",
    "La Ceiba (1979)",
    "Unchained Force (1980)",
    "Night Raider (1981)",
    "De Puerto Rico Bailable y Más (1988)",
    "Otra Vez (1988)",
    "Salsa Tropical (1990)",
    "Alma Caribeña (1995)",
    "Y Seguimos Haciendo Historia (2000)",
    "La Hija de Guaguancó (2013)",
    // Add more albums as needed
  ];

  const biography = (
    <div>
      {/* Origins, Musical Inspirations, and Early Career Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-salsa mb-2">
          Origins, Musical Inspirations, and Early Career
        </h2>
        <p className="mb-4">
          Yolanda Rivera is best known as a lead singer of La Sonora Ponceña, 
          a famous Puerto Rican salsa band that fused modern Cuban music with jazz. 
          She was a female artist who left a lasting impression on salsa music. 
          In fact, Yolanda is also known as “La Sonera Más Brava y Más Querida” 
          (which translates to "The Fiercest and Most Beloved Sonera").
        </p>
        <p className="mb-4">
          Yolanda Rivera was born in Ponce, Puerto Rico, in 1951, as the youngest of 
          11 siblings. During her childhood, her large family played a significant 
          role in shaping her love for music. In an interview, Yolanda revealed that 
          her family didn't have much but used household items as instruments. From 
          a young age, she grew up surrounded by the sounds of drums, and there was 
          always Cuban music playing in her house. With music constantly in her home,
          Yolanda realized her vocation as a singer early on. She also met her musical
          idol, Celeste Mendoza, as a child, further inspiring her to become a singer. 
          Additional influences included Los Van Van, Los Papines, Israel “Cachao” López, 
          Ismael Rivera, Chamaco Rivera, and Pete “El Conde” Rodríguez (Caribe).
        </p>
        <p className="mb-4">
          Yolanda launched her career in Ponce in 1968 as part of a group named
          Roberto y La Nueva Ley. Early in her musical career, she moved to New
          York with her brother. In 1975, she moved back to Puerto Rico and
          debuted as a lead singer with Orquesta Terrífica, recording her first
          album, Sabor a Pueblo, in 1976. She found her voice and developed her
          unique style while performing with La Terrífica.
        </p>
      </section>

      {/* Overcoming Challenges Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-salsa mb-2">
          Overcoming Challenges
        </h2>
        <p className="mb-4">
          Moving to New York in 1969 allowed Yolanda to immerse herself even
          further into the musical scene, as she described that "everything
          moved quickly." New York was full of opportunities, with multiple
          venues for musicians and artists, allowing her to explore and focus on
          music. Yolanda described herself during that era as "determined" to
          keep learning songs and building her repertoire to become a better
          musician. Reflecting on her early career, especially her time in New
          York, she acknowledged that it was "not easy" (Caribe).
        </p>
        <p className="mb-4">
          Yolanda's "big break" came by luck. She met Don Quique Lucca, the
          founder and leader of La Sonora Ponceña, by coincidence. Don Quique
          invited her to his home and asked her to learn a set of songs, which
          turned out to be La Ponceña's repertoire. This event marked the unique
          opportunity that opened doors for her musical career.
        </p>
        <p className="mb-4">
          Like many other female salsa artists, Yolanda Rivera encountered
          significant challenges in her career. She faced trials such as racism,
          sexism, spousal abuse, and vicious rumors, among others. These were
          common obstacles in the male-dominated music industry. Yolanda
          overcame these challenges by staying true to herself and standing her
          ground. She explained, "You have to demonstrate who you are, how you
          are, and what you're capable of." To counteract gender discrimination,
          Yolanda described herself as unapologetically taking up space: "On
          occasion, I've had to put some people in their place, but overall,
          I've been lucky" (Peña).
        </p>
        <p className="mb-4">
          However, one of Yolanda Rivera's most notable career interruptions
          came due to motherhood. In 1984, she gave birth to a child with a
          disability. For five or six years, Yolanda focused on caregiving and
          helping her child recover. As in many other industries, women are
          often told to choose between work and family. Yolanda persevered
          through this challenge, even performing while pregnant.
        </p>
        <p className="mb-4">
          Yolanda's story also stands out for the help she received from
          industry colleagues. After leaving La Sonora Ponceña, she received a
          call from Don Quique, who handed her a portfolio of musical
          arrangements. This generous gesture allowed her to embark on her solo
          career path and relieved her of the financial burden of arranging new
          music. This story highlights the importance of male allies who support
          artists regardless of gender.
        </p>
      </section>

      {/* Success: Awards, Influence, and Innovation Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-salsa mb-2">
          Success: Awards, Influence, and Innovation
        </h2>
        <p className="mb-4">
          "Some of Yolanda Rivera's biggest hits include Ahora Sí, Hasta Que Se Rompa
          El Cuero, Se Formó, La Rumba en el Patio, Madrugando, Borinquen, and Lo Mío
          Es Cantar" (Peña). Alongside Celia Cruz, Yolanda Rivera was one of the two
          women who left a lasting mark on La Sonora Ponceña, recording a total
          of eight albums. Some of her most notable works include:
        </p>
        <p className="mb-4">
          Explorando (1978),
          <br />
          Energized (1979),
          <br />
          La Ceiba (with Celia Cruz, 1979),
          <br />
          Unchained Force (1980),
          <br />
          Night Raider (1981).
        </p>
        <p className="mb-4">
          After her success with La Sonora Ponceña, Yolanda continued her solo
          career. In 2013, she released La Hija de Guaguancó, which became
          another hit, reaching the top spot on radio stations across the
          Caribbean and Latin America.
        </p>
        <p className="mb-4">
          In recognition of her impact on salsa music and her long-term success
          as a female artist, Yolanda Rivera was awarded the Salsa Award in
          Puerto Rico in 2009—which is a lifetime achievement award.
        </p>
      </section>

      {/* Sources Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-salsa mb-2">Sources</h2>
        <p>
          <a
            href="https://www.latinolife.co.uk/articles/top-10-female-salsa-singers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://www.latinolife.co.uk/articles/top-10-female-salsa-singers
          </a>{" "}
          (1)
          <br />
          <a
            href="https://en.wikipedia.org/wiki/La_Sonora_Ponce%C3%B1a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://en.wikipedia.org/wiki/La_Sonora_Ponce%C3%B1a
          </a>{" "}
          (2)
          <br />
          <a
            href="https://latinjazznet.com/artist-profiles/boricua-pioneer-dama-de-la-salsa-yolanda-rivera/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://latinjazznet.com/artist-profiles/boricua-pioneer-dama-de-la-salsa-yolanda-rivera/
          </a>{" "}
          (3)
          <br />
          <a
            href="https://prpop.org/2023/03/se-une-yolanda-al-dia-nacional/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://prpop.org/2023/03/se-une-yolanda-al-dia-nacional/
          </a>{" "}
          (4)
          <br />
          <a
            href="https://www.youtube.com/watch?v=BaGfKpeuMHo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://www.youtube.com/watch?v=BaGfKpeuMHo
          </a>{" "}
          (5)
        </p>
      </section>
    </div>
  );

  const imageUrl = "/images/artists/yolanda-rivera.jpg"; // Ensure this image exists

  return (
    <ArtistLayout
      name="Yolanda Rivera"
      biography={biography}
      discography={discography}
      imageUrl={imageUrl}
    />
  );
};

export default YolandaRiveraPage;
