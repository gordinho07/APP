import React, { useState } from 'react';
import {
  StyleSheet, Text, TextInput, View,
  TouchableOpacity, Alert, Image,
  ActivityIndicator, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showMoreTerms, setShowMoreTerms] = useState(false);

  // Função para verificar a força da senha
  const isPasswordStrong = (password) => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
  };

  // Função para determinar o nível da força da senha
  const getPasswordStrength = (password) => {
    if (password.length < 6) {
      return { strength: 'Fraca', color: 'red', progress: 25 };
    }
    if (isPasswordStrong(password)) {
      return { strength: 'Forte', color: 'green', progress: 100 };
    }
    return { strength: 'Média', color: 'orange', progress: 50 };
  };

  const handleRegister = () => {
    if (!email.includes('@')) {
      setErrorMessage('Por favor, insira um email válido.');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('A senha precisa ter pelo menos 6 caracteres.');
      return;
    }
    if (!isPasswordStrong(password)) {
      setErrorMessage('A senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    setTimeout(() => {
      setLoading(false);
      Alert.alert('Sucesso', `Cadastro realizado para: ${email}`);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setAcceptTerms(false);
      setShowMoreTerms(false);
    }, 2000);
  };

  const { strength, color, progress } = getPasswordStrength(password);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../APP/assets/logo.png')} // Substitua pelo caminho da sua imagem
        style={styles.logo}
      />
      <Text style={styles.title}>Crie sua Conta</Text>
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
          <Icon name={showPassword ? "eye-slash" : "eye"} size={20} color="#8C52FF" />
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        placeholderTextColor="#A9A9A9"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={!showConfirmPassword}
        onFocus={() => setErrorMessage('')}
      />
      <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.iconContainer}>
        <Icon name={showConfirmPassword ? "eye-slash" : "eye"} size={20} color="#8C52FF" />
      </TouchableOpacity>

      {/* Barra de progresso de força da senha */}
      {password.length > 0 && (
        <View style={styles.passwordStrengthContainer}>
          <Text style={[styles.passwordStrengthText, { color: color }]}>{strength}</Text>
          <View style={[styles.passwordStrengthBar, { backgroundColor: color, width: `${progress}%` }]} />
        </View>
      )}

      {/* Checkbox para Aceitar os Termos */}
      <View style={styles.termsContainer}>
        <TouchableOpacity onPress={() => setAcceptTerms(!acceptTerms)}>
          <View style={[styles.checkbox, acceptTerms && styles.checked]}>
            {acceptTerms && <Text style={styles.checkboxTick}>✔</Text>}
          </View>
        </TouchableOpacity>
        <Text style={styles.termsText}>Aceito os termos de serviço</Text>
      </View>

      {/* Detalhes dos Termos de Uso */}
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

          {/* Exibe os detalhes adicionais quando o usuário clicar "Leia mais..." */}
          {showMoreTerms && (
            <View style={styles.moreDetailsContainer}>
            <Text style={styles.moreDetails}>
              <Text style={styles.bold}>1. Definições: </Text>
              "Anjos Da Guarda": O aplicativo oferecido por alunos da Etec Cidade Tiradentes, que tem como objetivo ser um aplicativo de TCC.
              {"\n"}Usuário: Qualquer pessoa que faça uso do aplicativo, seja como visitante ou usuário registrado.

              {"\n\n"}<Text style={styles.bold}>2. Aceitação dos Termos: </Text>
              Ao acessar ou usar o "Anjos Da Guarda", você reconhece que leu, entendeu e concorda em cumprir estes Termos. Se você não concorda com qualquer parte destes Termos, não use o App.

              {"\n\n"}<Text style={styles.bold}>3. Cadastro e Conta de Usuário: </Text>
              Para utilizar determinadas funcionalidades do "Anjos Da Guarda", pode ser necessário criar uma conta. Ao criar sua conta, você se compromete a fornecer informações precisas, completas e atualizadas, e manter sua conta segura e confidencial. Você é o único responsável pela utilização de sua conta, inclusive se ela for acessada por terceiros sem sua permissão.

              {"\n\n"}<Text style={styles.bold}>4. Uso do App: </Text>
              Você concorda em usar o "Anjos Da Guarda" de forma responsável e em conformidade com as leis e regulamentos aplicáveis. Você não poderá:
              - Usar o App para fins ilícitos ou de forma que prejudique a experiência de outros usuários.
              - Modificar, descompilar ou fazer engenharia reversa do App ou de seu código-fonte.
              - Compartilhar informações ou conteúdos prejudiciais, fraudulentos, abusivos ou que violem direitos de terceiros.

              {"\n\n"}<Text style={styles.bold}>5. Propriedade Intelectual: </Text>
              Todo o conteúdo e design do "Anjos Da Guarda", incluindo, mas não se limitando a, textos, imagens, logotipos, ícones e software, são de propriedade exclusiva do Anjos Da Guarda ou licenciados por terceiros.

              {"\n\n"}<Text style={styles.bold}>6. Privacidade e Coleta de Dados: </Text>
              A proteção da sua privacidade é importante para nós. Ao usar o "Anjos Da Guarda", você concorda com a coleta, uso e compartilhamento de seus dados pessoais conforme descrito em nossa Política de Privacidade.
            </Text>
          </View>
          )}
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

      <TouchableOpacity onPress={() => Alert.alert('Redirecionar para login')}>
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
  passwordStrengthContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },
  passwordStrengthText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  passwordStrengthBar: {
    height: 5,
    borderRadius: 5,
    width: '100%',
    backgroundColor: 'gray',
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
  termsDetailsContainer: {
    marginTop: 10,
  },
  termsDetails: {
    fontSize: 14,
    color: '#333',
  },
  moreTermsText: {
    color: '#8C52FF',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#8C52FF',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#8C52FF',
    textAlign: 'center',
    marginTop: 12,
    fontWeight: '600',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Register;
