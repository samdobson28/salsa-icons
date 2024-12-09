// src/app/page.tsx
import React from "react";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold text-salsa mb-4">
          Welcome to Salsa Icons
        </h1>
        <p className="text-xl text-gray-700">
          Explore the journeys of iconic female artists and their triumphs over
          cultural and structural obstacles.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-salsa mb-6">Album Covers</h2>
        <div className="overflow-x-auto">
          <div className="flex space-x-6">
            {/* Placeholder Album Covers */}
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="flex-shrink-0 w-48 h-48 bg-accent-light rounded-md shadow-md flex items-center justify-center text-white text-lg font-semibold"
              >
                Album {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-semibold text-salsa mb-6">
          Women in Salsa
        </h2>
        <p className="text-gray-700 mb-4">
          Salsa is one of the most well-known genres, stemming from Caribbean
          music. In this project, we explore the women behind shaping this music
          scene. Our research primarily focused on the evolving experiences of
          female artists within the Salsa music industry. Female salsa artists
          have faced and continue to face gender-related obstacles that are
          deep-rooted in the music industry. Historically, male and female
          artists were segregated, with each gender assigned a designated role.
          Female artists were often subject to double standards and higher
          expectations than their male counterparts, so many were forced to
          either conform or overcome these challenges. However, due to social,
          political, cultural, and physical barriers, female artists typically
          experience limited creative liberty, performance opportunities, and
          press coverage.
        </p>
        <p className="text-gray-700 mb-4">
          In this fieldwork project, we studied the biographies of legends like
          Celia Cruz and La India, as well as emerging contemporary artists
          within the salsa music scene. We analyzed some of the cultural and
          structural obstacles that these women have confronted over the years.
          How have these obstacles evolved? What allowed certain artists to
          finally break through? And finally, what challenges continue to
          persist for them today?
        </p>
        <p className="text-gray-700 mb-4">
          Given these obstacles, female artists, especially those who became
          popular and well-recognized over time in the salsa industry, had to
          excel across a wide range of skill sets. While each artist overcame
          these obstacles uniquely, our research on famous female salsa artists
          revealed a common theme: staying true to oneself, persevering,
          standing ground, and asserting a new status quo emerged as important
          values for success. For instance, some moved to the United States,
          perhaps slightly more progressive than the Caribbean then, to seek
          musical opportunities. In another example, exceptional ability and
          independent development without help were highly effective. Others
          have received help from established male artists, for example
          collaboration opportunities with famous artists which establishes
          professional credibility.
        </p>
      </section>

      <div className="my-12">
        <Image
          src="/images/graph.png"
          alt="Timeline of Female Artists Lifespans"
          width={1200}
          height={600}
          className="mx-auto w-full max-w-4xl border rounded-md"
        />
      </div>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-salsa mb-4">
          Double Standards
        </h3>
        <p className="text-gray-700 mb-4">
          When we explored how each female salsa artist was affected by industry
          politics and resistance, we observed interesting patterns. In La
          India’s case, the award show politics resulted in her losing the
          opportunity to receive the Lo Nuestro Award. Due to the industry's
          concerns about her public behavior, her television appearances were
          heavily restricted, commercially impacting her career. Double
          standards were also prevalent. While male aggression was celebrated,
          female aggression was condemned, which limited her creative freedom.
          By overcoming the struggles of the male-dominated industry, India
          catalyzed a female audience revolution. For instance, behavioral
          changes included women's collective responses at concerts and group
          singing of empowerment anthems. These expressions of solidarity, both
          physical and figurative, created safe spaces that challenged gender
          roles. Over time, India built communities for a shared experience
          through music. This paved the way for the development of support
          networks and became a big symbol of cultural pride and expression.
          Critical acclaim and peer respect opened new avenues for commercial
          validation, as well as awards and honors. More importantly, unlike in
          the past, when India had to repress herself and compromise artistic
          integrity, she was able to assert more creative control.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-salsa mb-4">
          Gender-Based Roles
        </h3>
        <p className="text-gray-700 mb-4">
          Due to the deep-rooted cultural stigmas shaped by industry politics,
          there were designated roles in music for men and women. For example,
          Elisabeth Timbal was explicitly told that “Timbales weren’t for
          women.” Percussion was viewed as a male domain, which also meant
          limited mentorship opportunities for women. This required exceptional
          perseverance to gain acceptance, and Timbal accepted the challenge.
          She demonstrated resilience and used rejection by the industry to
          reframe it into personal motivation. This positive outlook was
          possible because it was the same approach she took to overcome
          depression through her passion for music. Her independent learning
          method allowed her to explore a unique performance style, combining
          dance and percussion.
        </p>
        <p className="text-gray-700 mb-4">
          Another example of gender-based roles being an obstacle for female
          artists to break through is Celia Cruz's journey. In 1925 Havana, it
          was virtually unheard of for women to sing as a profession. Instead,
          as a maternal figure, it was more acceptable for women to sing to
          children or perhaps as a hobby. This was the status quo that Celia
          Cruz later defied through her exceptional ability and unwavering
          perseverance. In a world where female artists were not expected to
          improvise, Celia Cruz's unmatched ability set a new standard for
          nightclub performances. She used her deep, “percussive” contralto
          voice to take on songs traditionally reserved for male vocalists. No
          male singer could rival her on stage, and this extraordinary talent
          helped her overcome numerous obstacles, including winning over her
          family and breaking into this male-dominated field.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-salsa mb-4">
          Lack of Mentorship and Support
        </h3>
        <p className="text-gray-700 mb-4">
          Due to gender expectations, many female artists also struggled to find
          the support they needed to advance their careers. For Celia Cruz,
          pursuing music was initially challenging because her father opposed
          the idea. Later, when she moved to the United States to seek musical
          opportunities, she further faced the difficulty of being unable to
          return to visit her family. Similarly, Elisabeth Timbal had to teach
          herself percussion, as male percussionists were often reluctant to
          mentor her. While this may have hindered the careers of many
          musicians, for Timbal, it instead enabled her to develop her own
          unique style.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-salsa mb-4">
          Implicit Segregation through Men-Only Spaces
        </h3>
        <p className="text-gray-700 mb-4">
          While there were gender expectations that dictated what women could
          and could not do, there were also spaces that were deemed off-limits
          for women. Such spaces also happened to be venues where music thrived.
          Salsa music, for example, came alive in nightclubs. In fact, night
          clubs—and by extension, the salsa industry—were associated with
          alcohol, drugs, and sex work. These were the realities that reinforced
          the male dominance of the salsa industry. Night clubs were spaces
          where women were not expected to occupy, yet due to the limited
          opportunities elsewhere, it became one of few options for female
          artists to start their careers.
        </p>
        <p className="text-gray-700 mb-4">
          Thus, in 1925, artists like Celia Cruz had to be willing to very
          literally step into these male-dominated spaces and perform music
          despite it being frowned upon. Female artists like Celia Cruz had to
          risk sexual harassment, but also defy societal norms despite the
          stigma attached to their presence in these spaces.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-salsa mb-4">
          Colorism and Beauty Standards
        </h3>
        <p className="text-gray-700 mb-4">
          Another obstacle that female artists face is the expectation to
          conform to beauty standards. In society, women are often subjected to
          greater pressure to meet these ideals compared to men. Artists like
          Celia Cruz faced intersectional discrimination: as a dark-complexioned
          Afro-Cuban woman, Cruz encountered multiple overlapping forms of
          prejudice. To build a successful career as a performer, she had to
          overcome racialized beauty standards that devalued her skin color and
          features. Racism, sexism, and colorism within the music industry—and
          the culture at large—posed significant challenges for Cruz throughout
          her life.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-salsa mb-4">
          Keys to Success
        </h3>
        <p className="text-gray-700 mb-4">
          <strong>Strong musical ability:</strong> Several women who emerge as
          icons in this male-dominated industry demonstrate strong unrivaled
          musical prowess. Celia Cruz, for example, used her deep “percussive”
          contralto voice and improvisation ability to claim songs traditionally
          reserved for male vocalists. No male singer could challenge her
          vocally on stage, and this inherent talent is what carried her through
          many obstacles. Similarly, due to the extra scrutiny on female
          timbales players, Elizabeth Timbal had to prove her capabilities
          beyond her male counterparts and demonstrate exceptional technical
          skill. Even contemporary artist Daniela Darcourt demonstrates
          exceptional musical abilities, having been professionally trained
          since she was 8 years old.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Orchestra breakthroughs:</strong> Before emerging as solo
          artists, several female artists entered the industry as part of
          orchestras or groups. Both Celia Cruz and Yolanda Riviera first gained
          recognition as the lead vocalists for otherwise all-male orchestras
          called La Sonora Matancera and La Sonora Ponceña, respectively.
          Similarly, Gloria Estefan gained global recognition as a member of a
          largely male band, the Miami Sound Machine. More recently, there’s
          been a rise in all-female salsa bands and orchestras. Contemporary
          artists, Elizabeth Timbal and Daniela Darcourt both got their big
          breaks by joining all-female ensembles, Orquesta Canela and Son
          Tentación respectively. La India stands out as a solo artist who
          independently gained success.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Resilience and authenticity:</strong> Analyzing female artists
          over the course of a century, resilience and authenticity remain a
          common theme. Celia Cruz constantly asserted her cultural identity and
          joyous nature in her manner of dressing. La India did not shy away
          from sharing the female experience through her music, and while some
          critique her for harsh ‘male bashing’, she gained a large and powerful
          female audience by standing her ground and remaining authentic. Gloria
          Estefan refused to “water-down” cultural elements from her music, and
          her song “Conga” became a worldwide hit, reaching 10th rank on
          Billboard Hot 100.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Collaborative relationships:</strong> Collaborations with
          other famous artists helped several female artists boost and secure
          their position within the salsa industry. For example, through her
          network and work with Fania All Stars, Celia Cruz developed rich
          collaborative relationships with fellow artists, from veterans like
          Pacheco to newer faces like Willie Colón. She joined Tito Puente, Ray
          Barretto, and other Hispanic music legends. Similarly, more
          contemporary artists like Timbal and Darcourt were offered many
          opportunities to work with major artists, which earned them peer
          respect and established professional credibility. Darcourt
          collaborated with renowned salsa artists like La India, Tito Nieves,
          and N’Klabe.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-salsa mb-4">
          How have these challenges evolved?
        </h3>
        <p className="text-gray-700 mb-4">
          The challenges faced by women in salsa music have evolved
          significantly over the past century, reflecting societal and industry
          shifts. When Celia Cruz began her career in the 1950s, rigid gender
          roles confined women to supportive positions. Through talent,
          resilience, and a willingness to defy social norms, artists like Cruz,
          Yolanda Rivera, Gloria Estefan, and La India broke traditional
          barriers, paving the way for future generations. Over time, feminist
          movements and cultural shifts have opened up opportunities for women
          in salsa. Furthermore, digital platforms like social media have
          created new spaces for women, allowing contemporary artists like
          Daniela Darcourt to reach global audiences and bypass traditional
          gatekeeping of venues.
        </p>
        <p className="text-gray-700 mb-4">
          However, despite progress, many challenges persist. Opportunities in
          instrumentation, particularly percussion, remain male-dominated, and
          women are often perceived as inferior, as we saw in Elisabeth Timbal’s
          case. Double standards continue to exist even today, with female
          artists facing more criticism for their behavior and appearance. While
          the rise of all-female orchestras is imperative progress, it can
          restrict opportunities for solo artists and increase competition in
          the industry. Similarly, social media, while helpful, presents heavy
          competition and short attention spans.
        </p>
        <p className="text-gray-700 mb-4">
          Though intersectional barriers have lessened since Celia Cruz’s time,
          they still exist, and beauty standards continue to shape the
          experiences of female artists. The bottom line is that while
          significant progress has been made, the names of female artists in
          salsa remain scarce even today. Thus, highlighting their unique
          experiences, addressing the obstacles they encounter, and
          investigating how they can transcend these barriers is important. By
          honoring the legacy of female salsa icons, we hope to recognize their
          contributions and foster a deeper appreciation for the culture of
          salsa.
        </p>
      </section>
    </div>
  );
};

export default Home;
