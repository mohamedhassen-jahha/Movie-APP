import React, { Component } from "react";
import { Form, Row, Col, Modal } from "react-bootstrap";
import "./AddMenu.css";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

export default class AddMenu extends Component {
  state = {
    id: null,
    title: "",
    rating: 0,
    year: "",
    image: {
      url: "",
    },
  };

  closeModal = () => {
    this.props.setIsAddMovieShowing(false);
  };

  movieAddedHendler = (newMovie) => {
    this.props.addMovie(newMovie);
    this.props.setPopUpValue("New film added to local state");
    this.props.setPopUp(!this.props.PopUp);
    this.closeModal();
  };
  movieErrorHendler = (err) => {
    this.props.setPopUpValue(err);
    this.props.setPopUp(!this.props.PopUp);
  };

  submitMovie = (e) => {
    const newMovie = {
      id: uuidv4(),
      title: this.state.title,
      year: this.state.year,
      rating: this.state.rating,
      image: this.state.image,
    };

    const validation =
      newMovie.title !== "" &&
      newMovie.year !== "" &&
      newMovie.rating !== "" &&
      newMovie.image !== "";

    validation
      ? isNaN(Number(newMovie.rating))
        ? this.movieErrorHendler("Rating should be a number")
        : this.movieAddedHendler(newMovie)
      : this.movieErrorHendler("You need to fill all the Fields to submit");
  };

  render() {
    return (
      <div className="ModalStyle">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>ADDING A MOVIE</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>MOVIE NAME</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Movie name"
                    onChange={(e) =>
                      this.setState({ title: e.target.value.trim() })
                    }
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridYear">
                  <Form.Label>YEAR</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Year"
                    onChange={(e) =>
                      this.setState({ year: e.target.value.trim() })
                    }
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridRating">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  placeholder="From 1 To 10"
                  onChange={(e) =>
                    this.setState({ rating: e.target.value.trim() })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridUrl">
                <Form.Label>IMAGE URL</Form.Label>
                <Form.Control
                  placeholder="https://www.website.com/imglink..."
                  onChange={(e) =>
                    this.setState({ image: { url: e.target.value.trim() } })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Link
              className="ModalbtnClose"
              exact
              to="/movies"
              onClick={(e) => {
                this.submitMovie(e);
              }}
            >
              Add
            </Link>
            <Link
              className="ModalbtnClose"
              exact
              to="/movies"
              onClick={this.closeModal}
            >
              Close
            </Link>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}
