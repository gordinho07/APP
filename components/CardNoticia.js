import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image, StyleSheet, Linking } from 'react-native';

const CardNoticia = () => {
  // Array de objetos contendo a imagem, título, descrição e link para cada "cardNoticia"
  const cardNoticias = [
    {
      id: '1',
      image: require('../assets/psico1.png'),  // Usando require() para imagens locais
      title: 'Felipe Fernandes',
      description: 'Psicanalista Clínico',
      link: 'mailto:felipeff3179@outlook.com', // Link para abrir o e-mail diretamente
    },
    {
      id: '2',
      image: require('../assets/ong1.png'),  // Usando uma URL externa
      title: 'Aldeias Infantis SOS',
      description: 'Organização Global.',
      link: 'https://doe.aldeiasinfantis.org.br/torne-se-um-amigo-sos/people/new?utm_source=site&utm_medium=menu&utm_campaign=doacao', // Link para página da ONG
    },
    {
      id: '3',
      image: require('../assets/psico2.png'),
      title: 'Rubens dos Santos',
      description: 'Psicologia Social',
      link: 'mailto:felipeff3179@outlook.com', // Link para abrir o e-mail diretamente
    },
    {
      id: '4',
      image: require('../assets/ong2.png'),
      title: 'Childhood Brasil',
      description: 'É uma associação privada sem fins lucrativos.',
      link: 'https://www.childhood.org.br/saiba-como-agir/doe/',
    },
    {
      id: '5',
      image: { uri: 'https://via.placeholder.com/150' },
      title: 'Notícia 5',
      description: 'Descrição da Notícia 5',
      link: 'mailto:felipeff3179@outlook.com', // Link para abrir o e-mail diretamente
    },
    {
      id: '6',
      image: require('../assets/ong3.png'),
      title: 'Henry Borel',
      description: 'Organização brasileira sem fins econômicos.',
      link: 'https://henryborel.com.br/quero-doar/',
    },
    {
      id: '7',
      image: { uri: 'https://via.placeholder.com/150' },
      title: 'Notícia 7',
      description: 'Descrição da Notícia 7',
      link: 'https://www.exemplo.com/noticia7',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para avançar automaticamente os cards
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex + 2 < cardNoticias.length) {
        setCurrentIndex(currentIndex + 2);
      } else {
        setCurrentIndex(0); // Volta para o início ao chegar ao final
      }
    }, 3000); // Atualiza a cada 3 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, [currentIndex]);

  // Função para abrir o link do botão
  const handlePress = (link) => {
    Linking.openURL(link); // Abre o link da página ou e-mail correspondente
  };

  const renderCardNoticia = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => handlePress(item.link)} // Passa o link do card
      >
        <Text style={styles.buttonText}>Saiba Mais</Text>
      </TouchableOpacity>
    </View>
  );

  // Slice o array de cardNoticias para mostrar dois itens de cada vez
  const visibleCards = cardNoticias.slice(currentIndex, currentIndex + 2);

  return (
    <View style={styles.container}>
      <FlatList
        data={visibleCards}
        renderItem={renderCardNoticia}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#8C52FF',
    borderRadius: 12,
    margin: 10,
    padding: 20,
    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4, // Shadow effect for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  cardImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Tornando a imagem arredondada
    marginBottom: 10,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2ecc71', // Cor do botão
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CardNoticia;
