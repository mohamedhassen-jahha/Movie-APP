import React from "react";
import CardComp from "./Card/CardComp";

import "./Cards.css";

function Cards({ Data }) {
  return (
    <div className="Cardsmain">
      {Data.map((el) => (
        <CardComp
          key={el.id}
          img={el.image.url}
          rating={el.rating}
          year={el.year}
          Title={el.title}
        />
      ))}
    </div>
  );
}

export default Cards;
