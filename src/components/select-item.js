import React from "react";
import "./select-item.css";

/**
 * Player choose the words.
 */

function SelectItem(props) {
  const { question, words, onAnswerSelected } = props;

  const onAnswerClick = (event) => {
    const sentence = event.target.innerHTML;
    onAnswerSelected(sentence);
  };

  return (
    <div className="select-item">
      <p className="select-item_question">{question}</p>

      <ul className="select-item_words">
        {words.map((answer) => {
          return (
            <li key={answer} className="select-item_words">
              <button onClick={onAnswerClick} className="select-item_button">
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SelectItem;
