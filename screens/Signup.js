import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { View, ActivityIndicator } from 'react-native';
import { Octicons, Ionicons } from '@expo/vector-icons';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import { useFonts } from 'expo-font';
import Loader from '../components/Loadingscreen';

// Importing styled components
const {
  StyledContainer,
  InnerContainer,
  PageTitle,
  StyledFormArea,
  StyledTextInput,
  LeftIcon,
  RightIcon,
  StyledButton,
  ButtonText,
  colors,
  MsgBox,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  PageBackIcon,
  PageBackText,
  PageBackPng,
} = require('../components/styles');

const { darkLight, primary, secondary, white } = colors;

//import axios
import axios from 'axios';

const Signup = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Gotham Black': require('../assets/fonts/Gotham Black.ttf'),
    'helvetica lite': require('../assets/fonts/helvetica lite.ttf'),
  });

  const handleSignup = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = 'https://still-cove-22678-83bb220a995a.herokuapp.com/user/signup';

    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { message, status, data } = result;

        if (status !== 'SUCCESS') {
          handleMessage(message, status);
        } else {
          navigation.navigate('About', { userName: credentials.name }); // Pass user name to About screen
        }
        setSubmitting(false);
      })
      .catch((error) => {
        console.error('Axios error:', error);
        console.log(error.JSON);
        setSubmitting(false);
        handleMessage('An error occurred. Check your network and try again');
      });
  };

  const handleMessage = (message, type = 'FAILED') => {
    if (message && message.includes && message.includes('User with this email already exists')) {
      // Display a message suggesting the user to sign in instead of signing up
      setMessage('User with this email already exists! Try signing in instead.');
    } else {
      setMessage(message);
    }
    setMessageType(type);
  };

  useEffect(() => {
    // Simulate a delay before showing content
    const delayToShowContent = setTimeout(() => {
      setLoading(false);
    }, 2000); // 3 seconds delay

    // Clear the timeout to prevent memory leaks when the component unmounts
    return () => clearTimeout(delayToShowContent);
  }, []); // Empty dependency array ensures useEffect runs only once

  if (!fontsLoaded || loading) {
    // Fonts are still loading, you can return a loading indicator
    return <Loader />;
  }

  const goBack = () => {
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="auto" />
        {/* <PageBackIcon onPress={goBack}>
          <PageBackPng source={require('./../assets/back-arrow.png')} />
          <PageBackText style={{ fontFamily: 'Inter-Regular' }}>Back</PageBackText>
        </PageBackIcon> */}
        <PageTitle style={{ fontFamily: 'Inter-Bold' }}>Sign Up</PageTitle>
        <InnerContainer>
          <Formik
            initialValues={{ name: '', password: '', email: '' }}
            onSubmit={(values, { setSubmitting }) => {
              if (values.email == '' || values.password == '' || values.name == '' || values.ConfirmPassword == '') {
                handleMessage('Please fill in all fields');
                setSubmitting(false);
              } else if (values.password !== values.ConfirmPassword) {
                handleMessage('Passwords do not match');
                setSubmitting(false);
              } else {
                handleSignup(values, setSubmitting);
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
              <StyledFormArea>
                <MyTextInput
                  icon="person"
                  placeholder="Full Name"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />

                <MyTextInput
                  icon="mail"
                  placeholder="Email"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />

                <MyTextInput
                  icon="lock"
                  placeholder="Password"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />

                <MyTextInput
                  icon="lock"
                  placeholder="Confirm Password"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('ConfirmPassword')}
                  onBlur={handleBlur('ConfirmPassword')}
                  value={values.ConfirmPassword}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />

                <MsgBox style={{ fontFamily: 'Inter-Regular' }} type={messageType}>
                  {message}
                </MsgBox>
                {!isSubmitting && (
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText style={{ fontFamily: 'Inter-Bold' }}>Sign Up</ButtonText>
                  </StyledButton>
                )}

                {isSubmitting && (
                  <StyledButton disabled={true}>
                    <ActivityIndicator size="large" color={white} />
                  </StyledButton>
                )}

                <ExtraView>
                  <ExtraText style={{ fontFamily: 'Inter-Regular' }}>Already have an account ?</ExtraText>
                  <TextLink>
                    <TextLinkContent onPress={() => navigation.navigate('Login')} style={{ fontFamily: 'Inter-Bold' }}>
                      Sign In
                    </TextLinkContent>
                  </TextLink>
                </ExtraView>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({ icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={28} color={secondary} />
      </LeftIcon>
      <StyledTextInput {...props} secureTextEntry={isPassword ? hidePassword : false} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'eye' : 'eye-off'} size={25} color={secondary} />
        </RightIcon>
      )}
    </View>
  );
};

export default Signup;
