// src/app/artists/elisabeth-timbal/page.tsx

import React from "react";
import ArtistLayout from "../../../components/ArtistLayout";

const ElisabethTimbalPage: React.FC = () => {
  // Extracting mentioned album from the text:
  // "La Reina Del Timbal” album with Bobby Cruz in 2023.
  const discography = [
    "Rompe el Cuero (2021)",
    "Ya No Te Quiero (2022)",
    "Medley Cumbia Navideñas (2022)",
    "Cumbia Sampuesana (2023)",
    "Pal Bailador (2023)",
    "La Danza del Mono (2023)",
    "La Reina del Timbal (2023)",
    "La Cadenita (2023)",
    "Homenaje El Gran Combo (2023)",
    "Para No Verte Más (2024)",
    "Cumbia Cienaguera (2024)",
    // Add more albums as needed
  ];

  // Keep the text EXACT. Only add headings/sections as requested.
  const biography = (
    <div className="text-gray-800 text-lg space-y-6">
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-salsa mb-2">
          Origins, Musical Inspirations, and Early Career
        </h2>
        <p className="mb-4">
          {`Elisabeth Timbal is a contemporary female Colombian musician. She was born in Colombia’s salsa capital, Cali. Although she is currently based in Tampa, Florida, her 30-year musical career began long before she moved to the United States. After losing her father when she was only twelve years old, she suffered from depression and coped with music, which soon became her therapeutic outlet. Her interest in music grew, and she saw it as a “light of hope.” Timbal traces her musical discovery when she first encountered timbales at seventeen during an orchestra rehearsal, which she attended because her cousin took her. To this day, she describes herself as “falling in love” with timbales and developed a strong personal connection to percussion, as she attributed her motivation to her father’s memory. Despite Timbal’s newly found passion, she could not pursue professional steps during her early career. She pursued systems engineering to please her mother, who wanted educational balance. However, this roadblock did not prevent Timbal from simultaneously studying music and dedicating her free time to percussion. She demonstrated an early commitment to her musical craft, and her efforts were acknowledged as she secured her place in Orquestra Tumbadora. This was her first professional ensemble, and Timbal built fundamental skills during this period, studying under Jorge Gilkes and receiving training from Guayacan and Niche members.`}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-salsa mb-2">
          Overcoming Challenges
        </h2>
        <p className="mb-4">
          {`Unfortunately, during her first exposure to professional experience, she was systematically excluded from the industry. In the early 1990s, female percussionists in professional salsa were almost nonexistent. The salsa industry was already male-dominated enough, but percussion was even more strictly viewed as a “male domain.” Besides having limited access to professional opportunities, there was much skepticism about female capability with timbales.`}
        </p>
        <p className="mb-4">
          {`Timbal was explicitly told the "timbales weren't for women,” which added to the long list of the challenges in pursuing a professional career. There were limited mentorship opportunities for women, as explained: "In the music field, especially percussion, they didn't want to give me a chance.” She had to prove her capabilities beyond her male counterparts and extra scrutiny of technical skills. This required exceptional perseverance to gain acceptance, and Timbal accepted the challenge. She demonstrated resilience and used rejection by the industry to reframe it into personal motivation. This positive outlook was possible because it was the same approach she took to overcome depression through her passion for music.`}
        </p>
        <p className="mb-4">
          {`Timbal recounts, "They [the music industry] told me no, that there was no point because there were no women who played timbales. But I wanted to learn on my own.” She was strongly committed to her professional development. Her independent learning method allowed her to explore a unique performance style, combining dance and percussion. This laid the technical foundations for developing her distinctive performance innovations, which created a new method of engaging with her audience. This versatility stood out and helped secure her breakthrough opportunity. Timbal was recruited to join Orquesta Canela, uniquely an all-female orchestra. This gave her name professional legitimacy. It also provided her with more opportunities for skill development and building a professional network.`}
        </p>
        <p className="mb-4">
          {`Timbal was offered many opportunities to work with major male artists, which earned her peer respect and established professional credibility. Given her exceptional skill set and performance innovations, she has increasingly gained global recognition from diverse audiences. Her success was widespread in the US music industry, and she was highly popular in Tampa, Florida. Timbal established Latin music nights with saxophonist Marta Delgado and built a new audience base throughout her evolving career.`}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-salsa mb-2">
          Success: Awards, Influence, and Innovation
        </h2>
        <p className="mb-4">
          {`Today, Elisabeth Timbal is well-recognized in the industry and has collaborated with many legendary artists. One noteworthy performance was when Richie Ray and Bobby Cruz accompanied her. Other significant performances include the National Salsa Day in San Juan and “The Last Dance” at Coca-Cola Music Hall. She was named the queen of the timbal, which was coined after her “La Reina Del Timbal” album with Bobby Cruz in 2023.`}
        </p>
        <p className="mb-4">
          {`Timbal’s success story illustrates the persistent nature of gender barriers in Latin music but the ability to overcome them through talent and determination. She proved that individual persistence can create systematic change and continues to challenge the industry through her advocacy efforts for gender equality in music. Her determination to advance female artists is reflected in her commitment to creating opportunities for the next generation of women.`}
        </p>
        <p className="mb-4">
          {`While Timbal was able to find her success, she is an exceptional case that required exemplary virtuosity and demanded high discipline. She acknowledges that despite overcoming gender challenges, it is still difficult for emerging musicians due to the long history of gender discrimination and inherent stereotypes across music from the Caribbean diaspora. Timbal emphasizes the importance of continued support in creating more opportunities for traditionally underrepresented groups. She plays a big leadership role in expanding rehearsal spaces for Hispanic musicians and Latin music festivals. Her future vision is to “showcase the great amount of emerging musical talent within Tampa’s Hispanic community.” This earned her recognition, and she was named the Tampa Hispanic Heritage Leadership Class in 2024. Timbal’s involvement in community development can also be seen in her educational initiatives. She has over eighteen years of teaching experience and mentors aspiring youth musicians to balance education and music as she did in her early career. Currently, she teaches diverse student populations and specializes in working with children with autism through unique educational programs. Drawing from experiences overcoming personal mental health challenges during her youth, Timbal aims to spread positive energy through music. She believes “Music reaches them [children with autism] more easily, and you adapt to them. I’ve learned a lot from them.” Her approach to transforming hardships into personal motivation has inspired fellow community members to join in on the cause of changing how certain social stigmas are perceived within the music industry. Timbal’s legacy in breaking barriers continues to pave new pathways in the ever-evolving music landscape. Elisabeth Timbal’s impact as a role model for aspiring female musicians, educators, and advocates echoes her transformative cultural legacy.`}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-salsa mb-2">Sources</h2>
        <ul className="list-disc list-inside">
          <li>
            <a
              href="https://elisabethtimbal.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://elisabethtimbal.com/home
            </a>
          </li>
          <li>
            <a
              href="https://www.billboard.com/lists/new-salsa-music-artists-list-luis-figueroa-christian-alicea/elisabeth-timbal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://www.billboard.com/lists/new-salsa-music-artists-list-luis-figueroa-christian-alicea/elisabeth-timbal/
            </a>
          </li>
          <li>
            <a
              href="https://www.tampabeacon.com/news/elisabeth-timbal-the-percussionist-setting-the-beat-of-tampas-music-scene/article_072fc7be-6ec5-11ef-9d70-13ea02b0c288.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://www.tampabeacon.com/news/elisabeth-timbal-the-percussionist-setting-the-beat-of-tampas-music-scene/article_072fc7be-6ec5-11ef-9d70-13ea02b0c288.html
            </a>
          </li>
          <li>
            <a
              href="https://www.tampabeacon.com/news/tampa-hispanic-heritage-announces-leadership-class/article_5793692c-300e-11ef-983f-d3da1e10eb69.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://www.tampabeacon.com/news/tampa-hispanic-heritage-announces-leadership-class/article_5793692c-300e-11ef-983f-d3da1e10eb69.html
            </a>
          </li>
        </ul>
      </section>
    </div>
  );

  const imageUrl = "/images/artists/elisabeth-timbal.jpg"; // Ensure this image exists

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
