// src/app/artists/gloria-estefan/page.tsx

import React from "react";
import ArtistLayout from "../../../components/ArtistLayout";

const GloriaEstefanPage: React.FC = () => {
  // Updated discography can remain the same or be trimmed as needed
  const discography = [
    "Eyes of Innocence (1984)",
    "Let it Loose (1987)",
    "Cuts Both Ways (1989)",
    "Into the Light (1991)",
    "Christmas Through Your Eyes (1993)",
    "Destiny (1996)",
    "gloria! (1998)",
    "Unwrapped (2003)",
    "Little Miss Havana (2011)",
    "Mi Tierra (1993)",
    "Abriendo Puertas (1995)",
    "Alma Caribeña (Caribbean Soul) (2000)",
    "90 Millas (2007)",
  ];

  // Keep only the specified sections and text exactly as provided
  const biography = (
    <div className="text-gray-800 text-lg space-y-6">
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-salsa mb-2">
          Origins, Music Inspirations, Early Career:
        </h2>
        <p className="mb-4">
          {`Gloria Estefan is a Cuban-American singer (a contralto) born in Havana in 1957. She is in the Top 100 greatest artists of all time by Billboard and has sold 100 million album copies. 

Due to the Cuban revolution, her family fled from Cuba to Miami in 1959. Estefan's father was diagnosed with multiple sclerosis, so she took care of him while her mother worked. Meanwhile, Estefan started becoming passionate about music.

At U Miami, Gloria was seen by Emilio Estefan performing with her church ensemble at a rehearsal. She was invited to audition for his recently formed band, Miami Latin Boys. It went well, and she was invited to join. They were renamed ‘Miami Sound Machine’. 

From 1997 to 1989, Miami Sound Machine released several hit albums and singles. ‘Primitive Love’, released in 1985, included 3 Top 10 hits on the Billboard Top 100: "Conga" (No. 10), "Words Get in the Way" (No. 5), and "Bad Boy" (No. 8). Another single on this album - "Words Get in the Way" - reached the top of the US Hot Adult Contemporary Tracks chart. Let it Loose, their last album as a group, went multi-platinum, with over 3 million copies sold.`}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-salsa mb-2">
          Overcoming Challenges:
        </h2>
        <p className="mb-4">
          {`After fleeing to Miami and escaping the revolution, Estefan’s father, Jose, fought in the failed Bay of Pigs revolution. He was arrested and imprisoned for 2 years. After being freed, he joined the US Army in Vietnam. Tragically, like many others in the war, he was exposed to Agent Orange, leading him to be diagnosed with Multiple Sclerosis. 

Estefan’s childhood revolved around caring for her father and younger sister. During this time, music served as her catharsis and escape. She took up the guitar, and would practice in her room in her free time. She eventually joined her church’s ensemble band, as the vocalist. 

After eventually joining Miami Sound Machine, with her to-be husband Emilio, Estefan and band struggled to convince their record label to allow them to keep their distinctive latin sound after they were warned to strip their music of congas, horns, and anything remotely Latin. Estefan and Emilio believed they could still capture the worldwide market by recording in English. They refused to dilute their unique sound. Their song, ‘Conga’, went on to reach number 10 on the Billboard Hot 100 and No. 1 on the Billboard Dance Club Songs chart. Conga became the first single by a Latin group to cross over from the Latin charts to the pop charts in American music history. The song introduced millions of listeners to Miami Sound Machine's unique blend of pop, dance, and Latin rhythms.

In 1989, Estefan dropped the band name, and began recording as a solo artist. Coming off the release of ‘Cuts Both Ways’, her most successful album, Estefan met with an accident when her tour bus collided with a semi-truck during a snowstorm in Pennsylvania. Estefan suffered a grave injury, fracturing her spine and requiring major surgery. Her doctor’s warned her that she may not be able to walk again, let alone perform on stage. However, her resolve pushed her through 10 months of intense physical therapy, and she returned to perform at the American Music Awards. Estefan sang ‘Coming Out of the Dark’, a song that reached the top of the Billboard Top 100, and she was met with a standing ovation.

At the young age of 9, Estefan enrolled in her father’s cousin’s classical music school. She sought to learn classical guitar, however she was sexually abused by her teacher. Her teacher threatened her mother’s life if Estefan told anyone about the abuse, and Estefan began to lose her hair due to the stress. Eventually, after a year, Estefan confided in her parents, who reported it to the police. They decided against pressing charges to protect Estefan from the additional trauma a trial and testifying would cause.`}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-salsa mb-2">
          Success, Awards and Honors:
        </h2>
        <p className="mb-4">
          {`Estefan enjoyed a successful and illustrious career as an artist, winning 3 Grammy Awards for her albums and 5 Latin Grammy awards. In 2008, she was also awarded the Latin Recording Academy Person of the Year award, becoming the first woman to do so. 

Originally from Cuba, Estefan received the Ellis Island Medal of Honor, the highest honor that a naturalized US citizen can be bestowed with. In 2015, President Obama awarded Estefan and her husband, Emilio, with the Presidential Medal of Freedom for their contributions to American Music. In 2022, she was inducted into the Female Songwriters Hall of Fame. In 2023, she was welcomed into the Songwriters Hall of Fame, becoming the first Latina to do so.`}
        </p>
      </section>
    </div>
  );

  const imageUrl = "/images/artists/gloria-estefan.jpg"; // Ensure this image exists in public/images/artists/

  return (
    <ArtistLayout
      name="Gloria Estefan"
      biography={biography}
      discography={discography}
      imageUrl={imageUrl}
    />
  );
};

export default GloriaEstefanPage;
