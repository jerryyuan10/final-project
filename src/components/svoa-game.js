import React, { useState } from "react";
import ShowSentence from "./show-sentence";
import SelectItem from "./select-item";
import chooseWords from "../data/choose-words";

/*
 ** Page of the sova game.
 */

function SvoaGame() {
  const [selectIndex, setSelectIndex] = useState(0);
  const [sentence, setSentence] = useState("");

  const currentSelectWord = chooseWords[selectIndex];
  const { words, question } = currentSelectWord;

  const onAnswerSelected = (selectedWord) => {
    // console.log(sentence);
    setSelectIndex(selectIndex + 1);
    setSentence(sentence + " " + selectedWord);
  };

  return (
    <div>
      <SelectItem
        question={question}
        words={words}
        onAnswerSelected={onAnswerSelected}
      />
      <ShowSentence sentence={sentence} setSentence={setSentence} />
    </div>
  );
}

export default SvoaGame;
