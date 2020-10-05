import React from "react";

/**
 * This page is the user's created page that need to combine all the words together.
 */

function ShowSentence(props) {
  const { showWords } = props;
  return (
    <main>
      <p>Here's the sentence: {showWords}.</p>
    </main>
  );
}

export default ShowSentence;
