import React from 'react';
import heroImg from '../images/hero.png'

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__img-container">
            <img className="hero__img"src={heroImg} alt="" />
            </div>
            
            <h1 className="hero__header">Online Experiences</h1>
            <p className="hero__text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
        </section>
        
    )
}