// login.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Form = () => {
  const navigation = useNavigation(); // Hook to access navigation

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>E-mail</Text>
        <View style={styles.inputForm}>
          <MaterialIcons name="email" size={24} color="#333" />
          <TextInput style={styles.input} placeholder="Digite seu e-mail" />
        </View>
        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputForm}>
          <MaterialIcons name="lock" size={24} color="#333" />
          <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry />
        </View>
        <TouchableOpacity style={styles.buttonSubmit}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.p}>Esqueceu a senha?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.span}>Não tem uma conta? Inscrever-se</Text>
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
    padding: 20,
  },
  form: {
    width: '80%',
    padding: 30,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    shadowColor: 'purple',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  inputForm: {
    borderColor: 'purple',
    borderWidth: 1.5,
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginBottom: 20,
  },
  input: {
    marginLeft: 10,
    borderRadius: 10,
    borderColor: 'transparent',
    width: '100%',
    height: '100%',
    fontSize: 16,
    color: 'purple',
  },
  buttonSubmit: {
    marginTop: 20,
    backgroundColor: 'purple',
    borderColor: 'transparent',
    borderRadius: 10,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'purple',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 5,
  },
  span: {
    fontSize: 14,
    marginLeft: 5,
    color: 'purple',
    fontWeight: '500',
  },
  p: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
    margin: 5,
  },
});

export default Form;
