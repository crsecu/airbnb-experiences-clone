import React from "react";
import star from "../images/star.png";

export default function Card({id, title, price, coverImg, rating, reviewCount, location, openSpots}) {
    const checkAvailability = openSpots > 0 ? '' : "SOLD"
  return (
      <div href="#" className="card">
        <div className="card__image-container" id = {id}>
            <img className = "card__image" src={`../images/${coverImg}`} alt="" />
            {openSpots < 1 && <span className = "card__tag">SOLD OUT</span>}
        </div>
        <img className = "card__exp-star" src={star}/>
        <span className="card__exp-rating">{rating}</span>
        <span className="card__exp-available">({reviewCount}) • </span>
        <span className="card__exp-location">{location}</span>
        <h2 className="card__exp-name">{title}</h2>
        <span className="card__exp-price">From ${price}</span>
        <span>/person</span>
      </div>
  );
}

