import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useUser } from '../UserContext';

const BotaoNavbar = ({ onPress }) => {
  const { user } = useUser();

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>
        {user ? `Olá, ${user.nome}` : 'Entrar'}
      </Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#6200ee', // Cor de fundo do botão
    borderRadius: 25, // Bordas arredondadas
    marginRight: 15, // Espaçamento da borda direita
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BotaoNavbar;
