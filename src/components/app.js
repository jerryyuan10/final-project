import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import SavoGamePage from "../pages/savo-game-page";
import HomePage from "../pages/home-page";
import AboutPage from "../pages/about-page";

/**
 * The app is responsible for routing and loading the appropriate page within the application.
 */
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/play">
          <SavoGamePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
