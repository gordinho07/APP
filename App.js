// App.js
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import Footer from './Footer';
import React from 'react';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Drawer.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#6200ee' },
              headerTintColor: '#fff',
              drawerStyle: { backgroundColor: '#f4f4f4' },
            }}
          >
            <Drawer.Screen name="Inicio" component={HomeScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
          </Drawer.Navigator>


        </View>
        <Footer />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Adicione uma cor de fundo ao container para melhorar a visibilidade
  },
  content: {
    flex: 1,
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
});

export default App;
