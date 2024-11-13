import React, { useState } from 'react';
import {
  StyleSheet, Text, TextInput, View,
  TouchableOpacity, Alert, Image,
  ActivityIndicator, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Certifique-se de instalar esta biblioteca

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email.includes('@') || password.length < 6) {
      setErrorMessage('Email ou senha inválidos.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    setTimeout(() => {
      setLoading(false);
      Alert.alert('Sucesso', `Login realizado com: ${email}`);
      setEmail('');
      setPassword('');
      setRememberMe(false);
    }, 2000);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS-_ycPMliqwjkLSNXt6aMeqPUvYxmz2NJ_PwgLJXxNuuEkQN8H5VApnN0r_vX3KMwMpebw3_EA5sNJHAo' }}
        style={styles.logo}
      />
      <Text style={styles.title}>Bem-vindo de Volta!</Text>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

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

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#A9A9A9"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.iconContainer}>
          <Icon
            name={showPassword ? "eye-slash" : "eye"}
            size={20}
            color="#007BFF"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.rememberMeContainer}>
        <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
          <View style={[styles.checkbox, rememberMe && styles.checked]}>
            {rememberMe && <Text style={styles.checkboxTick}>✔</Text>}
          </View>
        </TouchableOpacity>
        <Text style={styles.rememberMeText}>Lembrar-me</Text>
      </View>

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

      <TouchableOpacity onPress={() => Alert.alert('Redirecionar para registro')}>
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
    fontSize: 28,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  error: {
    color: '#FF6B6B',
    marginBottom: 12,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#007BFF',
    borderWidth: 2,
    borderRadius: 25,
    marginBottom: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  passwordContainer: {
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
    borderColor: '#007BFF',
    borderWidth: 2,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checked: {
    backgroundColor: '#007BFF',
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
    backgroundColor: '#007BFF',
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
    color: '#007BFF',
    textAlign: 'center',
    marginTop: 12,
    fontWeight: '600',
  },
});

export default App;
