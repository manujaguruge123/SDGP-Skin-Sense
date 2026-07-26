import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import Weather from '../components/Weather';
import SearchBar from '../components/SearchBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const API_KEY = '3ca17405d40cddd33471c43762e3cf74';

const fonts = {
  'Gotham Black': require('../assets/fonts/Gotham Black.ttf'),
  'Gotham Black Regular': require('../assets/fonts/Gotham Black Regular.ttf'),
  'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
  'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
  'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
};

const Dashboard = ({ route, navigation }) => {
  const { userName } = route.params;
  const [savedUserName, setSavedUserName] = useState(userName);
  console.log('userName:', userName);
  console.log('savedUserName:', savedUserName);

  useEffect(() => {
    // Load the user's name from AsyncStorage when the component mounts
    retrieveUserName();
  }, []);

  useEffect(() => {
    // Save the user's name to AsyncStorage whenever it changes
    saveUserName();
  }, [savedUserName]);

  const retrieveUserName = async () => {
    try {
      const storedUserName = await AsyncStorage.getItem('userName');
      if (storedUserName !== null) {
        console.log('Retrieved user name:', storedUserName);
        setSavedUserName(storedUserName); // Changed userName to savedUserName
      }
    } catch (error) {
      console.error('Error retrieving user name:', error);
    }
  };

  const saveUserName = async () => {
    try {
      await AsyncStorage.setItem('userName', savedUserName); // Changed userName to savedUserName
      console.log('User name saved:', savedUserName);
    } catch (error) {
      console.error('Error saving user name:', error);
    }
  };

  // Convert the username to uppercase
  const upperCaseUserName = userName.toUpperCase();

  const [fontsLoaded] = useFonts(fonts);
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(true);

  async function fetchWeatherData(cityName) {
    setLoaded(false);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    try {
      const response = await fetch(API);
      if (response.status == 200) {
        const data = await response.json();
        const uvResponse = await fetch(`https://api.openweathermap.org/data/2.5/uvi?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${API_KEY}`);
        const uvData = await uvResponse.json();
        data.uvIndex = uvData.value; // Add UV index to weather data
        setWeatherData(data);
      } else {
        setWeatherData(null);
      }
      setLoaded(true);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchWeatherData('Colombo');
    console.log(weatherData);
  }, []);
  // if (!fontsLoaded) {
  //   return null; // Return null or a loading indicator
  // }
  if (!fontsLoaded || !loaded) {
    return (
      <View style={styles.firstContainer}>
        <ActivityIndicator color="grey" size={38} />
      </View>
    );
  } else if (weatherData === null) {
    return (
      <View style={styles.secondContainer}>
        <SearchBar fetchWeatherData={fetchWeatherData} />
        <Text style={styles.primaryText}>City Not Found...! Try Another City</Text>
      </View>
    );

  }

  const handleFindDiseaseButtonPress = () => {
    navigation.navigate('Questionscreen1');
  };
  const handleFeedbackButtonPress = () => {
    navigation.navigate('Feedback');
  };
  const handleAboutUsButtonPress = () => {
    navigation.navigate('ContactUs');
  };
  const handleProfileButtonPress = () => {
    navigation.navigate('Myprofile');
  };
  const handleLgOutButtonPress = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/img/Dashboad.png')} resizeMode="cover" style={styles.Background}>

        <TouchableOpacity onPress={handleLgOutButtonPress}>
          <Ionicons name="log-out" size={30} color="white" style={styles.footerIcon1} />
        </TouchableOpacity>

        <ScrollView style={styles.mainContainer}>

          <View style={styles.identificationStep}>
            {/* <Image
              source={require('../assets/img/userpic.jpg')}
              style={{ height: 60, width: 60, borderRadius: 40, marginRight: 8 }}
            /> */}
            <View>
              <Text style={styles.text}>HI ! {upperCaseUserName} </Text>
              <Text style={styles.text1}>WELCOME TO SKIN SENSE !</Text>
            </View>
          </View>

          <View>
            <Text style={styles.text2}>Popular Skin Diseases Around the World</Text>
          </View>

          <View style={styles.Activities}>
            <View style={styles.firstDisease}>
              <Image
                source={require('../assets/diseases/Sandworm Disease.jpg')}
                style={{ height: 55, width: 55, marginRight: 5, marginLeft: 5, borderRadius: 8 }}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.header}>Sandworm Disease</Text>
                <Text style={styles.discription}>
                  Cutaneous larva migrans is a tropical skin condition causing an itchy rash, treated with anthelmintic
                  medications to eliminate parasites.
                </Text>
              </View>
            </View>

            <View style={styles.secondDisease}>
              <Image
                source={require('../assets/diseases/Cellulitis.jpg')}
                style={{ height: 55, width: 55, marginRight: 5, marginLeft: 5, borderRadius: 8 }}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.header}>Cellulitis</Text>
                <Text style={styles.discription}>
                  Cellulitis is a bacterial skin infection marked by red, swollen areas, commonly on the legs. Prompt
                  treatment with antibiotics is crucial for recovery.
                </Text>
              </View>
            </View>

            <View style={styles.thirdDisease}>
              <Image
                source={require('../assets/diseases/Ringworm.jpg')}
                style={{ height: 55, width: 55, marginRight: 5, marginLeft: 5, borderRadius: 8 }}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.header}>Ringworm</Text>
                <Text style={styles.discription}>
                  Ringworm is a fungal skin infection causing red, itchy rashes on the scalp, feet, or groin. Treat with
                  antifungal medication and practice good hygiene to prevent spread.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.temperature}>
            <Text style={styles.UVTitle}>Daily Updates for Your Skin's Protection !</Text>

            <SafeAreaView style={styles.tempContainer}>

              <Weather weatherData={weatherData} fetchWeatherData={fetchWeatherData} />

            </SafeAreaView>

          </View>

          <View style={styles.bottombutton}>
            <TouchableOpacity onPress={handleFindDiseaseButtonPress}>
              <Text style={styles.button1}>Let’s Find A Disease !!</Text>
            </TouchableOpacity>
          </View>

          <View style={{ height: 5, backgroundColor: '#471aa0', width: '100%', borderRadius: 20 }} />

          <View style={styles.footerContainer}>
            <View style={styles.footer}>

              <TouchableOpacity onPress={handleProfileButtonPress}>
                <Ionicons name="person" size={24} color="#471aa0" style={styles.footerIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleFeedbackButtonPress}>
                <Ionicons name="chatbubble-ellipses" size={24} color="#471aa0" style={styles.footerIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleAboutUsButtonPress}>
                <Ionicons name="call" size={24} color="#471aa0" style={styles.footerIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.copyright}>
              <Text style={styles.copyrightText}>© 2023 Skin Sense Sri Lanka. All Rights Reserved.</Text>
            </View>
          </View>


        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    marginBottom: 20,
    alignItems: 'center',
    paddingTop: 18,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },

  footerIcon: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 10,
    paddingBottom: 10,
  },
  footerIcon1:{
    paddingLeft: 32,
    paddingRight: 15,
    paddingTop: 39,
    textAlign:'right'
  },
  copyright: {
    alignItems: 'center',
  },
  copyrightText: {
    fontFamily: 'Gotham Black',
    fontSize: 13.2,
    color: '#471aa0',
    textAlign: 'center',
  },
  secondContainer: {
    marginTop: 65,
    marginLeft: 10
  },
  primaryText: {
    color: 'black',
    fontFamily: 'Gotham Black',
    fontSize: 15,
    marginLeft: 15,
    marginTop: 10
  },
  tempContainer: {
    flex: 1,
    backgroundColor: '#ffffff00'
  },
  firstContainer: {},
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  Background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    textAlign: 'center',
    marginTop: -6,
  },
  identificationStep: {
    //marginTop: 4,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Gotham Black',
    color: 'white',
    textAlign: 'center',
    marginLeft: 5,
  },
  text1: {
    fontSize: 18,
    fontFamily: 'Gotham Black',
    color: 'white',
    textAlign: 'center',
    marginLeft: 5,
  },
  text2: {
    fontSize: 16.3,
    fontFamily: 'Gotham Black',
    color: '#471aa0',
    paddingTop: 40,
    paddingLeft: 13,
    textAlign:'center'
  },
  Activities: {
    backgroundColor: '#DAC1F3',
    width: '100%',// Set the desired width
    height: 295,
    borderRadius: 18,
    marginTop: 12,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowColor: '#6F12E7',
    shadowOpacity: 0.36,
    shadowRadius: 18,
  },
  firstDisease: {
    backgroundColor: '#A885CC',
    width: '96%',
    height: 80,
    borderRadius: 18,
    marginTop: 15,
    marginLeft: 6,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  header: {
    color: "white",
    fontFamily: 'Gotham Black',
    fontSize: 13
  },
  discription: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 9,
    color: '#2f4f4f'
  },
  secondDisease: {
    backgroundColor: '#A885CC',
    width: '96%',
    height: 80,
    borderRadius: 18,
    marginLeft: 6,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10

  },
  thirdDisease: {
    backgroundColor: '#A885CC',
    width: '96%',
    height: 80,
    borderRadius: 18,
    marginLeft: 6,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8

  },
  temperature: {
    marginTop: 25,
    marginBottom: 30,

  },
  UVTitle: {
    fontSize: 16.3,
    fontFamily: 'Gotham Black',
    color: '#471aa0',
    marginLeft: 18,
    paddingTop: 5,
    textAlign: 'center'

  },

  bottombutton: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 38
  },
  button1: {
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    //fontWeight:'800',
    color: 'white',
    backgroundColor: '#BB84E8',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    elevation: 13,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 25,
  }
});
Dashboard.navigationOptions = {
  headerTransparent: true,
  headerTintColor: 'white',
};
export default Dashboard;
