import React from "react";
import "./App.css";
import Calculator from "./pages/Calculator";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route exact path="/" component={Calculator} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
