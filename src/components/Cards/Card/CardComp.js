import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardComp.css";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";

export default class CardComp extends Component {
  id = this.props.id;
  render() {
    return (
      <Card className="Card" style={{ width: "14rem", margin: "10px 0 0px 0" }}>
        <Card.Img
          style={{ height: "19rem" }}
          variant="top"
          src={this.props.img}
        />
        <Card.Body>
          {`Name:  ${this.props.Title}`}
          <br />
          {`Year:  ${this.props.year}`}
        </Card.Body>
        <ReactStars
          className="StarsChange"
          count={5}
          size={30}
          edit={false}
          activeColor="#ffd700"
          value={this.props.rating / 2}
        />
        <Link exact to={`/movies/${this.id}`} className="ModalbtnClose">
          More
        </Link>
      </Card>
    );
  }
}
