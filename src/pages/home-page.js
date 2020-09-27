import React, { useState } from "react";

/**
 * Home page, add a button to change the SVOA word like a mini game of the create sentence.
 */

function HomePage() {
  const [word, setWord] = useState("SVOA");
  const wordArr = [
    "SAVO",
    "AVOS",
    "VOAS",
    "SOVA",
    "AVSO",
    "VOSA",
    "VAOS",
    "VASO",
    "OVAS",
    "OASV",
    "OSVA",
    "OVSA",
    "OAVS",
    "OSAV",
    "SOAV",
    "SOVA",
    "AOSV",
    "ASVO",
    "AOVS",
    "ASOV",
    "SAOV",
  ];
  const randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];

  const wordChange = () => {
    return setWord(randomWord);
  };

  return (
    <main>
      <h1>Welcome to {word}!</h1>
      <button onClick={wordChange}>
        <span role="img" aria-label="pointUp">
          👆Click me!👆
        </span>
      </button>
      <br />
      <br />
      <br />
      <button>START</button>
    </main>
  );
}

export default HomePage;
