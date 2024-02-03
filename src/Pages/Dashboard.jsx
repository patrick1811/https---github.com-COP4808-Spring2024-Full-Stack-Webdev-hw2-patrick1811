import React, { useState } from "react";
import cardPairs from "../Data/cardData"; 
import "../css/CardSet.css"; 

const CardSet = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const currentCard = cardPairs[currentCardIndex];
  const cardDifficultyClass = getCardDifficultyClass(currentCard);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextCard = () => {
    const randomIndex = Math.floor(Math.random() * cardPairs.length);
    setCurrentCardIndex(randomIndex);
    setIsFlipped(false);
  };

  function getCardDifficultyClass(card) {
    if (card && card.difficulty) {
      return `card-container ${card.difficulty}`;
    }
    return "card-container";
  }

  return (
    <div className={cardDifficultyClass}>
      <div className="topsec">
        <h2>The Ultimate Plant Parent!</h2>
        <p>How good of a plant parent are you? Test all of your planty knowledge here!</p>
        <p>Number of cards: {cardPairs.length}</p>
      </div>
      
      <div
        className={`card ${isFlipped ? "flipped" : ""} ${currentCard.difficulty}`}
        onClick={handleCardClick}
      >
        <div className="card-inner">
          <div className="card-front">
            <div>{currentCard.question}</div>
          </div>
          <div className="card-back">
            <div>{currentCard.answer}</div>
          </div>
        </div>
      </div>

      <button onClick={handleNextCard}>→ Next</button>
    </div>
  );
};

export default CardSet;
