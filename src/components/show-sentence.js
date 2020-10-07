import React from "react";
import "./show-sentence.css";

/**
 * It will show the created sentence by the player.
 */

function ShowSentence(props) {
  const { sentence } = props;
  return (
    <main>
      <div className="show-sentence">
        <p>Here's the sentence:</p>
        <p id="show-sentence_words">{sentence}.</p>
      </div>
    </main>
  );
}

export default ShowSentence;
