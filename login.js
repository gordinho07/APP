import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ActivityIndicator, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showSenha, setShowSenha] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email.includes('@') || senha.length < 6) {
      setErrorMessage('Email ou senha inválidos.');
      return;
    }

    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('http://localhost/DESKTOP/Controller/usuario.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }), 
      });

      const data = await response.json();

      if (response.ok) {
        if (data.status === '200') {
          setSuccessMessage('Login realizado com sucesso!');
          setEmail('');
          setSenha('');
          setRememberMe(false);
          navigation.navigate('Inicio'); 
        } else if (data.status === '210') {
          setSuccessMessage('Login como administrador!');
          navigation.navigate('Admin');
        } else {
          setErrorMessage('Email ou senha incorretos.');
        }
      } else {
        setErrorMessage(data.message || 'Erro ao realizar o login');
      }
    } catch (error) {
      setErrorMessage('Erro na conexão. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('./assets/logo.png')} 
        style={styles.logo}
      />
      <Text style={styles.title}>Bem-vindo de Volta!</Text>

      {successMessage ? <Text style={styles.success}>{successMessage}</Text> : null}
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      {/* Campo de email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#A9A9A9"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        onFocus={() => setErrorMessage('')}
      />

      <View style={styles.senhaContainer}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#A9A9A9"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={!showSenha}
        />
        <TouchableOpacity onPress={() => setShowSenha(!showSenha)} style={styles.iconContainer}>
          <Icon
            name={showSenha ? "eye-slash" : "eye"}
            size={20}
            color="#007BFF"
          />
        </TouchableOpacity>
      </View>

      {/* Lembrar-me */}
      <View style={styles.rememberMeContainer}>
        <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
          <View style={[styles.checkbox, rememberMe && styles.checked]}>
            {rememberMe && <Text style={styles.checkboxTick}>✔</Text>}
          </View>
        </TouchableOpacity>
        <Text style={styles.rememberMeText}>Lembrar-me</Text>
      </View>

      {/* Botão de login */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Entrar</Text>
        )}
      </TouchableOpacity>

      {/* Link para a página de cadastro */}
      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.registerText}>Não tem uma conta? Registre-se</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F7F9FC',
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#8C52FF',
  },
  success: {
    color: '#28a745',
    marginBottom: 12,
    textAlign: 'center',
  },
  error: {
    color: '#FF6B6B',
    marginBottom: 12,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#8C52FF',
    borderWidth: 2,
    borderRadius: 25,
    marginBottom: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
  },
  senhaContainer: {
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderColor: '#8C52FF',
    borderWidth: 2,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checked: {
    backgroundColor: '#8C52FF',
  },
  checkboxTick: {
    color: '#fff',
    fontSize: 16,
  },
  rememberMeText: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#8C52FF',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#8C52FF',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Login;
