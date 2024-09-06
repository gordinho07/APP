import React, { useState } from 'react'; // Certifique-se de que useState está importado
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import Footer from './components/Rodape'
import BotaoNavbar from './components/BotaoNavbar';
const { width: viewportWidth } = Dimensions.get('window');

const { width, height } = Dimensions.get('window'); // Obtém a largura e altura da tela

// Define as dimensões do contêiner em proporção à tela
const containerSize = 300; // Tamanho fixo de 300x300 pixels para o campo branco
const fontSize = 30; // Tamanho fixo da fonte para o título
const fontRelato = 16; // Tamanho fixo da fonte para o conte sua historia

const Relato = () => {
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar o modo de edição
  const [text, setText] = useState(''); // Estado para armazenar o texto

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Conte sua história!</Text>
      </View>
      <View style={styles.background}>
        <View style={styles.textContainer}>
          {!isEditing ? (
            <Text style={styles.text} onPress={() => setIsEditing(true)}>
              Compartilhe sua história aqui. Pode ser algo que você presenciou, ou qualquer experiência que queira dividir com a gente.
            </Text>
          ) : (
            <TextInput
              style={styles.input}
              placeholder="Descreva aqui..."
              value={text}
              onChangeText={setText}
              autoFocus
              multiline
            />
          )}
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    width: '100%',
    padding: 10,
    backgroundColor: '#6200ee', // Cor do navbar
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: '#8C52FF',
    color: '#fff',
    borderRadius: 20,
    width: width * 0.8,
    height: 50,
    textAlign: 'center',
    lineHeight: 50,
    fontSize: fontSize,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  background: {
    width: containerSize, // Largura do contêiner ajustada
    height: containerSize, // Altura do contêiner ajustada
    backgroundColor: '#8C52FF', // Cor roxa
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    width: 280,
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    borderRadius: 10,
    width: '100%',
    height: '100%',
    paddingLeft: 20,
    lineHeight: 30,
    fontSize: fontRelato, // Tamanho da fonte ajustado
    textAlignVertical: 'top', // Adicionado para melhor alinhamento do texto
  },
  input: {
    backgroundColor: '#fff', 
    color: '#000',
    borderRadius: 10,
    width: '100%',
    height: '100%',
    paddingLeft: 20,
    lineHeight: 30,
    fontSize: fontRelato, // Tamanho da fonte ajustado
    textAlignVertical: 'top', // Adicionado para melhor alinhamento do texto
  },
  button: {
    backgroundColor: '#4caf50', // Cor do botão
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // Texto do botão branco
    fontSize: 16,
  },
});

export default Relato;