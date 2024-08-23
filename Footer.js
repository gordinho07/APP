// Footer.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

// Substitua com o caminho correto das suas imagens
const logo = require('./assets/logo.png'); 
const whatsappIcon = require('./assets/whatsapp.png'); 
const instagramIcon = require('./assets/instagram.png'); 
const facebookIcon = require('./assets/facebook.png'); 

const Footer = () => {
  const openWhatsApp = () => {
    const phoneNumber = '5511910702803'; // Substitua pelo seu número de WhatsApp
    const message = 'Olá, tudo bem? Estou entrando em contato em relação ao projeto Anjos da Guarda. Qual a sua disposição para uma conversa?';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    Linking.openURL(url);
  };

  const openInstagram = () => {
    Linking.openURL('https://www.instagram.com/somos_adg/'); // Substitua pelo seu usuário do Instagram
  };

  const openFacebook = () => {
    Linking.openURL('https://www.facebook.com/somos_adg/'); // Substitua pelo seu perfil do Facebook
  };

  return (
    <View style={styles.footerContainer}>
      <View style={styles.contentContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.address}>
          Endereço: Rua Exemplo, 123, Cidade - Estado
        </Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.icon} onPress={openWhatsApp}>
            <Image source={whatsappIcon} style={styles.iconImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={openInstagram}>
            <Image source={instagramIcon} style={styles.iconImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={openFacebook}>
            <Image source={facebookIcon} style={styles.iconImage} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  address: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 10,
    borderRadius: 15, // Adiciona a borda arredondada
    overflow: 'hidden', // Garante que o conteúdo arredondado seja exibido corretamente
  },
  iconImage: {
    width: 30,
    height: 30,
    borderRadius: 15, // Adiciona a borda arredondada na imagem
  },
});

export default Footer;
