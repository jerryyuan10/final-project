import React from "react";
// import { Link } from "react-router-dom";
import HomeConfetti from "../components/home-confetti";
import "./home-page.css";

/**
 * Home page, add a button to change the SVOA word like a mini game of the create sentence.
 */

function HomePage(props) {
  const { word, setWord } = props;
  // console.log(props);
  // const [word, setWord] = useState("SVOA");
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

  const wordChange = () => {
    const randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];
    return setWord(randomWord);
  };

  return (
    <main>
      <HomeConfetti />
      <h1 id="h1">Welcome to {word} Game!</h1>
      <button id="click-me-button" onClick={wordChange}>
        <span role="img" aria-label="pointUp">
          👆Click me!👆
        </span>
      </button>
      <form id="start-button-center" method="get" action="/play">
        <button id="start-button" type="submit">
          START
        </button>
      </form>
      {/* <div id="start-button-center">
        <button id="start-button">
          <Link to="/play">START</Link>
        </button>
      </div> */}
    </main>
  );
}

export default HomePage;
