// Card.js
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const Card = ({ title, image, description }) => {
  const windowWidth = Dimensions.get('window').width; // Get window width

  return (
    <View style={[styles.container, { width: windowWidth * 0.8 }]}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8C52FF', // Card background color
    borderRadius: 10, // Border radius
    padding: 16, // Padding around the content
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    margin: 10, // Margin around the card
    alignItems: 'center', // Center content horizontally
  },
  imageContainer: {
    alignItems: 'center', // Center the image horizontally
    width: '100%', // Ensure container takes full width of the card
    marginBottom: 10, // Space between image and text
  },
  image: {
    width: '60%', // Image width as 60% of the card's width
    height: 120, // Height of the image
    resizeMode: 'contain', // Ensure the image scales correctly
    alignSelf: 'center', // Center image within the container
  },
  textContainer: {
    alignItems: 'center', // Center text horizontally
    padding: 12, // Padding around the text
  },
  title: {
    fontSize: 18, // Font size for title
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8, // Margin below the title
    textAlign: 'center', // Center the title text
  },
  description: {
    fontSize: 14, // Font size for description
    color: '#FFFFFF',
    textAlign: 'center', // Center the description text
  },
});

export default Card;
