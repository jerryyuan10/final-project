import React, { useState } from "react";
import ShowSentence from "./show-sentence";
import SelectItem from "./select-item";
import chooseWords from "../data/choose-words";

function SvoaGame() {
  const [selectIndex, setSelectIndex] = useState(0);
  const [showWords, setShowWords] = useState("");

  const currentSelectWord = chooseWords[selectIndex];
  const { words, question } = currentSelectWord;

  const onAnswerSelected = (showWords) => {
    console.log(showWords);
    setSelectIndex(selectIndex + 1);
    setShowWords(showWords);
  };

  return (
    <div>
      <SelectItem
        question={question}
        words={words}
        onAnswerSelected={onAnswerSelected}
      />
      <ShowSentence showWords={showWords} setShowWords={setShowWords} />
    </div>
  );
}

export default SvoaGame;
