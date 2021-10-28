import React, { Component } from "react";
import "./NavBar.css";
import { Navbar, Container, Nav } from "react-bootstrap";

export default class NavBar extends Component {
  showAdd = () => {
    this.props.setIsAddMovieShowing(!this.props.isAddMovieShowing);
  };

  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="Navig"
      >
        <Container>
          <Navbar.Brand href="#">IBEM MOVIE </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#movies">Movies</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">Learn more</Nav.Link>
              <Nav.Link eventKey={2} onClick={this.showAdd}>
                ADD A MOVIE
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
