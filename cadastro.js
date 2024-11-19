import React, { useState } from 'react';
import {
  StyleSheet, Text, TextInput, View,
  TouchableOpacity, Alert, Image,
  ActivityIndicator, ScrollView, Linking
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showMoreTerms, setShowMoreTerms] = useState(false);

  const handleRegister = async () => {
    if (!name.trim()) {
      setErrorMessage('Por favor, insira seu nome.');
      return;
    }
    if (!email.includes('@')) {
      setErrorMessage('Por favor, insira um email válido.');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('A senha precisa ter pelo menos 6 caracteres.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('http://etec-199-luizotavio.atwebpages.com/desktop/Controller/cliente.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        Alert.alert('Sucesso', `Cadastro realizado para: ${name} (${email})`);
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setAcceptTerms(false);
      } else {
        setErrorMessage('Erro ao realizar o cadastro. Tente novamente.');
      }
    } catch (error) {
      setErrorMessage('Erro ao conectar com o servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../APP/assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Crie sua Conta</Text>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#A9A9A9"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
        onFocus={() => setErrorMessage('')}
      />

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
          <Image
            source={showPassword ? require('./assets/verSenha.png') : require('./assets/ocultarSenha.png')}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          placeholderTextColor="#A9A9A9"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showConfirmPassword}
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.iconContainer}>
          <Image
            source={showConfirmPassword ? require('./assets/verSenha.png') : require('./assets/ocultarSenha.png')}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.termsContainer}>
        <TouchableOpacity onPress={() => setAcceptTerms(!acceptTerms)}>
          <View style={[styles.checkbox, acceptTerms && styles.checked]}>
            {acceptTerms && <Text style={styles.checkboxTick}>✔</Text>}
          </View>
        </TouchableOpacity>
        <Text style={styles.termsText}>Aceito os termos de serviço</Text>
      </View>

      {acceptTerms && (
        <View style={styles.termsDetailsContainer}>
          <Text style={styles.termsDetails}>
            <Text style={styles.bold}>Termos e Condições de Uso do Aplicativo "Anjos Da Guarda"</Text>
            {"\n"}Última atualização: 05 de Novembro de 2024
            {"\n\n"}Bem-vindo ao "Anjos Da Guarda"! Ao acessar ou utilizar nosso aplicativo, você concorda em cumprir e se submeter aos seguintes Termos e Condições de Uso...
          </Text>
          <TouchableOpacity onPress={() => setShowMoreTerms(!showMoreTerms)}>
            <Text style={styles.moreTermsText}>
              {showMoreTerms ? 'Menos detalhes' : 'Leia mais...'}
            </Text>
          </TouchableOpacity>

          {showMoreTerms && (
            <View style={styles.moreDetailsContainer}>
              <Text style={styles.moreDetails}>
                <Text style={styles.bold}>1. Definições: </Text>
                "Anjos Da Guarda": O aplicativo oferecido por alunos da Etec Cidade Tiradentes, que tem como objetivo ser um aplicativo de TCC.
                {"\n"}Usuário: Qualquer pessoa que faça uso do aplicativo, seja como visitante ou usuário registrado.
                {"\n\n"}<Text style={styles.bold}>2. Aceitação dos Termos: </Text>
                Ao acessar ou usar o "Anjos Da Guarda", você reconhece que leu, entendeu e concorda em cumprir estes Termos...
                {"\n\n"}<Text style={styles.bold}>3. Cadastro e Conta de Usuário: </Text>
                Para utilizar determinadas funcionalidades do "Anjos Da Guarda", pode ser necessário criar uma conta...
              </Text>
            </View>
          )}

          <TouchableOpacity onPress={() => Linking.openURL('https://example.com/terms-and-conditions')}>
            <Text style={styles.termsLink}>Leia os Termos completos aqui.</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Cadastrar</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.registerText}>Já tem uma conta? Faça Login</Text>
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
  },
  passwordContainer: {
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  termsContainer: {
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
  termsText: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#8C52FF',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#8C52FF',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 16,
  },
});

export default Register;
