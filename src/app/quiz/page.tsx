"use client";

import React, { useState } from "react";
import Link from "next/link";

const artists = [
  { key: "celia-cruz", name: "Celia Cruz" },
  { key: "elisabeth-timbal", name: "Elisabeth Timbal" },
  { key: "la-india", name: "La India" },
  { key: "daniela-darcourt", name: "Daniela Darcourt" },
  { key: "gloria-estefan", name: "Gloria Estefan" },
  { key: "yolanda-rivera", name: "Yolanda Rivera" },
];

interface Question {
  question: string;
  answers: {
    text: string;
    artistKeys: string[]; // Multiple artists can gain points
  }[];
}

const questions: Question[] = [
  {
    question: "Which setting best resonates with your soul?",
    answers: [
      {
        text: "A legendary Caribbean nightclub full of dancers",
        artistKeys: ["celia-cruz", "la-india"],
      },
      {
        text: "A contemporary Latin festival celebrating fresh talent",
        artistKeys: ["elisabeth-timbal", "daniela-darcourt"],
      },
      {
        text: "A grand international stage blending Latin sounds with global pop",
        artistKeys: ["gloria-estefan"],
      },
      {
        text: "A historic salsa orchestra performance in a traditional setting",
        artistKeys: ["yolanda-rivera", "celia-cruz"],
      },
    ],
  },
  {
    question: "What quality in an artist moves you the most?",
    answers: [
      {
        text: "Pioneering female instrumentalists in percussion",
        artistKeys: ["elisabeth-timbal"],
      },
      {
        text: "Infusing music with cultural empowerment and identity",
        artistKeys: ["la-india", "celia-cruz"],
      },
      {
        text: "Expanding the genre’s reach to global audiences",
        artistKeys: ["gloria-estefan", "daniela-darcourt"],
      },
      {
        text: "Staying authentic and timeless through decades",
        artistKeys: ["yolanda-rivera", "celia-cruz"],
      },
    ],
  },
  {
    question: "What kind of musical style do you prefer?",
    answers: [
      {
        text: "Classic Afro-Cuban flair rooted in tradition",
        artistKeys: ["celia-cruz", "yolanda-rivera"],
      },
      {
        text: "Modern salsa with a twist of urban and pop",
        artistKeys: ["daniela-darcourt", "gloria-estefan"],
      },
      {
        text: "Percussion-driven rhythms that break boundaries",
        artistKeys: ["elisabeth-timbal"],
      },
      {
        text: "Anthemic songs celebrating female strength",
        artistKeys: ["la-india"],
      },
    ],
  },
  {
    question: "Which place inspires you the most?",
    answers: [
      {
        text: "Havana’s vibrant streets and Afro-Cuban roots",
        artistKeys: ["celia-cruz"],
      },
      {
        text: "The progressive Latin music scene of Miami",
        artistKeys: ["gloria-estefan", "daniela-darcourt"],
      },
      {
        text: "The salsa capital Cali, bringing rhythmic innovation",
        artistKeys: ["elisabeth-timbal", "la-india"],
      },
      {
        text: "Old-school clubs in Puerto Rico’s music hubs",
        artistKeys: ["yolanda-rivera", "la-india"],
      },
    ],
  },
];

const QuizPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<{ [key: string]: number }>({});
  const [showResult, setShowResult] = useState(false);
  const [resultArtistKey, setResultArtistKey] = useState("");

  const handleAnswer = (artistKeys: string[]) => {
    setScores((prev) => {
      const newScores = { ...prev };
      artistKeys.forEach((key) => {
        newScores[key] = (newScores[key] || 0) + 1;
      });
      return newScores;
    });

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      computeResult();
    }
  };

  const computeResult = () => {
    let highestScore = -1;
    let topArtistKey = "";
    for (const artistKey in scores) {
      if (scores[artistKey] > highestScore) {
        highestScore = scores[artistKey];
        topArtistKey = artistKey;
      }
    }
    setResultArtistKey(topArtistKey);
    setShowResult(true);
  };

  const getArtistName = (key: string) => {
    const artist = artists.find((a) => a.key === key);
    return artist ? artist.name : "an artist";
  };

  if (showResult) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-6">Your Artist Match:</h1>
        <p className="text-2xl mb-4">{getArtistName(resultArtistKey)}</p>
        {resultArtistKey && (
          <Link
            href={`/artists/${resultArtistKey}`}
            className="inline-block px-4 py-2 bg-salsa text-white font-semibold rounded hover:bg-salsa-dark"
          >
            Visit {getArtistName(resultArtistKey)}'s Page
          </Link>
        )}
        <button
          className="mt-6 ml-4 px-4 py-2 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700"
          onClick={() => {
            setScores({});
            setCurrentQuestionIndex(0);
            setShowResult(false);
          }}
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Find Your Salsa Icon Match!
      </h1>
      <div className="max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">
          {currentQuestion.question}
        </h2>
        <ul className="space-y-4">
          {currentQuestion.answers.map((answer, idx) => (
            <li key={idx}>
              <button
                className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded"
                onClick={() => handleAnswer(answer.artistKeys)}
              >
                {answer.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuizPage;
