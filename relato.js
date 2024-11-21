import React, { useState } from 'react'; 
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';

const { width, height } = Dimensions.get('window');
const containerSize = 300;
const fontSize = 30;
const fontRelato = 16;

const Relato = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState('');

  const handleSendRelato = async () => {
    if (!text.trim()) {
      Alert.alert('Erro', 'Por favor, preencha o relato antes de enviar.');
      return;
    }

    try {
      // Envia a requisição POST com os dados necessários
      const response = await fetch('http://localhost/DESKTOP/Controller/relato.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ relato: text, id_user: 1 }), // Removido o campo data_postagem, será tratado no backend
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Relato enviado com sucesso!');
        setText(''); // Limpa o campo após o envio
        setIsEditing(false);
      } else {
        const error = await response.json();
        Alert.alert('Erro', `Falha ao enviar: ${error.message}`);
      }
    } catch (error) {
      Alert.alert('Erro', `Erro ao conectar ao servidor: ${error.message}`);
    }
  };

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
        <TouchableOpacity style={styles.button} onPress={handleSendRelato}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
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
    width: containerSize,
    height: containerSize,
    backgroundColor: '#8C52FF',
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
    fontSize: fontRelato,
    textAlignVertical: 'top',
  },
  input: {
    backgroundColor: '#fff', 
    color: '#000',
    borderRadius: 10,
    width: '100%',
    height: '100%',
    paddingLeft: 20,
    lineHeight: 30,
    fontSize: fontRelato,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#4caf50',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Relato;
