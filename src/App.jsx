import React from "react";
import "./App.css";
import Add from "./pages/Add";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import AppFooter from "./components/AppFooter";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route exact path="/" component={Add} />
          <Route exact path="/add" component={Add} />
        </Switch>
      </Container>
      <AppFooter />
    </div>
  );
}

export default App;
