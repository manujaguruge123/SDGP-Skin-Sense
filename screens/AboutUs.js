import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyledContainer,
  PageLogo,
  InnerContainer,
  PageTitle,
  DescriptionText,
  StyledButton,
  ButtonText,
  DescriptionTextTitle,
  ExtraText,
} from '../components/AboutUs styles';
import { Linking, Text } from 'react-native';

const AboutUs = ({ route, navigation }) => {
  const userName = route.params.userName;
  console.log(userName);
  const handleLet = () => {
    navigation.navigate('Dashboard', { userName: userName }); // Navigate to Dashboard page and pass the user name to dashbaoard
  };
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <PageLogo resizeMode="cover" source={require('./../assets/img/Logo.png')} />
      <InnerContainer>
        <PageTitle>Skin Sense: Your Skin Health Companion</PageTitle>

        <DescriptionText>
          Welcome to Skin Sense, your go-to app for quick and accurate skin disease identification. Discover the power
          of technology in recognizing and understanding various skin conditions.
        </DescriptionText>

        <DescriptionTextTitle>What Can Skin Sense Do?</DescriptionTextTitle>

        <DescriptionText>
          <Text style={{ fontWeight: 'bold' }}>Quick Identification:</Text> Snap a photo of the affected area, input
          symptoms, and let Skin Sense classify potential skin diseases.
        </DescriptionText>

        <DescriptionText>
          <Text style={{ fontWeight: 'bold' }}>Diverse Categories:</Text> From bacterial and fungal infections to viral
          and parasitic conditions, Skin Sense covers it all.
        </DescriptionText>

        <DescriptionText>
          <Text style={{ fontWeight: 'bold' }}>Instant Insights:</Text> Receive detailed information about the
          identified skin condition, including causes and symptoms.
        </DescriptionText>

        <DescriptionTextTitle>How It Works?</DescriptionTextTitle>

        <DescriptionText>
          <Text style={{ fontWeight: 'bold' }}>Capture:</Text> Take a photo with your phone's camera.{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Input:</Text> Describe any symptoms you're experiencing.{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Analyze:</Text> Skin Sense processes the data instantly.{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Learn:</Text> Get insights into potential skin diseases.
        </DescriptionText>

        <DescriptionTextTitle>User-Friendly Design</DescriptionTextTitle>

        <DescriptionText>
          With a simple and intuitive interface, Skin Sense makes the process easy for everyone. Take control of your
          skin health right from your phone.
        </DescriptionText>

        <DescriptionTextTitle>Privacy Matters</DescriptionTextTitle>

        <DescriptionText>
          Rest assured, your data is secure with Skin Sense. We prioritize your privacy and employ strict security
          measures.
        </DescriptionText>

        <DescriptionTextTitle>Empowering You</DescriptionTextTitle>

        <DescriptionText>
          Skin Sense is designed to empower you with information. While it doesn't replace professional medical advice,
          it helps you make informed decisions about your skin health.
        </DescriptionText>

        <StyledButton onPress={handleLet}>
          <ButtonText>Let's Go!</ButtonText>
        </StyledButton>

        <ExtraText>
          Skin Sense is not a substitute for professional medical advice. Consult with a healthcare professional for
          accurate diagnosis and treatment.
        </ExtraText>
      </InnerContainer>
    </StyledContainer>
  );
};

export default AboutUs;
