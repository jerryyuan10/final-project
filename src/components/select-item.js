import React from "react";
// let sentence = "";
function SelectItem(props) {
  const { question, words, onAnswerSelected } = props;

  const onAnswerClick = (event) => {
    const showWords = event.target.innerHTML;
    onAnswerSelected(showWords);

    // console.log(showWords);
  };

  //   function addTitle(word) {
  //     sentence += word;
  //   }
  return (
    <div>
      <p>{question}</p>

      <ul>
        {words.map((answer) => {
          return (
            <li key={answer}>
              <button onClick={onAnswerClick}>{answer}</button>
            </li>
          );
        })}
      </ul>

      {/* <p>Select a Verb:</p>
      <ul>
        <li><button OnClick={addTitle("sitting")}> sitting</button></li>
        <li><button OnClick={addTitle("running")}>running</button></li>
      </ul> */}
    </div>
  );
}

export default SelectItem;
