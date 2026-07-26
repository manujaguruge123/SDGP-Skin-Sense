import { Image, Linking, ScrollView, StyleSheet, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { useFonts } from 'expo-font';

const fonts = {
  'Gotham Black': require('../assets/fonts/Gotham Black.otf'),
  'Gotham Black Regular': require('../assets/fonts/Gotham Black Regular.ttf'),
  'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
  'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
  'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
};

export default function ContactUs() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null; // Return null or a loading indicator
  }
  const contacts = [
    {
      uid: 4,
      name: 'Kumuditha Nanayakkara',
      email: '📨 nanayakkarakumuditha7@gmail.com',
      phone: ' 📞 +94-776961178',
      linkedin:
        'https://www.linkedin.com/in/kumuditha-nanayakkara-457156295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/_k_u_m_u?igsh=OGQ5ZDc2ODk2ZA',
      facebook: 'https://www.facebook.com/kumuditha.nanayakkara.549?mibextid=ZbWKwL',
      imageUrl: require('../assets/img/kumuditha.png'),
    },
    {
      uid: 1,
      name: 'Viruna Desitha',
      email: '📨  virunadesitha2002@gmail.com',
      phone: ' 📞 +94-775257957',
      linkedin: 'https://www.linkedin.com/in/viruna-abeywickrama-9b8517260/',
      instagram: 'https://www.instagram.com/viru.?igsh=MXcwdXhnNTQ1cndrbA%3D%3D&utm_source=qr',
      facebook: 'https://www.facebook.com/VirunaDesitha?mibextid=LQQJ4d',
      imageUrl: require('../assets/img/viruna2.png'),
    },
    {
      uid: 2,
      name: 'Manuja Guruge',
      email: '📨  manujaguru@gmail.com',
      phone: ' 📞 +94-716456837',
      linkedin: 'http://www.linkedin.com/in/manuja-guruge-94a19b276',
      instagram: 'https://www.instagram.com/mr._manu_03/',
      facebook: 'https://www.facebook.com/profile.php?id=100083157927007',
      imageUrl: require('../assets/img/manuja.jpg'),
    },
    {
      uid: 3,
      name: 'Shenal Rajapaksha',
      email: '📨  kpsirajapaksha@gmail.com',
      phone: ' 📞 +94-702200880',
      linkedin:
        'https://www.linkedin.com/in/shenal-rajapaksha-9b8022257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      instagram: 'https://www.instagram.com/mr_shenal?igsh=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr',
      facebook: 'https://www.facebook.com/shenal.rajapaksha.315?mibextid=LQQJ4d',
      imageUrl: require('../assets/img/shenal2.jpg'),
    },
    {
      uid: 5,
      name: 'S.J.M.H.N.Rajapaksha',
      email: '📨  sjmhnrajapaksha@gmail.com',
      phone: ' 📞 +94-712556292',
      linkedin:
        'https://www.linkedin.com/in/himansi-rajapaksha-b9691924b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/hima_nr?igsh=bW5nZmJyNXd3ZXV4',
      facebook: 'https://www.facebook.com/himansi.navanjana',
      imageUrl: require('../assets/img/himansi2.jpg'),
    },
  ];

  const handleSocialLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <ImageBackground source={require('../assets/img/Question Screen 3.png')} style={styles.backgroundImage}>
      <ScrollView style={styles.mainContainer}>
        <Text style={styles.heading1}>About Skin Sense </Text>
        <View style={styles.container}>
          <Text style={styles.description}>
            {'\n'} ❤ We are <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Team Pixel Derm</Text>, a group of
            Second-year students studying at the Informatics Institute of Technology.
            {'\n\n'}Our project, <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Skin Sense</Text>, is part of
            our Software Development Group Project{' '}
            <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>(SDGP).</Text>
            {'\n\n'}
            <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Skin Sense</Text> is a skin disease identification
            application designed to assist users in identifying 8 common skin diseases. Our team consists of 5 dedicated
            members.
            {'\n\n'}Should you have any questions, require further details, or encounter any issues with our
            application, please do not hesitate to contact us. {'\n\n'}Our contact information is provided below....!
          </Text>
          {/* Social Media Icons */}
          <View style={styles.socialIconsContainer}>
            <TouchableOpacity
              onPress={() =>
                handleSocialLinkPress(
                  'https://www.instagram.com/skin_sense_app?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr',
                )
              }
            >
              <Ionicons name="logo-instagram" size={24} color="#FFF" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSocialLinkPress('mailto:skinsenseappinfo@gmail.com')}>
              <Ionicons name="mail" size={24} color="#FFF" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSocialLinkPress('https://www.facebook.com/profile.php?id=61557587853051')}
            >
              <Ionicons name="logo-facebook" size={24} color="#FFF" style={styles.icon} />
            </TouchableOpacity>
          </View>
          {/* End of Social Media Icons */}
        </View>
        <View style={styles.creaters}>
          <Text style={styles.heading}>Meet the Creators </Text>
          {contacts.map(({ uid, name, email, phone, linkedin, instagram, facebook, imageUrl }) => (
            <View key={uid} style={styles.userCard}>
              <Image source={imageUrl} style={styles.userImage} />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userEmail}>{email}</Text>
                <Text style={styles.userPhone}>{phone}</Text>
                <View style={styles.socialIcons}>
                  <TouchableOpacity onPress={() => handleSocialLinkPress(linkedin)}>
                    <Ionicons name="logo-linkedin" size={24} color="#FFF" style={styles.linkedIn} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleSocialLinkPress(instagram)}>
                    <Ionicons name="logo-instagram" size={24} color="#FFF" style={styles.instagram} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleSocialLinkPress(facebook)}>
                    <Ionicons name="logo-facebook" size={24} color="#FFF" style={styles.faceBook} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    marginTop: 60,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  heading: {
    fontFamily: 'Inter-Bold',
    // fontWeight:'800',
    fontSize: 24,
    marginBottom: 10,
    marginTop: 8,
    marginLeft: 10,
    color: '#471aa0',
  },
  heading1: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#471aa0',
    marginBottom: 8,
    marginTop: 10,
    marginLeft: 10,
  },
  creaters: {
    marginBottom: 35,
    marginTop: 5,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#B275FF',
    borderRadius: 32,
    marginBottom: 10,
    padding: 8,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginRight: 10,
  },
  userInfo: {
    width: '100%',
    flex: 1,
  },
  userName: {
    fontSize: 15,
    //fontWeight: '600',
    color: '#FFF',
    fontFamily: 'Montserrat-Bold',
    marginBottom: 5,
  },
  userEmail: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
    marginBottom: 3,
  },
  userPhone: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 15,
  },
  socialIcons: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 15,
  },
  linkedIn: {
    marginRight: 8.5,
  },
  instagram: {
    marginRight: 8.5,
  },
  faceBook: {
    marginRight: 8.5,
  },
  mainContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    marginTop: 60,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  heading1: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#471aa0',
    marginBottom: 8,
    marginTop: 10,
    marginLeft: 10,
  },
  container: {
    backgroundColor: '#B275FF',
    borderRadius: 25,
    padding: 10,
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12.5,
    color: '#FFF',
    marginBottom: 10,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  icon: {
    marginHorizontal: 9,
  },
});
ContactUs.navigationOptions = {
  headerTransparent: true,
  headerTintColor: '#471aa0',
};
