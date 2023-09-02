// src/components/Section.js

import React, { useState } from 'react';
import Card from './card';

const Section = ({ sectionData }) => {
  const [showAllCards, setShowAllCards] = useState(false);

  return (
    <div className={`section ${sectionData.cN}`}>
      <h2>{sectionData.title}</h2>
      {sectionData.cards
        .slice(0, showAllCards ? sectionData.cards.length : 3)
        .map((card) => (
          <Card key={card.id} cardData={card} />
        ))}
      {sectionData.cards.length > 3 && (
        <button onClick={() => setShowAllCards(!showAllCards)}>
          {showAllCards ? 'See Less' : 'See More'}
        </button>
      )}
    </div>
  );
};

export default Section;
