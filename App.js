// App.js
import React from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import Login from './login';
import Cadastro from './cadastro'; // Import Cadastro screen
import Footer from './Footer';
import CustomButton from './CustomBotton';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
        <View style={styles.content}>
          <Drawer.Navigator
            screenOptions={({ navigation }) => ({
              headerStyle: { backgroundColor: '#6200ee' },
              headerTintColor: '#fff',
              drawerStyle: { backgroundColor: '#f4f4f4' },
              headerRight: () => (
                <CustomButton 
                  onPress={() => navigation.navigate('Login')}
                />
              ),
            })}
          >
            <Drawer.Screen name="Inicio" component={HomeScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Cadastro" component={Cadastro} /> 
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
    backgroundColor: '#fff', // Updated background color
  },
  content: {
    flex: 1, // Fills the available space
  },
});

export default App;
