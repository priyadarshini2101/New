// Banner.js
import React from 'react';

const Banner = ({ data }) => {
  return (
    <div className="banner">
      <h2>{data.text}</h2>
      {data.button && data.btn_typ === "redirect" ? (
        <a href={data.link} className="banner-button">
          {data.btn_name}
        </a>
      ) : null}
    </div>
  );
};

export default Banner;
