import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions, Image } from 'react-native';

// Import the GIF
import clockGif from '../assets/relogio.gif'; // Adjust the path if needed

const Clock = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount >= 500) {
          clearInterval(interval);
          return 500;
        }
        return prevCount + 1;
      });
    }, 5); // Adjust speed of increment

    return () => clearInterval(interval);
  }, []);

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
          <Text style={styles.boldText}>{count.toLocaleString()}</Text> mil casos de exploração sexual contra crianças e adolescentes por ano no Brasil
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
    width: '100%',
    backgroundColor: '#f0f0f0', // Light background color for contrast
    paddingHorizontal: 10, // Optional: Reduce padding if needed
    marginTop: -5, // Move Clock up; adjust value if needed
  },
  backgroundContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundBox: {
    width: '100%', // Match the GIF container width
    height: '100%', // Match the GIF container height
    backgroundColor: '#8C52FF', // Purple background
    borderRadius: 20, // Slightly rounded corners
    position: 'absolute',
    zIndex: 1, // Ensure it is behind the GIF
  },
  gifContainer: {
    width: 160,
    height: 220,
    borderRadius: 20, // Slightly rounded corners
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2, // Ensure it is above the purple box
  },
  gifImage: {
    width: '80%',
    height: '80%',
  },
  textContainer: {
    marginLeft: 10, // Reduce margin to bring the text closer to the GIF
    borderLeftWidth: 2,
    borderLeftColor: '#000', // Line color separating the GIF and text
    paddingLeft: 10,
    width: textWidth,
  },
  separator: {
    height: 2,
    backgroundColor: '#000',
    width: '100%',
    marginVertical: 10,
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
  boldText: {
    fontWeight: 'bold',
    fontSize: 24, // Increase font size as needed
  },
});

export default Clock;
