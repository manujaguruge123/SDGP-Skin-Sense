import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useFonts } from 'expo-font';

export default function WelcomePage({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Gotham Black': require('../assets/fonts/Gotham Black.ttf'),
    'Gotham Black Regular': require('../assets/fonts/Gotham Black Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground source={require('../assets/img/WelcomScreen.png')} resizeMode="cover" style={styles.Background}>
        <View style={styles.content}>
          <Image source={require('../assets/img/Logo.png')} style={styles.logoImage} />
          <Text style={styles.title1}>{'WELCOME TO SKIN'}</Text>
          <Text style={styles.title2}>{'SENSE'}</Text>
        </View>
        <View style={styles.bottombutton}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.button1}>LET'S GET STARTED!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  Background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: '100%',
    height: '60%',
    marginVertical: 25,
  },
  title1: {
    color: 'white',
    fontFamily: 'Gotham Black',
    fontSize: 28,
    fontWeight: '200',
    textAlign: 'center',
    elevation: 4,
    textShadowOffset: {
      width: 2,
      height: 5,
    },
    textShadowColor: '#40504d',
    shadowOpacity: 0.5,
    textShadowRadius: 5,
  },
  title2: {
    color: 'white',
    fontFamily: 'Gotham Black',
    fontSize: 28,
    fontWeight: '200',
    textAlign: 'center',
    elevation: 4,
    textShadowOffset: {
      width: 2,
      height: 5,
    },
    textShadowColor: '#40504d',
    shadowOpacity: 0.5,
    textShadowRadius: 5,
  },
  bottombutton: {
    marginTop: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    fontFamily: 'Gotham Black',
    fontSize: 14,
    fontWeight: '600',
    color: '#7519EB',
    backgroundColor: 'white',
    paddingVertical: 17,
    paddingHorizontal: 50,
    borderRadius: 25,
    elevation: 10,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowColor: '#1B1212',
    shadowOpacity: 0.5,
    shadowRadius: 25,
  },
});
