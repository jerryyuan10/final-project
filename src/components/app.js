import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import SavoGamePage from "../pages/svoa-game-page";
import HomePage from "../pages/home-page";
import AboutPage from "../pages/about-page";

/**
 * The app is responsible for routing and loading the appropriate page within the application.
 */
function App() {
  const [word, setWord] = useState("SVOA");

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/play">
          <SavoGamePage word={word} />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/">
          <HomePage word={word} setWord={setWord} />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
