import React from "react";
import CardComp from "./Card/CardComp";
import "./Cards.css";

function Cards({ Data, searchByName, searchByRate }) {
  return (
    <div className="Cardsmain">
      {Data.filter(
        (el) =>
          el.title.toLowerCase().includes(searchByName.toLowerCase()) &&
          el.rating <= searchByRate
      ).map((el) => (
        <CardComp
          key={el.id}
          img={el.image.url}
          rating={el.rating}
          year={el.year}
          Title={el.title}
          id={el.id}
        />
      ))}
    </div>
  );
}
export default Cards;
