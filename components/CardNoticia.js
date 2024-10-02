import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

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
const Card = ({ image, title, description, style, onPress }) => {
  return (
    <View style={[styles.card, style]}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Saiba mais</Text>
      </TouchableOpacity>
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
            onPress={() => console.log(`Botão pressionado para ${item.title}`)}
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8C52FF',
    marginBottom: 20,
    textAlign: 'center',
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
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#8C52FF',
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
  button: {
    backgroundColor: '#8C52FF',
    borderColor: 'transparent',
    borderRadius: 10,
    height: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default CardNoticia;