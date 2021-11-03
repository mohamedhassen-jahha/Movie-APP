import React from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Description.css";

function Description(props) {
  const newData = props.Data.filter(
    (el) => el.id.toLowerCase() === `${props.url}/`
  );
  const filtredData = newData[0];

  return (
    <Modal show={true} dialogClassName="modal-90w Modal-style">
      <Modal.Header>
        <Modal.Title id="modal-title">
          Description: {filtredData.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="Modal-style-body">
        <div className="Modal-style-core">
          <img src={filtredData.image.url} alt="img" className="modal-img" />
          <div>
            <h5>
              Title: <br />
              {filtredData.title}
            </h5>
            <br />
            <h5>
              Year: <br />
              {filtredData.year}
            </h5>
            <br />

            <h5>
              Rating: <br />
              {filtredData.rating}
            </h5>
            <br />

            <h5>
              Type: <br />
              {filtredData.titleType}
            </h5>
            <br />

            <h5>
              Running Time In Minutes: <br />
              {filtredData.runningTimeInMinutes}
            </h5>
          </div>
        </div>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KPLWWIOCOOQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Link exact to="/movies" className="ModalbtnClose">
          Back
        </Link>
      </Modal.Footer>
    </Modal>
  );
}
Description.defaultProps = {
  title: "N/A",
  year: "N/A",
  rating: "N/A",
  titleType: "N/A",
  runningTimeInMinutes: "N/A",
};

export default Description;
