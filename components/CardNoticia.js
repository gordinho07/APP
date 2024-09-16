import React from 'react';
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';

// Dados dos cartões
const data = [
  {
    image: require('../assets/banner.jpeg'),
    title: 'Card 1',
    description: 'This is the description of card 1',
  },
  {
    image: require('../assets/banner.jpeg'),
    title: 'Card 2',
    description: 'This is the description of card 2',
  },
  {
    image: require('../assets/banner.jpeg'),
    title: 'Card 3',
    description: 'This is the description of card 3',
  },
];

// Componente Card
const Card = ({ image, title, description, style }) => {
  return (
    <View style={[styles.card, style]}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 8,
    margin: 4,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: 100,
    height: 220,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  description: {
    fontSize: 12,
    color: '#666',
  },
});

// Componente App
const CardNoticia = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 16,
        justifyContent: 'center',
        flex: 1,
      }}
    >
      {data.map((item, index) => (
        <Card
          key={index}
          {...item}
          style={{
            marginHorizontal: 8,
          }}
        />
      ))}
    </ScrollView>
  );
};

export default CardNoticia;
