// src/app/artists/celia-cruz/page.tsx

import React from "react";
import ArtistLayout from "../../../components/ArtistLayout";

const CeliaCruzPage: React.FC = () => {
  const biography = (
    <div>
      {/* Origins Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-salsa mb-2">Origins</h2>
        <p className="mb-4">
          Born in 1925 in the Santos Suarez neighborhood of Havana, Úrsula
          Hilaria Celia de la Caridad Cruz Alfonso, also known as “Celia Cruz”,
          became one of the most iconic Latin artists of the 20th century. She
          was drawn to music from a young age, performing in community
          gatherings and singing lullabies to children in her family. Her
          musical journey began when her aunt and cousin encouraged her to
          perform at local cabarets during her teenage years. Despite financial
          struggles and lack of support from her father, she was determined and
          continued winning small prizes including soap and chocolates, and even
          a silver necklace. Growing up in the working class scene of Cuba, she
          was heavily influenced by legendary Cuban musicians like Fernando
          Collazo and Arsenio Rodríguez. Eventually, Cruz studied voice, theory,
          and piano at Havana’s National Conservatory of Music. In the late
          1940s, she gained recognition through a radio contest called The Tea
          Hour, catching the attention of producers and musicians. Her career
          advanced as she became a regular performer on CMQ Radio’s Estrellas
          Nacientes, and demonstrated versatility, performing genres like rumba
          (rooted in African diaspora) and guaracha, known for its playful
          lyrics and fast tempo. She toured across Latin America with the dance
          group Las Mulatas del Fuego and finally in 1950, she had her big break
          as she joined La Sonora Matancera, Cuba’s celebrated orchestra, as the
          lead singer. Her success as an independent Salsa artist occurred much
          later in life, after her move to the United States.
        </p>
      </section>

      {/* Overcoming Challenges Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-salsa mb-2">
          Overcoming Challenges
        </h2>
        <p className="mb-4">
          Celia Cruz’s rise to fame was far from straightforward and involved
          several obstacles. Born in 1925 in a society where the music industry
          was male-dominated, Cruz faced cultural barriers that deemed
          professional music unsuitable for women. Her father wanted her to
          pursue teaching instead since the industry was anchored in nightclubs
          often associated with drugs and alcohol, where opportunities for women
          were scarce and involved with dangers like sexual harassment.
        </p>
        <p className="mb-4">
          As an Afro-Cuban woman, Cruz faced intersectional discrimination,
          battling racism, sexism, and colorism that marginalized her both
          socially and professionally—beauty ideals often excluded women of her
          complexion. The political climate in Cuba added another layer of
          complexity. Fidel Castro’s government imposed restrictions on music,
          limiting artistic expression and the venues where it could be
          performed. Furthermore, when Cruz moved to the United States, she was
          exiled and separated from her family indefinitely, facing isolation
          while adapting to a new culture and industry.
        </p>
        <p className="mb-4">
          However, her extraordinary talent and determination allowed Cruz to
          triumph against all odds. Her deep “percussive” contralto voice
          emboldened her claim to songs traditionally reserved for male
          vocalists. Joining La Sonora Matancera in 1950 marked a pivotal moment
          as she broke into the industry alongside other male artists and
          kick-started her career. Furthermore, despite the personal sacrifice
          involved, her move to the United States opened new doors, allowing her
          to collaborate with icons like Tito Puente and Willie Colón,
          experiment with genres, and ultimately help define the emerging salsa
          movement. Her versatility and willingness to experiment with genres
          helped Cruz stay relevant and emerge as a powerful solo artist,
          especially with the rise of salsa. Collaborating with Fania All-Stars,
          her song “Quimbara” became an anthem for the genre, and she became a
          global icon, who came to be known as the Queen of Salsa. Cruz’s
          charisma and fame extended beyond her music—her flamboyant style, from
          elaborate wigs to vibrant costumes as well as the iconic cry “azúcar”,
          celebrated Afro-Caribbean culture while defying the rigid beauty
          standards that marginalized women like her. By embracing her heritage
          and boldly claiming her space in a male-dominated industry, Cruz paved
          the way for several women artists, becoming a symbol of empowerment.
        </p>
      </section>

      {/* Connection with Audiences Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-salsa mb-2">
          Connection with Audiences
        </h2>
        <p className="mb-4">
          Cruz possessed the ability to connect with audiences transcending
          barriers of language, age, or political ideology. Although her music
          was in Spanish, she gained global recognition. She balanced her joyous
          public persona with a deep commitment and passion for her work,
          describing herself as a “singer of the people.” Furthermore, she
          constantly asserted “No hago de mi arte una bandera politica” (I don’t
          make my art into a political banner). This refusal to politicize her
          work and her dedication to her fans earned Cruz a loyal fanbase,
          allowing her music to resonate universally. Performing everywhere from
          Carnegie Hall to children’s television shows like Sesame Street, her
          reach extended across generations and cultures.
        </p>
      </section>

      {/* Success, Awards, and Honors Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-salsa mb-2">
          Success, Awards, and Honors
        </h2>
        <p className="mb-4">
          Celia Cruz’s success stemmed from her ability to innovate, inspire,
          and transcend barriers. Known as the Queen of Salsa, she became a
          global icon, with a career that spanned over five decades and included
          more than eighty albums and 23 gold records. Cruz constantly redefined
          Afro-Caribbean music, blending traditional Cuban rhythms with
          contemporary styles like pop, rock, and rap. Her Grammy-winning
          collaboration with Ray Barretto on <em>Ritmo en el Corazón</em> (1988)
          and timeless pieces like <em>La Vida es un Carnaval</em> (1998) and{" "}
          <em>La Negra Tiene Tumbao</em> (2001), which were recorded in her 70s,
          demonstrated her ability to innovate and remain relevant across eras.
          Her last album, <em>Regalo del Alma</em> (Sony, 2002) won a Grammy for
          the year’s best salsa album.
        </p>
        <p className="mb-4">
          Throughout her life, Cruz received several prestigious awards
          including five Grammy Awards, a Smithsonian Lifetime Achievement
          Award, a National Endowment for the Arts medal, and a Congressional
          Gold Medal. She was also honored on Miami’s Calle Ocho and Madison
          Square Garden’s Wall of Fame, and has a star on the Hollywood Walk of
          Fame. Cruz’s discography demonstrates her innovation and some of the
          most notable pieces include:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <em>Guantanamera</em> (1960)
          </li>
          <li>
            <em>Bemba Colora</em> (1966)
          </li>
          <li>
            <em>Quimbara</em> (1974)
          </li>
          <li>
            <em>Cucula</em> (1983)
          </li>
          <li>
            <em>La Negra Tiene Tumbao</em>
          </li>
        </ul>
        <p>
          Celia Cruz redefined Afro-Caribbean music by blending traditional
          sounds with modern styles. Her remarkable success not only solidified
          her legacy as the Queen of Salsa but also paved the way for future
          generations of female musicians.
        </p>
      </section>

      {/* Sources Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-salsa mb-2">Sources</h2>
        <ul className="list-disc list-inside">
          <li>
            <a
              href="https://www.billboard.com/music/latin/ten-eternal-celia-cruz-songs-7865862/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Billboard. "10 Eternal Celia Cruz Songs."
            </a>
          </li>
          <li>
            <a
              href="https://www.womenshistory.org/education-resources/biographies/celia-cruz#:~:text=Cruz%20stood%20out%20as%20one,a%20flashy%2C%20feminine%20public%20persona."
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              National Women's History Museum. "Celia Cruz."
            </a>
          </li>
          <li>
            <a
              href="https://celiacruz.com/biography/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Celia Cruz Official Website. "Biography."
            </a>
          </li>
          <li>
            <a
              href="https://www.woodlawn.org/blog/celia-cruz-how-the-queen-of-salsa-changed-latin-music/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Woodlawn Cemetery and Conservancy. "Celia Cruz: How the Queen of
              Salsa Changed Latin Music."
            </a>
          </li>
          <li>
            <a
              href="https://www.aarp.org/entertainment/music/info-2024/celia-cruz-discography.html#:~:text=But%20Celia%20Cruz%2C%20Cuba's%20eternal,Grammys%2C%20among%20many%20other%20awards."
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              AARP. "Celia Cruz’s Discography."
            </a>
          </li>
        </ul>
      </section>
    </div>
  );

  const discography = [
    "Guantanamera (1960)",
    "Bemba Colora (1966)",
    "Quimbara (1974)",
    "Cucula (1983)",
    "La Negra Tiene Tumbao",
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
};

export default CeliaCruzPage;
