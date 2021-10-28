// import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Row, Toast } from "react-bootstrap";
import "./PopUp.css";

function PopUp({ setPopUp, PopsUp, PopsUpValue }) {
  // const [show, setShow] = useState(true);
  console.log(setPopUp);
  console.log(PopsUp);
  return (
    <Row className="Popup">
      <Col md={12}>
        <Toast
          onClose={() => setPopUp(false)}
          show={PopsUp}
          delay={4000}
          autohide
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body> {PopsUpValue}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default PopUp;