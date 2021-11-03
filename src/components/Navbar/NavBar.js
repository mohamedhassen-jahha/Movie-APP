import React, { Component } from "react";
import "./NavBar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <Navbar.Brand className="Navlogo">IMDb</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" exact to="/movies">
                Movies
              </Link>
            </Nav>
            <Nav>
              <Link
                className="nav-link movieAdd"
                eventKey={2}
                onClick={this.showAdd}
                to={this.props.isAddMovieShowing ? "/" : "/addmovie"}
              >
                ADD A MOVIE
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
