import React from "react";
import "main/App.css";
import Add from "main/pages/Add";
import Subtract from "main/pages/Subtract";
import Multiply from "main/pages/Multiply";
import Divide from "main/pages/Divide";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import AppNavbar from "main/components/AppNavbar";
import AppFooter from "main/components/AppFooter";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route exact path="/" component={Add} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/subtract" component={Subtract} />
          <Route exact path="/multiply" component={Multiply} />
          <Route exact path="/divide" component={Divide} />
        </Switch>
      </Container>
      <AppFooter />
    </div>
  );
}

export default App;
