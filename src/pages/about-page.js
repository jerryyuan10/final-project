import React from "react";
import "./about-page.css";
import dinosaurs from "../images/crocodile.png";

/**
 * About page to indroduce what is SOVA game.
 */
function AboutPage() {
  return (
    <main>
      <h2>What is SVOA game?</h2>
      <div id="introduction">
        <p>
          A SVOA game repreicents the Subject-Verb-Object-Adverbial Phrase
          constructions, e.g. “The boy ate an apple in the kitchen.”
        </p>

        <p>
          This game is designed to help support people who need help with these
          sentences, and features high frequency, present tense verbs to help
          stimulate oral language development.
        </p>
      </div>
      <h2>What you will gain from this game:</h2>
      <ul className="svoa-list">
        <li>Happiness</li>
        <li>Knowledge</li>
        <li>The basic rules of sentences</li>
      </ul>
      <p>
        * You can buy sentence builder cards from{" "}
        <a
          href="https://www.amazon.com/Key-Education-846026-Sentence-Building/dp/1602680132"
          title="Carson Dellosa – Sentence Building Literacy Resource with 86 Cards for Language Arts For K, 1st, & 2ND Grade & Ell"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amazon
        </a>
        .
      </p>
      <div id="crocodile">
        <img src={dinosaurs} alt="Crocodile" width="650px" />
      </div>
      <h2>Leave a message to us:</h2>
      <form className="comments">
        <div className="comments_row">
          <label className="comments_lable">First Name:</label>
          <input className="comments_input" type="text" />
        </div>
        <div className="comments_row">
          <label className="comments_lable">Last Name:</label>
          <input className="comments_input" type="text" />
        </div>
        <div className="comments_row">
          <label className="comments_lable">E-mail: </label>
          <input className="comments_input" type="text" />
        </div>
        <div className="comments_row">
          <label className="comments_lable">Comments:</label>
          <textarea className="comments_input" rows="4" cols="40" />
        </div>
        <div className="comments_row">
          <input className="comments_submit" type="submit" value="Submit" />
        </div>
      </form>
    </main>
  );
}

export default AboutPage;
