import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardComp.css";

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
            <br />
            {`Rating:  ${this.props.rating}`}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
