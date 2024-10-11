import React, { useState, useEffect } from 'react';
import { View, Image, Text, Button, StyleSheet, Linking, TouchableOpacity } from 'react-native';

const Noticia = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define os cards com URLs e botões personalizados
  const cards = [
    {
      image: require('./assets/noticia1.png'),
      title: 'PF faz operação contra pornografia infantil pela internet em Santa Catarina',
      description: 'A Polícia Federal (PF) deflagrou nesta sexta-feira (29), em Santa Catarina, uma operação contra o compartilhamento e a posse de imagens e vídeos de abuso sexual contra crianças e adolescentes.',
      buttonTitle: 'Saiba Mais',
      buttonAction: () => Linking.openURL('https://www.cnnbrasil.com.br/nacional/operacao-da-pf-faz-operacao-contra-pornografia-infantil-pela-internet/'),
    },
    {
      image: require('./assets/noticia2.png'),
      title: 'Justiça mantém condenação de ator José Dumont por armazenamento de pornografia infantil',
      description: 'Ator de 72 anos foi condenado a 1 ano e 10 dias de reclusão em regime aberto, além de multa; ele foi preso em flagrante acusado de guardar 240 fotos e vídeos de pornografia infantil.',
      buttonTitle: 'Saiba Mais',
      buttonAction: () => Linking.openURL('https://www.cnnbrasil.com.br/nacional/justica-mantem-condenacao-de-ator-jose-dumont-por-armazenamento-de-pornografia-infantil/'),
    },
    {
      image: require('./assets/noticia3.png'),
      title: 'MP faz operação contra suspeito de gravar vídeos de pornografia infantil em clube de alto padrão de Curitiba',
      description: 'O Ministério Público e a Polícia Civil do Paraná cumpriram mandado de busca e apreensão contra um suspeito de produzir pornografia infantil em um clube tradicional e de alto padrão de Curitiba.',
      buttonTitle: 'Saiba Mais',
      buttonAction: () => Linking.openURL('https://www.cnnbrasil.com.br/nacional/mp-faz-operacao-contra-suspeito-de-gravar-videos-de-pornografia-infantil-em-club/'),
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % cards.length);
    }, 5000); // Altera o card a cada 5 segundos
    return () => clearInterval(intervalId);
  }, [currentIndex, cards.length]);

  const handleButtonPress = () => {
    cards[currentIndex].buttonAction(); // Executa a ação associada ao card atual
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={cards[currentIndex].image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{cards[currentIndex].title}</Text>
          <Text style={styles.description}>{cards[currentIndex].description}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>{cards[currentIndex].buttonTitle}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    width: '90%',
    maxWidth: 360,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 12,
  },
  textContainer: {
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  button: {
    marginTop: 12,
    backgroundColor: '#8C52FF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Noticia;
