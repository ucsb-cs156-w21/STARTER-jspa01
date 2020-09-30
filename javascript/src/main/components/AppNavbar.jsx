import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const AppNavbar = () => {
  return (
    <Navbar className="navbar-light bg-light mr-auto">
      <LinkContainer style={{ marginLeft: "15%" }} to="/">
        <Navbar.Brand>React Rational Calculator</Navbar.Brand>
      </LinkContainer>
      <Nav>
        <LinkContainer to="/add">
          <Nav.Link>Add</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/subtract">
          <Nav.Link>Subtract</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/multiply">
          <Nav.Link>Multiply</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/divide">
          <Nav.Link>Divide</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default AppNavbar;
