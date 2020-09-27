import React from "react";
import "App.css";
import Add from "pages/Add";
import Subtract from "pages/Subtract";
import Multiply from "pages/Multiply";
import Divide from "pages/Divide";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import AppNavbar from "components/AppNavbar";
import AppFooter from "components/AppFooter";

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
