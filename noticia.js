import React, { useState, useEffect } from 'react';
import { View, Image, Text, Button } from 'react-native';

const Noticia = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      image: require('./assets/banner.jpeg'),
      title: 'Card 1',
      description: 'This is the description of card 1',
    },
    {
      image: require('./assets/banner.jpeg'),
      title: 'Card 2',
      description: 'This is the description of card 2',
    },
    {
      image: require('./assets/banner.jpeg'),
      title: 'Card 3',
      description: 'This is the description of card 3',
    },
    // add more cards here
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % cards.length);
    }, 2000); // change card every 6 seconds
    return () => clearInterval(intervalId);
  }, [currentIndex, cards]);

  const handleButtonPress = () => {
    // add your button press logic here
    console.log('Button pressed!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{
        width: 250,
        height: 300,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#FF',
        padding: 16,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Image source={cards[currentIndex].image} style={{ width: 250, height: 170, borderRadius: 10, }} />
        <View style={{ padding: 16, }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', }}>{cards[currentIndex].title}</Text>
          <Text style={{ fontSize: 14, }}>{cards[currentIndex].description}</Text>
        </View>
        <Button title="Click me!" onPress={handleButtonPress} />
      </View>
    </View>
  );
};

export default Noticia;