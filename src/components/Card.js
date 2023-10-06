import React from "react";
import profilePicture from "../images/profile-pic.png";
import star from "../images/star.png";

export default function Card() {
  return (
    <section>
      <a href="https://google.com" className="card">
        <div className="card__image-container">
            <img className = "card__image"src={profilePicture} alt="" />
            <span className = "card__tag">SOLD OUT</span>
        </div>
        <img className = "card__exp-star" src={star}/>
        <span className="card__exp-rating">5.0</span>
        <span className="card__exp-available">(6) • </span>
        <span className="card__exp-location">USA</span>
        <h2 className="card__exp-name">Life lessons with Katie Zaferes</h2>
        <span className="card__exp-price">From $136</span>
        <span>/person</span>
      </a>
    </section>
  );
}
