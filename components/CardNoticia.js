import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, Dimensions } from 'react-native';

// Dados dos cartões para diferentes categorias
const cardData = {
  noticias: [
    {
      image: require('../assets/banner.jpeg'),
      title: 'Notícia 1',
      description: 'Descrição da notícia 1',
    },
    {
      image: require('../assets/banner.jpeg'),
      title: 'Notícia 2',
      description: 'Descrição da notícia 2',
    },
    {
      image: require('../assets/banner.jpeg'),
      title: 'Notícia 3',
      description: 'Descrição da notícia 3',
    },
  ],
  ongs: [
    {
      image: require('../assets/banner.jpeg'),
      title: 'ONG 1',
      description: 'Descrição da ONG 1',
    },
    {
      image: require('../assets/banner.jpeg'),
      title: 'ONG 2',
      description: 'Descrição da ONG 2',
    },
    {
      image: require('../assets/banner.jpeg'),
      title: 'ONG 3',
      description: 'Descrição da ONG 3',
    },
  ],
  psicologos: [
    {
      image: require('../assets/banner.jpeg'),
      title: 'Psicólogo 1',
      description: 'Descrição do psicólogo 1',
    },
    {
      image: require('../assets/banner.jpeg'),
      title: 'Psicólogo 2',
      description: 'Descrição do psicólogo 2',
    },
    {
      image: require('../assets/banner.jpeg'),
      title: 'Psicólogo 3',
      description: 'Descrição do psicólogo 3',
    },
  ],
};

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

// Componente CardNoticia
const CardNoticia = () => {
  const [category, setCategory] = useState('noticias'); // Estado para controlar a categoria

  // Lista de categorias
  const categories = ['noticias', 'ongs', 'psicologos'];

  useEffect(() => {
    // Função para alternar a categoria
    const changeCategory = () => {
      setCategory((prevCategory) => {
        const currentIndex = categories.indexOf(prevCategory);
        const nextIndex = (currentIndex + 1) % categories.length;
        return categories[nextIndex];
      });
    };

    // Configura o intervalo para alternar a categoria a cada 5 segundos
    const intervalId = setInterval(changeCategory, 5000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category === 'noticias' ? 'Notícias' : category === 'ongs' ? 'ONGs' : 'Psicólogos'}</Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {cardData[category].map((item, index) => (
          <Card
            key={index}
            {...item}
            style={styles.cardMargin}
          />
        ))}
      </ScrollView>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
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
  cardMargin: {
    marginHorizontal: 8,
  },
});

export default CardNoticia;
