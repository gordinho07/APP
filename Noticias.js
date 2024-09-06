import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const TelaNoticias = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notícias</Text>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3082/3082060.png' }}
          style={styles.titleImage}
        />
      </View>

      <View style={styles.cardContainer}>
        {Array.from({ length: 4 }, (_, index) => (
          <Card key={index} style={styles.card}>
            <Image
              source={{ uri: 'https://conteudo.imguol.com.br/c/entretenimento/c8/2022/05/13/crianca-chorando-crianca-triste-tristeza-sofrimento-1652474525538_v2_450x253.jpg' }}
              style={styles.imagem}
              resizeMode="cover"
            />
            <Card.Content style={styles.conteudo}>
              <Text style={styles.titulo}>Título da Notícia {index + 1}</Text>
              <Text style={styles.descricao}>Descrição da Notícia {index + 1}</Text>
            </Card.Content>
          </Card>
        ))}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  titleImage: {
    width: 100,
    height: 100,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    marginVertical: 10,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#6c5ce7',
  },
  imagem: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  conteudo: {
    padding: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  descricao: {
    fontSize: 14,
    color: '#ddd',
  },
  footer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  headerImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
});

export default TelaNoticias;
