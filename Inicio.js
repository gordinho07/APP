import React, { useRef } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ícone da seta para cima

// Componentes importados
import Banner from './components/banner';
import Clock from './components/relogio';
import CardNoticia from './components/CardNoticia';
import Noticia from './noticia';
import MVV from './MVV';

// Importa a imagem local
import aboutImage from './assets/grupo.jpeg';

const Card = ({ title, image, description }) => {
  const windowWidth = Dimensions.get('window').width; // Obtém a largura da tela

  return (
    <View style={[styles.cardContainer, { width: windowWidth * 0.7 }]}>
      <Image source={{ uri: image }} style={styles.cardImage} />
      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </View>
  );
};

const Inicio = () => {
  const scrollViewRef = useRef(null); // Referência para o ScrollView

  // Função para rolar até o topo
  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  return (
    <View style={styles.container}>
      <ScrollView ref={scrollViewRef} contentContainerStyle={styles.contentContainer}>
        <Banner />
        <Clock />
        <View style={styles.separator} />
        <View style={styles.noticiaContainer}>
          <Noticia />
        </View>
        <View style={styles.separator} />
        <MVV />
        <View style={styles.separator} />
        <CardNoticia />
        <View style={styles.separator} />
        <Text style={styles.aboutTitle}>Sobre</Text>
        <Text style={styles.aboutText}>
          Somos um grupo de estudantes da ETEC de Cidade Tiradentes rumo à finalização do curso de Informática para Internet junto ao ensino médio. Ou seja, estamos nos esforçando através de estudos e pesquisas, para solucionar, ou, ao menos, evidenciar de alguma forma esse assunto de extrema relevância. Tudo isso através do suporte que a tecnologia nos traz.
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={aboutImage} // Usa a imagem importada
            style={styles.aboutImage}
          />
        </View>
      </ScrollView>

      {/* Botão de seta para rolar até o topo */}
      <TouchableOpacity style={styles.scrollToTopButton} onPress={scrollToTop}>
        <Icon name="arrow-up" size={30} color="#fff" /> {/* Ícone de seta para cima */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  contentContainer: {
    padding: 16,
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: '#8C52FF',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    margin: 10,
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 12,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'black',
    marginVertical: 20,
  },
  noticiaContainer: {
    width: '100%',
  },
  aboutTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  aboutText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    borderRadius: 20, // Arredonda as bordas do container da imagem
    overflow: 'hidden', // Garante que a imagem não ultrapasse os limites arredondados
    width: '100%',
    height: 300,
  },
  aboutImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  scrollToTopButton: {
    position: 'absolute',
    bottom: 20, // Distância acima do rodapé
    left: '90%',
    marginLeft: -20, // Centraliza o ícone
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Inicio;
