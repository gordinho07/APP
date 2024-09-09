import React, { useState, useEffect } from 'react';
import { View, Image, Text, Button } from 'react-native';

const MVV = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      image: require('./assets/missao.jpeg'),
    },
    {
      image: require('./assets/visao.jpeg'),
    },
    {
      image: require('./assets/valores.jpeg'),
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % cards.length);
    }, 2000); // change card every 6 seconds
    return () => clearInterval(intervalId);
  }, [currentIndex, cards]);

  return (
        <Image source={cards[currentIndex].image} style={{ width: '100%', height: 250, borderRadius: 10, }} />
  );
};

export default MVV;