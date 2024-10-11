import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

// Dados dos cartões para diferentes categorias
const noticias = [
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
];

const ongs = [
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
];

const psicologos = [
  {
    image: require('../assets/banner.jpeg'),
    title: 'Psicólogo 1',
    description: 'Descrição do psicólogo 1',
  },
];

// Componente Card
const Card = ({ image, title, description, onPress }) => {
  return (
    <View style={styles.card}>
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
  const [currentIndex, setCurrentIndex] = useState(0); // Índice do item atual
  const [showPsychologist, setShowPsychologist] = useState(false); // Estado para controlar exibição do psicólogo

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < noticias.length) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setShowPsychologist(true);
        setCurrentIndex(-1); // Prepara para exibir o psicólogo
      }
    }, 5000);

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, [currentIndex]);

  useEffect(() => {
    if (showPsychologist) {
      const timeoutId = setTimeout(() => {
        setShowPsychologist(false);
        setCurrentIndex(0); // Reinicia o índice para a primeira notícia
      }, 5000); // Exibe o psicólogo por 5 segundos

      return () => clearTimeout(timeoutId); // Limpa o timeout ao desmontar
    }
  }, [showPsychologist]);

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {showPsychologist ? (
          <Card
            {...psicologos[0]} // Apenas um psicólogo
            onPress={() => console.log(`Botão pressionado para ${psicologos[0].title}`)}
          />
        ) : (
          <>
            {currentIndex >= 0 && currentIndex < noticias.length && (
              <>
                <Card
                  {...noticias[currentIndex]}
                  onPress={() => console.log(`Botão pressionado para ${noticias[currentIndex].title}`)}
                />
                <Card
                  {...ongs[currentIndex]}
                  onPress={() => console.log(`Botão pressionado para ${ongs[currentIndex].title}`)}
                />
              </>
            )}
          </>
        )}
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
