import React, { useState } from "react";
import Card from '../Card';
import './style.css';
let active = 0;
function Features() {
  const [card, setCard] = useState(0);
  
  

  function changeCard(x) {
    const buttons = document.querySelectorAll('.buttons-features button');
    if (x != active) { 
      console.log(buttons[active]);
      console.log(active);
      buttons[active].className = ' ';
    }
    buttons[x].classList = ('active');
    active = x;
    setCard(x);
  }

  return (
    <section>
      <div className="container">
        <div className="title-features">
          <h2>Features</h2>
          <p> Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>
        <div className="buttons-features">
          <button className="active" onClick={() => (changeCard(0))}>Simple Bookmarking</button>
          <button onClick={() => (changeCard(1))}>Speedy Searching</button>
          <button onClick={() => (changeCard(2))}>Easy Sharing</button>
        </div>
        <Card id={card} />
      </div>
    </section>
  );
}

export default Features;