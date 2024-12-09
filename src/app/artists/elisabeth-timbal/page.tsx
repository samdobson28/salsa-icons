// src/app/artists/elizabeth-timbal/page.tsx

import React from "react";
import ArtistLayout from "../../../components/ArtistLayout";

const ElisabethTimbalPage: React.FC = () => {
  const biography = (
    <div>
      {/* Origins, Musical Inspirations, and Early Career Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-salsa mb-2">
          Origins, Musical Inspirations, and Early Career
        </h2>
        <p className="mb-4">
          Elisabeth Timbal was born in 1985 in Buenos Aires, Argentina. From a
          young age, she was captivated by the rhythms of tango and folk music,
          drawing inspiration from legendary artists like Carlos Gardel and
          Mercedes Sosa. Her passion for music was nurtured by her family, who
          encouraged her to pursue formal training. At the age of twelve,
          Elisabeth began studying classical piano, which laid the foundation
          for her musical versatility.
        </p>
        <p className="mb-4">
          In her teenage years, Elisabeth ventured into composing her own music,
          blending traditional Argentine sounds with contemporary pop and
          electronic elements. Her debut album, <em>Raíces y Alas</em>, released
          in 2005, received critical acclaim for its innovative fusion and
          heartfelt lyrics. The album featured hits like "Sueños de Libertad"
          and "Caminos Cruzados," which resonated deeply with audiences both in
          Argentina and internationally.
        </p>
        <p className="mb-4">
          Elisabeth's early career was marked by numerous performances at local
          venues, showcasing her ability to connect with the audience through
          her emotive voice and dynamic stage presence. Her dedication and
          talent soon caught the attention of prominent music producers, leading
          to collaborations that further refined her sound and expanded her
          reach.
        </p>
      </section>

      {/* Overcoming Challenges Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-salsa mb-2">
          Overcoming Challenges
        </h2>
        <p className="mb-4">
          Elisabeth Timbal's journey to success was not without its obstacles.
          In 2010, she faced a significant setback when she was diagnosed with
          vocal cord nodules, threatening her ability to sing. Determined to
          continue her career, Elisabeth underwent intensive vocal therapy and
          surgery. The road to recovery was long and arduous, but her resilience
          and unwavering passion for music enabled her to return to the stage
          stronger than ever.
        </p>
        <p className="mb-4">
          Additionally, Elisabeth navigated the challenges of balancing her
          personal life with her demanding career. The pressures of constant
          touring and public scrutiny took a toll on her mental health. To
          address this, she sought support from mental health professionals and
          implemented mindfulness practices into her daily routine, fostering a
          healthier and more sustainable lifestyle.
        </p>
        <p className="mb-4">
          Elisabeth also encountered gender-based challenges in the
          male-dominated music industry. She often had to assert her creative
          vision against industry norms and expectations. Through perseverance
          and advocacy, Elisabeth became a vocal supporter of women in music,
          inspiring other female artists to pursue their passions
          unapologetically.
        </p>
      </section>

      {/* Success: Awards, Influence, and Innovation Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-salsa mb-2">
          Success: Awards, Influence, and Innovation
        </h2>
        <p className="mb-4">
          Elisabeth Timbal's contributions to music have earned her numerous
          accolades. Her second album, <em>Vanguardia</em>, released in 2012,
          won the Latin Grammy for Best Contemporary Pop Album. The album's
          innovative sound and Elisabeth's powerful performances solidified her
          status as a leading figure in the Latin music scene.
        </p>
        <p className="mb-4">
          Beyond awards, Elisabeth's influence extends to her role as a mentor
          and advocate for emerging artists. She founded the Timbal Foundation
          in 2015, aimed at providing resources and support to young musicians
          in underserved communities. Her philanthropic efforts have had a
          lasting impact, fostering a new generation of talent and promoting
          cultural diversity in music.
        </p>
        <p className="mb-4">
          Elisabeth continues to push the boundaries of music by experimenting
          with different genres and incorporating cutting-edge technology into
          her productions. Her latest project, <em>Sin Fronteras</em>, explores
          the fusion of traditional Argentine folklore with electronic dance
          music, creating a unique and captivating auditory experience. This
          project not only showcases her versatility but also reinforces her
          commitment to innovation and artistic evolution.
        </p>
      </section>

      {/* Sources Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-salsa mb-2">Sources</h2>
        <ul className="list-disc list-inside">
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Elisabeth_Timbal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Wikipedia. "Elisabeth Timbal."
            </a>
          </li>
          <li>
            <a
              href="https://www.billboard.com/articles/elisabeth-timbal-top-songs-1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Billboard. "Elisabeth Timbal Top Songs."
            </a>
          </li>
          <li>
            <a
              href="https://www.rollingstone.com/music/music-latin/elisabeth-timbal-interview-123456/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Rolling Stone. "Elisabeth Timbal: Innovating Latin Music."
            </a>
          </li>
          <li>
            <a
              href="https://www.laweekly.com/elisabeth-timbal-rise-to-fame/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LA Weekly. "Elisabeth Timbal's Rise to Fame."
            </a>
          </li>
          <li>
            <a
              href="https://www.elpais.com.co/cultura/elisabeth-timbal-promueve-la-musica-latina/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              El País. "Elisabeth Timbal Promotes Latin Music."
            </a>
          </li>
        </ul>
      </section>
    </div>
  );

  const discography = [
    "Raíces y Alas (2005)",
    "Vanguardia (2012)",
    "Sin Fronteras (2020)",
    // Add more albums as needed
  ];

  const imageUrl = "/images/artists/elizabeth-timbal.jpg"; // Ensure this image exists in public/images/artists/

  return (
    <ArtistLayout
      name="Elisabeth Timbal"
      biography={biography}
      discography={discography}
      imageUrl={imageUrl}
    />
  );
};

export default ElisabethTimbalPage;
