import React, { useEffect, useState } from 'react';
import Banner from './Comp/Banner';
import Section from './Comp/section';
import Card from './Comp/card';
import './App.css'; // Style your components here
import data from './data.json';

const {bannerArray,sectionArray,cardArray} = data;



function Assignment() {
  const [banners, setBanners] = useState([]);
  const [sections, setSections] = useState([]);
  const [cards, setCards] = useState([]);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  
  useEffect(() => {
    // Fetch JSON data
    fetch('http://localhost:3000/data.json').then((response) => response.json())
      .then((datak) => {
        setBanners(datak.bannerArray);
        setSections(datak.sectionArray);
        setCards(datak.cardArray);
      })
      .catch((error) => console.error('Error fetching data: ' + error));
  }, []);

  // Implement logic to slide banners
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Change banner every 5 seconds

    return () => {
      clearInterval(slideInterval);
    };
  }, [banners]);

  return (
    <div className="App">
      <div className="banners">
        {banners.map((banner, index) => (
          <Banner key={banner.id} data={banner} isVisible={index === currentBannerIndex} />
        ))}
      </div>
      <div className="sections">
        {sections.map((section) => (
          <Section key={section.id} sectionData={section} />
        ))}
      </div>
      <div className="cards">
        {cards.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
    </div>
  );
}

export default Assignment;
