import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';

const fonts = {
  'Gotham Black': require('../assets/fonts/Gotham Black.otf'),
  'Gotham Black Regular': require('../assets/fonts/Gotham Black Regular.ttf'),
  'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
  'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
  'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
};

const Question1 = ({ navigation }) => {
  const question = 'Which of the following describes your skin condition?';
  const answers = ['   Rash', '   Blisters', '   Dry patches', '   Discoloration'];

  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null); // State to keep track of selected answer
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null; // Return null or a loading indicator
  }

  const handleAnswerSelection = (index) => {
    console.log(`Selected answer: ${answers[index]}`);
    setSelectedAnswerIndex(index); // Update selected answer index
  };

  const nextScreen = () => {
    navigation.navigate('Questionscreen2');
  };

  return (
    <ImageBackground
      source={require('../assets/img/QuestionScreen.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.headerText}>Let's Start...</Text>
        <View style={styles.loadingBarContainer}>
          <View style={styles.loadingBar} />
        </View>
        <Text style={styles.question}>{question}</Text>
        <View style={styles.answersContainer}>
          {answers.map((answer, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.answerButton,
                selectedAnswerIndex === index && styles.selectedAnswerButton, // Apply selected style conditionally
              ]}
              onPress={() => handleAnswerSelection(index)}
            >
              <Text style={styles.answerText}>{answer}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.pageNumber}>1 of 4</Text>
          <TouchableOpacity style={styles.nextButton} onPress={nextScreen}>
            <Text style={styles.nextButtonText}>Next </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    marginTop: 120,
    paddingHorizontal: 25,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 25,
    color: 'black',
    paddingVertical: 5,
    fontFamily: 'Gotham Black',
  },
  loadingBarContainer: {
    width: 300,
    height: 6,
    marginBottom: 20,
    borderRadius: 40,
    backgroundColor: '#D6CBCB',
    alignContent: 'center',
    justifyContent: 'center',
  },
  loadingBar: {
    width: 75,
    height: 6,
    borderRadius: 40,
    backgroundColor: '#711281',
  },
  question: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    marginBottom: 20,
    color: 'black',
    marginTop: 15,
  },
  answersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  answerButton: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 12,
    width: 200,
    height: 43,
    flexShrink: 0,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#000',
  },
  selectedAnswerButton: {
    // Style for selected answer
    backgroundColor: '#BB84E8', // Change background color when selected
  },
  answerText: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: 'black',
    textAlign: 'left',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 45,
    left: 65,
    right: 13,
  },
  pageNumber: {
    fontFamily: 'Inter-Bold',
    fontSize: 16.5,
    color: 'white',
    paddingHorizontal: -10,
  },
  nextButton: {
    backgroundColor: '#BB84E8',
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 10,
    right: 20,
    elevation: 13,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 25,
  },
  nextButtonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    color: 'white',
  },
});

export default Question1;
