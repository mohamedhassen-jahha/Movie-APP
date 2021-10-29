import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardComp.css";
import ReactStars from "react-stars";

export default class CardComp extends Component {
  render() {
    return (
      <Card
        className="Card"
        style={{ width: "18rem", margin: "10px 0 10px 0" }}
      >
        <Card.Img
          style={{ height: "25rem" }}
          variant="top"
          src={this.props.img}
        />
        <Card.Body>
          <Card.Title>
            {`Name:  ${this.props.Title}`}
            <br />
            {`Year:  ${this.props.year}`}
          </Card.Title>
          <ReactStars
            className="StarsChange"
            count={5}
            size={30}
            edit={false}
            activeColor="#ffd700"
            value={this.props.rating / 2}
          />
        </Card.Body>
      </Card>
    );
  }
}
