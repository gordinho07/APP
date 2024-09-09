import React from 'react';
import { Image, View, StyleSheet, Dimensions } from 'react-native';
import image from './assets/1.png'; // Import the image from the assets folder

const { width } = Dimensions.get('window'); // Get the width of the screen

const Banner = () => {
  return (
    <View style={styles.container}>
      <Image
        source={image} // Use the imported image
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300, // Fixed height for the container
    overflow: 'hidden', // Ensure that the image does not overflow
  },
  image: {
    width: '100%', // Take up the full width of the container
    height: '100%', // Take up the full height of the container
  },
});

export default Banner;
