import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalStyle from "./styles/global";

import Header from "./componests/Header";
import Home from "./pages/Home";
import Footer from "./componests/Footer";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Helmet>
        <html lang="pt-BR" amp />
        <meta charSet="utf-8" />
        <title>Yousekai App</title>
      </Helmet>

      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>

      <Footer />

      <GlobalStyle />
    </Router>
  );
}

export default App;
