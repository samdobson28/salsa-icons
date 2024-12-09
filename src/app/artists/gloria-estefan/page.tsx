// src/app/artists/gloria-estefan/page.tsx

import React from "react";
import ArtistLayout from "../../../components/ArtistLayout";

const GloriaEstefanPage: React.FC = () => {
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

  // Keep the text EXACT. Only add headings where indicated.
  const biography = (
    <div className="text-gray-800 text-lg space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-salsa mb-2">
          Gloria Estefan
        </h2>
        <p>Gloria Estefan</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-salsa mb-2">Links:</h2>
        <p>
          {`https://en.wikipedia.org/wiki/Gloria_Estefan
https://826digital.com/resources/write-with-life-stories-singing-through-struggles-with-gloria-estefan/
https://www.youtube.com/watch?v=GQYwqAQRjf8
https://kbgo.iheart.com/featured/big-95-morning-show/content/2023-09-22-gloria-estefan-recalls-early-career-challenges/
https://www.cbsnews.com/news/gloria-estefan-life-career-meeting-her-husband-emilio-estefan/
https://www.thejustice.org/article/2023/12/gloria-estefan-the-epitome-of-strength-and-unity
https://chief.com/articles/gloria-estefan-proud-latina-hispanic-heritage-month/`}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-salsa mb-2">Research:</h2>
        <p>
          {`Music:
Cuban-American singer
eight-time Grammy Award winner
Songs: "1-2-3", "Don't Wanna Lose You", "Coming Out of the Dark", "Turn the Beat Around", and "Heaven's What I Feel"
lead singer of Miami Latin Boys, which was later renamed Miami Sound Machine. Signature song: “Conga”`}
        </p>
        <p>
          {`Family:
born Gloria María Milagrosa Fajardo García in Havana, Cuba
Estefan's maternal grandparents were Spanish immigrants
In 1961, Estefan's father José participated in the failed Bay of Pigs Invasion. He was captured by his cousin, who was a member of Fidel Castro's army, and imprisoned in Cuba for nearly two years. On his return, he joined the United States military and fought in the Vietnam War.
Estefan's father became ill with multiple sclerosis, attributed to Agent Orange exposure that he suffered in Vietnam. Estefan helped her mother care for him while her mother worked to support them.
Estefan became romantically involved with the Miami Sound Machine's band leader, Emilio Estefan, in 1976. They married on 2 September 1978, and have a son, Nayib , and a daughter, Emily. Emily was conceived after Gloria's devastating tour bus crash in 1990; doctors told her she would not be able to have any more children.`}
        </p>
        <p>
          {`Cuba:
Never returned since leaving as a toddler
Song: ‘Thankful’ (Album: ‘Estefan Family Christmas’).
‘Very strong emotional connection to Cuba. Cuba I know is the nostalgic Cuba of my mothers life. I was 2 when I left, so I really didn’t know Cuba. Very different from Cuba now.’
In response to what it would take to go back to Cuba now: “A free Cuba. An actual free Cuba.” She has been very vocal against the regime. She cannot stand there after what her father went through, knowing that the people there will still be suffering after she leaves.`}
        </p>
        <p>
          {`Music History:
Discovered by Emilio Estefan, who formed the back Miami Latin Boys. She joined the group and it was renamed Miami Sound Machine. 
1984 - Eyes of Innocence - 3 Top 10 hits in Billboard Top 100
1987 - Let it Loose - Multi-platinum - No. 1,3,5,6 of Hot 100 list.
1989 - the group’s name is dropped and she starts recording as a solo artist.
Late 1989 - Cuts both Ways - best selling album to date - "Don't Wanna Lose You" (Hot 100 No. 1 hit), "Oye Mi Canto", "Here We Are", "Cuts Both Ways" (No. 1 on the U.S. Hot Adult Contemporary Tracks chart), and "Get on Your Feet".
1990 - spine fracture and injury
1991 - Into the Light - Double Platinum
1993 - First Christmas Album - Christmas through your eyes. Went Platinum
1996 - Destiny - “Reach” was official theme of 1996 Atlanta Summer Olympics - performed that and “You’ll be mine” at closing ceremony.
1998 - gloria! - 8th solo album - blended disco with Salsa music percussion and Latin flavor. Featured with N’SYNC on ‘Music of my heart’
2003 - Unwrapped - 
2011 - Little Miss Havana - dance oriented album - collaborated with producers Pharrell Williams, Motiff, Emilio Estefan, and Drop Dead Beats
Transition to Spanish albums
1993 - first spanish album - Mi Tierra - No. 27 on the Billboard album chart and No. 1 on the Top Latin Albums chart. Multi - platinum. Grammy for Best Tropical Latin Album.
1995 - second Spanish-language album, Abriendo Puertas - Second Grammy Award for Best Tropical Latin Album - 2 No. 1 dance hits ("Abriendo Puertas" and "Tres Deseos") and 2 No. 1 Latin singles ("Abriendo Puertas" and "Más Allá").
2000 - Alma Caribeña (Caribbean Soul) - 3rd spanish album - focus on Caribbean rhythms - third Grammy Award for Best Traditional Tropical Latin Album
2007 - 90 Millas - title alludes to the distance between Miami and Cuba - album peaked at No.1 on the Billboard Top Latin Albums chart and was peaked at No. 25 on the Billboard 200 list -  Latin Grammy Award for Best Traditional Tropical Album and "Pintame de Colores" won the award for Best Tropical Song`}
        </p>
        <p>
          {`Obstacles:
Miami Sound Machine - 
convincing the record executives to let her and her band, Miami Sound Machine, record in English and keep their distinctive Latin sound
they were warned to strip their music of congas, horns, and anything remotely Latin if they wanted to cross over to the mainstream market.
"When we were already working on the song 'Conga,' we had to convince a record company to let us record in English. We had the material. We knew we could do it, so we're pitching our idea and the execs that were there at the time, they're going, 'You can't compete on a worldwide level. If you really want to cross over, you got to get rid of the percussion. You got to get rid of the horns. You got to change your name."
"Emilio and I are looking at him going, 'Really? That's who we are. So, if that's who we are, that's who we want to be a success as, not water down our culture or our sound or our music just to try to be someone else.' If I do that, and we're a success, I'm not going to be happy the rest of my life. We know this going to work."
"Conga" became a huge hit in 1985, reaching number 10 on the Billboard Hot 100 and number one on the Billboard Dance Club Songs chart. It also became the first single by a Latin group to cross over from the Latin charts to the pop charts in American music history. The song introduced millions of listeners to Gloria Estefan and Miami Sound Machine's unique blend of pop, dance, and Latin rhythms.
Father - 
Father arrested in Failed Bay of Pigs Invasion. Imprisoned for 2 years. Returns to the US and joins the Army, sent to Vietnam. Became ill with multiple sclerosis, attributed to Agent Orange exposure that he suffered in Vietnam. 
"So how did his illness shape your childhood?" - "Oh my gosh. It was the center of our lives. My mama had to work because she realized that my dad was only gonna get more ill," she said. "And then I cared for my dad and my younger sister….Like, from the age of 12 to 18, 19, it was him."
Music became her "catharsis" and her "everything."
Band bus hit by truck - 
1990 - her tour bus is hit by a semi-truck - she fractured her spine - was paralyzed.
"I was taking a nap on the couch in the front of the bus. My son was in the back with his tutor….Emilio was on the phone with his brother who was reading him the caption of the picture on the cover of the Miami Herald, 'Gloria and Emilio Estefan have the world in their hands,'" she recalled. "And right when he reads him that line, we got rear-ended by a fully-loaded 18-wheeler."
"They said, 'You probably won't be able to have another child.' 'Cause that was my plan after that tour. And he says, 'I'm hoping that you'll at least be able to walk gingerly, but I don't think you'll ever be back on stage.' And then he said to me, 'I can tell you that it's up to you.'"
Less than a year after the crash, Estefan walked onto the stage of the American Music Awards.
Sexual Abuse : 
When Estefan was nine, she alleged that a music teacher hired to teach her guitar lessons sexually abused her.[26] She alleged that the man told her that he would kill her mother if she told anyone about the abuse. Estefan told her mother who alerted the police of the allegation; charges were not pressed because of the additional trauma she felt Estefan would undergo as a result of testifying against the perpetrator.
It was her father’s cousin who had a classical music school. She went to learn classical guitar. It took her a year to tell her parents. The anxiety caused her to lose her hair.`}
        </p>
        <p>
          {`Awards:
3 grammy awards
Ellis Island Medal of Honor - highest award that can be given to a naturalized U.S. citizen
American Music Award for Lifetime Achievement
honored twice by the Songwriters Hall of Fame
Latin Recording Academy Person of the Year award at the Latin Grammy Awards
Estefan, along with her husband, were awarded the Presidential Medal of Freedom by President Barack Obama for her contributions to American music.`}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-salsa mb-2">
          Origins, Music Inspirations, Early Career:
        </h2>
        <p>
          {`Gloria Estefan is a Cuban-American contralto, and one of the best selling singers of all time. She has been named to the Top 100 greatest artists of all time by Billboard and VH1. Singing in both Spanish and English, her albums have topped the charts, with over 100 million sold worldwide. Outside of music, she is also a renowned actress, author and activist.

Estefan was born in Havana, Cuba, in 1957. Her family fled from Cuba to Miami in 1959, escaping the Cuban revolution. Estefan took up guitar at an early age, using it as a catharsis. Her father was diagnosed with multiple sclerosis when she was young, and Estefan was charged with taking care of him and her younger sister while her mother worked. Music became her escape. She is also said to have musical influences on her paternal side, with one relative being a famous flautist and another a classical pianist.

In 1975, while attending the University of Miami, Gloria was seen by Emilio Estefan performing with her church ensemble at a rehearsal. She was invited to audition for his recently formed band, Miami Latin Boys. They were so impressed, she was asked to join the band permanently, and they were renamed ‘Miami Sound Machine’. A student, Estefan agreed to only perform nights and weekends so she could continue her studies.

From 1997 to 1989, the group recorded and released several hit albums and singles. Their album, Primitive Love, included 3 Top 10 hits on the Billboard Top 100: "Conga" (U.S. No. 10), "Words Get in the Way" (U.S. No. 5), and "Bad Boy" (U.S. No. 8), as well as "Falling in Love (Uh-Oh)" (U.S. No. 25). "Words Get in the Way" reached No. 1 on the US Hot Adult Contemporary Tracks chart. Their next album, Let it Loose, went multi-platinum, with many hit songs as well.`}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-salsa mb-2">
          Overcoming Challenges:
        </h2>
        <p>
          {`After escaping from Cuba and settling in Miami, Estefan’s father returned to Cuba as part of the failed Bay of Pigs Invasion. He was arrested and imprisoned for 2 years. After returning to the US, he joined the Army, and served in Vietnam. After returning, he was diagnosed with Multiple Sclerosis, attributed to his exposure to Agent Orange while in Vietnam.

Estefan’s childhood revolved around caring for her father and younger sister while her mother worked to provide for her family. During this time, music served as her catharsis and escape. She took up the guitar, and would practice in her room in her free time. She eventually joined her church’s ensemble band, as the vocalist.

After eventually joining Miami Sound Machine, with her to-be husband Emilio, Estefan and band struggled to convince their record label to allow them to keep their distinctive latin sound after they were warned to strip their music of congas, horns, and anything remotely Latin. Estefan and her husband were determined that they could penetrate the mainstream market by still recording in English, and refused to “water-down” their culture and sound. Their song, ‘Conga’, went on to become a world-wide hit and reached number 10 on the Billboard Hot 100 and number one on the Billboard Dance Club Songs chart. It also became the first single by a Latin group to cross over from the Latin charts to the pop charts in American music history. The song introduced millions of listeners to Gloria Estefan and Miami Sound Machine's unique blend of pop, dance, and Latin rhythms.

Eventually, after going solo in 1990, Estefan became a global presence in the industry. Coming off the release of her best selling album to date, ‘Cuts Both Ways’, Estefan’s tour bus crashed into a semi-truck during a snowstorm. Estefan was critically injured, fracturing her spine and requiring emergency surgery to install two titanium rods into her vertebra. She was warned by doctors that she would hopefully be able to walk again, much less perform on stage. However, after a year of intensive physical therapy, she returned to the stage at the American Music Awards where she received a standing ovation. She performed ‘Coming Out of the Dark’, a single off her new concept album, Into the Light. The song reached No. 1 on the Billboard Top 100, and the album eventually went double platinum.

When she was 9, Estefan was sent to her father’s cousin’s classical music school to learn classical guitar. She was sexually abused by her teacher, who threatened to kill her mother if she reported the abuse to anyone. Under immense stress, Estefan began to lose her hair, and eventually after a year she told her parents of the abuse. They reported it to the police, however Estefan and her parents chose not to press charges due to the additional trauma Estefan would undergo in order to testify against the perpetrator.`}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-salsa mb-2">
          Success, Awards and Honors:
        </h2>
        <p>
          {`Throughout her career, Estefan received 3 Grammy Awards for her albums, along with 5 Latin Grammy awards. She was honored with the Latin Recording Academy Person of the Year award in 2008 in recognition of her twenty-five-year singing career. She is the first female singer to receive this award. She has also received the Ellis Island Medal of Honor, the highest honor that can be given to a naturalized US citizen. In 2015, she, along with her husband, also received the Presidential Medal of Freedom from President Obama for their contributions to American Music.

Establishing herself as one of the greatest artists of all time, Estefan has also been honored twice by the Songwriters Hall of Fame. In 2022, she was inducted into the Female Songwriters Hall of Fame, and in 2023 into the Songwriters Hall of Fame, becoming the first Hispanic to do so.

Throughout her career, Estefan has also received several other honors and awards.`}
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
