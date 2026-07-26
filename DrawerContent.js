import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const fonts = {
  'Gotham Black': require('./assets/fonts/Gotham Black.otf'),
  'Gotham Black Regular': require('./assets/fonts/Gotham Black Regular.ttf'),
  'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
  'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
};


const DrawerContent = ({ navigation }) => {
  const navigateToScreen = (screenName) => () => {
    navigation.navigate(screenName);
  };

  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null; // Return null or a loading indicator
  }

  return (
    <DrawerContentScrollView>
      <View style={styles.container}>
        <View style={styles.profileSection}>
          <View style={styles.profileContainer}>
            <Image
              source={require('./assets/img/userpic.jpg')}
              style={styles.profileImage}
            />
            <Text style={styles.profileText}>Viruna Desitha</Text>
          </View>
          <View style={styles.divider} />
        </View>
        <TouchableOpacity onPress={navigateToScreen('Dashboard')} style={styles.itemContainer}>
          <Ionicons name="home" size={24} color="black" style={styles.icon} />
          <Text style={styles.item}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToScreen('ContactUs')} style={styles.itemContainer}>
          <Ionicons name="person" size={24} color="black" style={styles.icon} />
          <Text style={styles.item}>ContactsUs</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToScreen('Feedback')} style={styles.itemContainer}>
          <Ionicons name="chatbubble-ellipses" size={24} color="black" style={styles.icon} />
          <Text style={styles.item}>Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToScreen('AboutUs')} style={styles.itemContainer}>
          <Ionicons name="information-circle" size={24} color="black" style={styles.icon} />
          <Text style={styles.item}>AboutUs</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToScreen('Logout')} style={styles.itemContainer}>
          <Ionicons name="log-out" size={24} color="black" style={styles.icon} />
          <Text style={styles.item}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2023 Skin Sense Sri Lanka. All rights reserved.</Text>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    opacity: 0.9,
    backgroundColor: '#B275FF',
    
  },
  profileSection: {
    backgroundColor: '#BA9DDE',
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginRight: -10,
    marginLeft: -10
  },
  itemContainer: {
    flexDirection: "row", 
    alignItems: 'center', 
    marginBottom: 5,
    marginTop: 15,
    
  },
  icon: {
    marginRight: 20,
  },
  item: {
    fontSize: 18,
    //fontWeight: 'bold',
    marginTop: 5,
    color: 'white',
    fontFamily: 'Montserrat-Bold',
  },
  profileContainer: {
    marginBottom: 15,
    marginLeft:35
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft:30
  },
  divider: {
    height: 2,
    backgroundColor: 'white',
    marginVertical: 3,
    marginLeft: -5,
    marginRight: -8,
  },
  profileText: {
    fontSize: 18,
    //fontWeight: 'bold',
    marginTop: 20,
    color: 'white',
    fontFamily: 'Montserrat-Bold',
  },
  footer: {
    marginTop: 180,
    borderTopWidth: 1,
    borderTopColor: 'white',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: 'white',
  },
});

export default DrawerContent;
