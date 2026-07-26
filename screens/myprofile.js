// import { Formik } from 'formik';
import { Octicons, Ionicons } from '@expo/vector-icons';
import { View, Text, ImageBackground, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';


const fonts = {
  'Gotham Black': require('../assets/fonts/Gotham Black.otf'),
  'Gotham Black Regular': require('../assets/fonts/Gotham Black Regular.ttf'),
  'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
  'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
  'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),

};
const Myprofile = () => {
  const [fontsLoaded] = useFonts(fonts);
  const user = {
    name: 'Shenal Rajapaksha',
    email: 'shenal@gmail.com',

    imageUrl: require('../assets/img/userpic.jpg'),
  };

  if (!fontsLoaded) {
    return null; // Return null or a loading indicator
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/img/bg.png')} style={styles.backgroundImage} resizeMode="cover">
        <ScrollView style={styles.mainContainer}>

          <Text style={styles.headerText}>Persona Hub</Text>
          <View style={styles.profileContainer}>
            <Image source={user.imageUrl} style={styles.profileImage} />
            <View style={styles.userInfoContainer}>
              <View style={styles.userInfoBorder}>
              <Octicons name="person" size={23} style={styles.icon} />
                <Text style={styles.userInfo}>{user.name}</Text>
              </View>
              <View style={styles.userInfoBorder}>
              <Ionicons name="mail" size={23} style={styles.icon} />
                <Text style={styles.userInfo}>{user.email}</Text>
              </View>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>In the profile section of our skin disease identification app,
                users can personalize their experience by creating a unique profile. From tracking their skin health
                journey to accessing personalized recommendations, our platform empowers users to take control of their
                dermatological well-being with ease and convenience.</Text>
            </View>
          </View>

        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginTop: 53,
  },
  headerText: {
    fontSize: 26,
    marginBottom: 40,
    margin: 23,
    fontFamily:'Gotham Black Regular',
    color:'#471AA0'
  },
  profileContainer: {
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 80,
    marginBottom: 20,
  },
  userInfoContainer: {
    marginBottom: 20,
    paddingTop: 20,
    paddingHorizontal: 10,

  },
  userInfoBorder: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 19,
    borderColor: "#9747ff",
    borderRadius: 19,
    borderWidth: 2,
    paddingHorizontal: 34,
    paddingVertical: 9,

  },
  icon: {
    marginRight: 28,
    color: '#9747ff',
    alignItems: 'center',
  },
  userInfo: {
    fontSize: 16,
    color: 'black',
    fontFamily:'Montserrat-Regular'
  },
  descriptionContainer: {
    borderRadius: 30,
    paddingHorizontal: 31,
    paddingVertical: 18,
    backgroundColor: '#B48EDB',
    marginLeft: 10
  },
  descriptionText: {
    fontSize: 13.2,
    color: 'white',
    textAlign: 'center',
    fontFamily:'Inter-Regular'
  },
});

export default Myprofile;
