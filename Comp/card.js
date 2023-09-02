// Card.js
import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="card">
      <h3>{data.card_title}</h3>
      {/* Render card content based on data_type */}
      {data.data_type === 'progress' && (
        <div className="progress-bar" style={{ width: `${data.data_value}%` }}>
          {data.data_value}%
        </div>
      )}
      {data.data_type === 'number' && <p>Number: {data.data_value}</p>}
      {data.data_type === 'text' && <p>{data.data_value}</p>}
      {data.data_type === 'tags' && (
        <ul>
          {data.data_value.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      )}
      {data.data_type === 'image' && (
        <img src={data.data_value} alt={data.card_title} />
      )}
      {/* Render buttons or links if necessary */}
      {data.button && <button>{data.button_name}</button>}
      {data.link && <a href={data.redirect}>{data.link_name}</a>}
      {/* Additional content for the card */}
      {data.note && <p>Note: {data.note}</p>}
    </div>
  );
};

export default Card;
