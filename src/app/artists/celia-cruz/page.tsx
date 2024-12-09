// src/app/artists/celia-cruz/page.tsx

import React from "react";
import ArtistLayout from "../../../components/ArtistLayout";

const CeliaCruzPage: React.FC = () => {
  // Extracting the notable pieces mentioned in the text as the discography:
  const discography = [
    "Guantanamera (1968)",
    "Bemba Colora (1966)",
    "Quimbara (1974)",
    "Cucula (1975)",
    "La Negra Tiene Tumbao (2001)",
  ];

  // Keep the text EXACT. Only add headings/sections.
  const biography = (
    <div className="text-gray-800 text-lg space-y-6">
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-salsa mb-2">
          Origins, Musical Inspirations and Early Career
        </h2>
        <p className="mb-4">
          {`Born in 1925 in the Santos Suarez neighborhood of Havana, Úrsula Hilaria Celia de la Caridad Cruz Alfonso, also known as “Celia Cruz”, became one of the most iconic Latin artists of the 20th century. She was drawn to music from a young age, performing in community gatherings and singing lullabies to children in her family. Her musical journey began when her aunt and cousin encouraged her to perform at local cabarets during her teenage years. Despite financial struggles and lack of support from her father, she was determined and continued winning small prizes including soap and chocolates and even a silver necklace. Growing up in the working class of Cuba, she was heavily influenced by Cuban musicians like Fernando Collazo and Arsenio Rodríguez. Eventually, she studied voice, theory and piano at Havana’s National Conservatory of Music. In the late 1940s, she gained recognition through a radio contest called The Tea Hour, catching the attention of producers and musicians. Her career progressed as she became a regular performer on CMQ Radio’s Estrellas Nacientes, and demonstrated versatility, performing genres like rumba (rooted in African diaspora) and guaracha, known for its playful lyrics and fast tempo. She toured across Latin America with the dance group Las Mulatas del Fuego and finally in 1950, she had her big break as she joined La Sonora Matancera, Cuba’s celebrated orchestra, as the lead singer. Her success as a solo Salsa artist occurred later in life, after her move to the United States.`}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-salsa mb-2">
          Overcoming Challenges
        </h2>
        <p className="mb-4">
          {`Celia Cruz’s rise to fame was far from straightforward and involved obstacles along the way. Born in 1925 in a society where music was male-dominated, Cruz faced cultural barriers that deemed professional music unsuitable for women. Her father wanted her to pursue teaching instead since the industry was anchored in nightclubs and often associated with drugs and alcohol. Opportunities for women were not only scarce but involved with dangers like sexual harassment. As an Afro-Cuban woman, Cruz faced intersectional discrimination, struggling with racism, sexism and colorism that marginalized her socially and professionally. Beauty ideals at the time often excluded her complexion. The political climate in Cuba did not help either. Fidel Castro’s government imposed restrictions on music, which limited both artistic expression and venues like nightclubs where it could be performed. Furthermore, when Cruz moved to the United States, she was exiled and separated from her family indefinitely, facing isolation while adapting to a new culture and industry.`}
        </p>
        <p className="mb-4">
          {`However, her extraordinary talent and resilience allowed Cruz to triumph against all odds. Her deep “percussive” contralto voice emboldened her claim to songs traditionally reserved for male vocalists. Joining La Sonora Matancera in 1950 marked a pivotal moment as she broke into the industry alongside other male artists and kick-started her career. Furthermore, despite the personal sacrifice involved, her move to the United States opened new opportunities, allowing her to collaborate with icons like Tito Puente and Willie Colón. She could experiment with genres and ultimately helped define the emerging salsa movement with Fania All-Stars. Her versatility and willingness to experiment with genres helped Cruz stay relevant and emerge as a powerful solo artist. Collaborating with Fania All-Stars, her song “Quimbara” became an anthem, and she came to be known as the Queen of Salsa. Her flamboyant style including elaborate wigs and colorful costumes as well as her iconic cry “azúcar”, celebrated Afro-Caribbean culture while defying the rigid beauty standards that had excluded her. She paved the way for several women artists, becoming a symbol of empowerment.
Cruz possessed the ability to connect with audiences transcending barriers of language, age or political ideology. Although her music was in Spanish, she gained global recognition. She balanced her joyous public persona with a deep passion for her work, describing herself as a “singer of the people.” Furthermore, she constantly asserted “No hago de mi arte una bandera politica” (I don’t make my art into a political banner). This refusal to politicize her work and her dedication to her fans earned Cruz a loyal fanbase, allowing her music to be accepted universally. Performing everywhere from Carnegie Hall to children’s television shows like Sesame Street, she connected with people across generations and cultures.`}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-salsa mb-2">
          Success: Awards, Influence and Innovation
        </h2>
        <p className="mb-4">
          {`Celia Cruz’s success stemmed from her ability to innovate, inspire and transcend barriers. As Queen of Salsa, she became a global icon, with a career that spanned over five decades and included more than eighty albums and 23 gold records. Cruz constantly redefined Afro-Caribbean music, blending traditional Cuban music with contemporary styles like pop, rock and rap. Her Grammy-winning piece with Ray Barretto on Ritmo en el Corazón (1988) and timeless records like La Vida es un Carnaval (1998) and La Negra Tiene Tumbao (2001), which were recorded in her 70s, demonstrated her ability to innovate and remain relevant across eras. Her last album, “Regalo del Alma” (Sony, 2002) won a Grammy for the year’s best salsa album.
Throughout her life, Cruz received several awards including five Grammy Awards, a Smithsonian Lifetime Achievement Award, a National Endowment for the Arts medal and a Congressional Gold Medal. She was also honored on Miami’s Calle Ocho and Madison Square Garden’s Wall of Fame, and has a star on the Hollywood Walk of Fame. Cruz’s discography demonstrates her innovation and some of the most notable pieces include:
Guantanamera (1968)
Bemba Colora (1966)
Quimbara (1974)
Cucula (1975)
La Negra Tiene Tumbao (2001)
Celia Cruz redefined Afro-Caribbean music by blending traditional sounds with modern styles. Her remarkable success not only solidified her legacy as the Queen of Salsa but also opened doors for future generations of female musicians.`}
        </p>
      </section>
    </div>
  );

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
