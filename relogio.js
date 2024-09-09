import React from 'react';
import { View, StyleSheet, Text, Dimensions, Image } from 'react-native';

// Import the GIF
import clockGif from './assets/clock.gif'; // Adjust the path if needed

const Clock = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <View style={styles.backgroundBox} />
        <View style={styles.gifContainer}>
          <Image
            source={clockGif}
            style={styles.gifImage}
            resizeMode="cover"
          />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>
          A cada 3h uma criança é abusada sexualmente no Brasil
        </Text>
        <View style={styles.separator} />
        <Text style={styles.bodyText}>
          500 mil casos de exploração sexual contra crianças e adolescentes por ano no Brasil
        </Text>
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');
const textWidth = width - 240; // Adjust width according to your design needs

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#f0f0f0', // Light background color for contrast
  },
  backgroundContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundBox: {
    width: 150,
    height: 150,
    backgroundColor: '#000', // Black background
    borderRadius: 100, // Rounded corners
    position: 'absolute',
    zIndex: 1, // Ensure it is behind the GIF
  },
  gifContainer: {
    width: 220,
    height: 220,
    borderRadius: 110,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2, // Ensure it is above the black box
  },
  gifImage: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    marginLeft: 30,
    borderLeftWidth: 2,
    borderLeftColor: '#000', // Line color separating the GIF and text
    paddingLeft: 20,
    width: textWidth,
  },
  separator: {
    height: 2,
    backgroundColor: '#000',
    width: '100%',
    marginVertical: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', // Text color
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 16,
    color: '#000', // Text color
  },
});

export default Clock;
