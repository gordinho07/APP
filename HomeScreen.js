// HomeScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

// Card component
const Card = ({ title, image, description }) => {
  const windowWidth = Dimensions.get('window').width; // Get window width

  return (
    <View style={[styles.cardContainer, { width: windowWidth * 0.8 }]}>
      <Image source={{ uri: image }} style={styles.cardImage} />
      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </View>
  );
};

// HomeScreen component
const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Bem-vindo ao App</Text>
      <View style={styles.cardWrapper}>
        <Card
          title="MISSÃO"
          image="https://www.unirio.br/cch/museologia/iconMissao.png/image_preview"
          description="O projeto 'Anjos da guarda' visa combater a exploração sexual infantil e oferecer apoio às vítimas."
        />
        <Card
          title="VALORES"
          image="https://cdn-icons-png.flaticon.com/512/11340/11340020.png"
          description="Crescer e ajudar mutuamente, não medindo esforços para proporcionar momentos melhores."
        />
        <Card
          title="VISÃO"
          image="https://cdn.icon-icons.com/icons2/2575/PNG/512/vision_view_eye_icon_153887.png"
          description="Nós acreditamos em um mundo livre do abuso sexual infantil, onde todas as crianças possam crescer com segurança."
        />
      </View>
      <View style={styles.separator} />
      <Text style={styles.aboutTitle}>Sobre</Text>
      <Text style={styles.aboutText}>
        Somos um grupo de estudantes da ETEC de Cidade Tiradentes rumo à finalização do curso de Informática para Internet junto ao ensino médio. Ou seja, estamos nos esforçando através de estudos e pesquisas, para solucionar, ou, ao menos, evidenciar de alguma forma esse assunto de extrema relevância. Tudo isso através do suporte que a tecnologia nos traz.
      </Text>
      <Text style={styles.aboutText}>
        O tema por nós escolhido, fora Exploração Sexual Infantil. Isso em meio a muito debate, opiniões e, principalmente, da vontade de querer um tema que realmente fosse viável de nós oferecermos uma assistência da melhor forma possível. Sempre com total respeito e dando apoio às vitimas e, por outro lado, fornecer um acervo extenso de informações à todos, com intenção de conscientização e prevenção desse tipo de ocorrência.
      </Text>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfUqFEqCv_jCrFZKxUURb0rgtblQ5-kHjrMLei87mAtUZNtEwTgKyhJeleQid93XhwVjs&usqp=CAU' }}
        style={styles.aboutImage}
      />
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2', // Updated background color
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  cardWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
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
    alignItems: 'center', // Center content horizontally
  },
  cardImage: {
    width: '60%', // Adjusted width
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  textContainer: {
    padding: 12,
    alignItems: 'center', // Center text horizontally
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
    padding: 20,
  },
  aboutImage: {
    width: '80%',
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
    borderRadius: 20,
  },
});

export default HomeScreen;
