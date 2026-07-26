import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, ScrollView, Image, TextInput, TouchableOpacity, Alert, Linking } from 'react-native';
import { useFonts } from 'expo-font';

const fonts = {
  'Gotham Black': require('../assets/fonts/Gotham Black.otf'),
  'Gotham Black Regular': require('../assets/fonts/Gotham Black Regular.ttf'),
  'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
  'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
  'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
};

const Feedback = () => {
  const [fontsLoaded] = useFonts(fonts);

  const [name, setName] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const submit = () => {
    if (!name || !phone || !message) {
      Alert.alert("Please fill all the fields");
    } else {
      const emailContent = {
        recipients: ['skinsenseappinfo@gmail.com'],
        subject: 'Feedback from Skin Sense',
        body: `
          Name: ${name}
          Mobile Number: ${phone}
          Feedback: ${message}
        `,
      };

      Linking.openURL(`mailto:${emailContent.recipients.join(",")}?subject=${emailContent.subject}&body=${emailContent.body}`);
    }
  };

  if (!fontsLoaded) {
    return null; // Return null or a loading indicator
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/img/Dashboad.png')} resizeMode='cover' style={styles.background}>
        <ScrollView style={styles.mainContainer}>
          <View style={{ alignItems: 'center', paddingVertical: 0 }}>
            <Image source={require('../assets/img/Logo.png')} style={{ height: 270, width: 270 }} />
          </View>
          <Text style={styles.contentBody}>Share Your Skin Sense</Text>
          <Text style={styles.contentBody1}>Experience</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter Your Name</Text>
            <TextInput
              style={styles.input}
              placeholder="John Vince"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter Your Mobile Number</Text>
            <TextInput
              style={styles.input}
              placeholder="071 2345678"
              value={phone}
              onChangeText={setPhoneNumber}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter Your Feedback</Text>
            <TextInput
              style={[styles.input, styles.multiline]}
              placeholder="Share your thoughts here..."
              value={message}
              onChangeText={setMessage}
              numberOfLines={7}
              multiline={true}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={submit}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 60,
  },
  contentBody: {
    fontFamily: 'Inter-Bold',
    fontSize: 22.5,
    paddingTop: 0,
    textAlign: 'center',
    color:'#471aa0',
  },
  contentBody1:{
    fontFamily: 'Inter-Bold',
    fontSize: 22.5,
    paddingBottom: 20,
    textAlign: 'center',
    color: '#471aa0',
  },
  inputContainer: {
    marginTop: 20
  },
  label: {
    fontFamily: 'Montserrat-Regular',
    paddingBottom: 5,
    lineHeight: 24,
    fontSize: 14.4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#9747ff',
    paddingHorizontal: 15,
    borderRadius: 15,
    paddingVertical: 7,
    fontFamily: 'Montserrat-Regular',
    fontSize: 11.9,
    color: 'black',
    backgroundColor: 'white',
  },
  multiline: {
    paddingVertical: 4,
  },
  button: {
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 60,
    backgroundColor: '#A259FF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    alignSelf: 'center',
    marginBottom:50
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Inter-Bold',
    fontSize: 15.8,
  }

});

export default Feedback;
