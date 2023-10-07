import React from 'react';
import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data.js'


export default function App() {
  
  const cards = data.map(item => {
    return (
      <Card
       key = {item.id}
       id = {item.id}
       title = {item.title}
       price = {item.price}
       coverImg = {item.coverImg}
       rating = {item.stats.rating}
       reviewCount = {item.stats.reviewCount}
       location = {item.location}
       openSpots = {item.openSpots}
       />
    )
  })
  
  return (
    <div>
       <Nav />
       <Hero />
       <section className='cards-list'>
         {cards}
       </section>
    </div>
      
  );
}

