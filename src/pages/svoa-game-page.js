import React from "react";
import SvoaGame from "../components/svoa-game";

/**
 * The main game page.
 */

function SavoGamePage(props) {
  // const word = props.word;
  // console.log(props);
  return (
    <main>
      <SvoaGame />

      {/* <div>You've got, {props.word}!</div> */}
    </main>
  );
}

export default SavoGamePage;
