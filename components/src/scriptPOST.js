import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';
import axios from 'axios';

const adicionar = ({ navigation }) => {
  const [nome_user, setnome_user] = useState('');
  const [email, setemail] = useState('');
  const [senha, setsenha] = useState('');
  const [foto_user, setfoto_user] = useState('');

  const handleAddProduct = async () => {

    if (!nome_user || !email || !senha || !foto_user) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }

    try {
      const usuarioData = {
        nome_user,
        email,
        senha,
        foto_user,
      };

      console.log('Dados a serem enviados:', usuarioData);

      const response = await axios.post('http://localhost/DESKTOP/Controller/usuario.php', usuarioData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Resposta da API:', response.data);

      if (response.status === 200) {
        console.log('Produto adicionado:', response.data);
        navigation.navigate('ProductsScreen');
      } else {
        Alert.alert('Erro', response.data.msg || 'Erro ao adicionar produto.');
      }
    } catch (error) {
      console.error('Erro ao adicionar produto:', error.response ? error.response.data : error);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar adicionar o produto.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Adicionar Produto</Text>
        <TextInput
          placeholder="Nome"
          value={nome_user}
          onChangeText={setnome_user}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setemail}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setsenha}
          style={styles.input}
        />
        <TextInput
          placeholder="Foto"
          value={foto_user}
          onChangeText={setfoto_user}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231f1f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: '#1b1a1a',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    width: '80%',
    marginTop: '5%',
    shadowColor: 'rgba(151, 65, 252, 0.2)',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 1,
    shadowRadius: 30,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    padding: 10,
    marginTop: 5,
    borderRadius: 3,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#fff',
    color: '#000',
  },
  button: {
    marginTop: 20,
    padding: 10,
    borderRadius: 7,
    backgroundColor: 'rgb(61, 106, 255)',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: '600',
    letterSpacing: 2,
    color: '#fff',
  },
});

export default adicionar;
