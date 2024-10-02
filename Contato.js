import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Mantém o ícone original se ainda necessário

// Importe os ícones
const whatsappIcon = require('./assets/whatsapp.png'); 
const instagramIcon = require('./assets/instagram.png'); 
const facebookIcon = require('./assets/facebook.png'); 

const ContactForm = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Manipular envio do formulário, por exemplo, enviar mensagem para o backend
    console.log('Message:', message);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entre em contato!</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Para: adguardas@gmail.com</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem..."
          placeholderTextColor="#888"
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contactSection}>
        <Text style={styles.sectionTitle}>Outros meios de contato</Text>

        <View style={styles.contactItem}>
          <Image source={whatsappIcon} style={styles.icon} />
          <Text style={styles.contactInfo}>(11) 98284-3964</Text>
        </View>

        <View style={styles.contactItem}>
          <Image source={instagramIcon} style={styles.icon} />
          <Text style={styles.contactInfo}>@somos_adg</Text>
        </View>

        <View style={styles.contactItem}>
          <Image source={facebookIcon} style={styles.icon} />
          <Text style={styles.contactInfo}>R. Igarapé Água Azul, 70</Text>
        </View>

        {/* Substituindo o ícone com uma imagem de urso de um link */}
        <Image 
          source={{ uri: 'https://i.pinimg.com/originals/5b/da/a0/5bdaa030b99c5b797a4a1d1bf74b1057.png' }} // Substitua pelo URL da sua imagem
          style={styles.teddy} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8C52FF',
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    width: '80%',
    padding: 30,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    shadowColor: '#8C52FF',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    color: '#8C52FF',
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    borderColor: '#8C52FF',
    borderWidth: 1.5,
    borderRadius: 10,
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginBottom: 20,
    fontSize: 16,
    color: '#8C52FF',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#8C52FF',
    borderColor: 'transparent',
    borderRadius: 10,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  contactSection: {
    marginTop: 30,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#8C52FF',
    marginBottom: 15,
    textAlign: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 12,
  },
  contactInfo: {
    fontSize: 16,
    color: '#8C52FF',
  },
  teddy: {
    width: 150,
    height: 170,
    alignSelf: 'center',
    marginLeft: 200,
  },
});

export default ContactForm; 