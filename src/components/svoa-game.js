import React, { useState } from "react";
import ShowSentence from "./show-sentence";
import SelectItem from "./select-item";
import chooseWords from "../data/choose-words";
import { motion, AnimatePresence } from "framer-motion";

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
      <AnimatePresence exitBeforeEnter={true}>
        <motion.div
          key={selectIndex}
          initial={{ opacity: 0, transition: { ease: "easeOut" } }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { delay: 0.5, ease: "easeIn" },
          }}
          transition={{ duration: 0.25 }}
        >
          <SelectItem
            question={question}
            words={words}
            onAnswerSelected={onAnswerSelected}
          />
        </motion.div>
      </AnimatePresence>
      <ShowSentence sentence={sentence} setSentence={setSentence} />
    </div>
  );
}

export default SvoaGame;
