import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { Octicons, Ionicons } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native-paper';
import axios from 'axios';
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  StyledFromArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  colors,
  StyledButton,
  ButtonText,
  MsgBox,
  ORText,
  SignUpLink,
  SignUpText,
  ExternalText,
  SocialButtonContainer,
  GoogleButton,
  FacebookButton,
  SocialLogo,
  ForgottenPasswordText,
} from './../components/Login styles';
import { View, TouchableOpacity, Linking } from 'react-native';
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';
const { brand, darklight } = colors;



const Login = ({ navigation }) => {


  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  // Function to handle forgotten password
  const handleForgottenPassword = () => {
    Linking.openURL('https://example.com/forgot-password');
  };

  const handleSignUp = () => {
    navigation.navigate('Signup');
  };

  const handleGoogle = () => {
    Linking.openURL('https://accounts.google.com/');
  };

  const handleFacebook = () => {
    Linking.openURL('https://www.facebook.com/');
  };

  const handleSignin = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = 'https://still-cove-22678-83bb220a995a.herokuapp.com/user/signin';

    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { message, status, data } = result;

        if (status !== 'SUCCESS') {
          handleMessage(message, status);
        } else {
          // Extract the user's name from the response data
          const userName = data[0].name;

          // Navigate to Dashboard screen and pass the user's name as a parameter
          navigation.navigate('Dashboard', { userName: userName });
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
    setMessage(message);
    setMessageType(type);
  };

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <PageLogo resizeMode="cover" source={require('./../assets/img/Logo.png')} />
        <InnerContainer>
          <PageTitle>Log In</PageTitle>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
              if (values.email == '' || values.password == '') {
                handleMessage('Please fill all fields');
                setSubmitting(false);
              } else {
                handleSignin(values, setSubmitting);
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
              <StyledFromArea>
                <MyTextInput
                  icon="mail"
                  label="Enter your email"
                  placeholderTextColor={darklight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyBoardType="email-address"
                />

                <MyTextInput
                  icon="lock"
                  label="Password"
                  placeholderTextColor={darklight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />

                <MsgBox type={messageType}>{message}</MsgBox>

                {!isSubmitting && (
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Sign In</ButtonText>
                  </StyledButton>
                )}

                {isSubmitting && (
                  <StyledButton disabled={true}>
                    <ActivityIndicator size="small" color="white" />
                  </StyledButton>
                )}

                <TouchableOpacity onPress={handleForgottenPassword}>
                  <ForgottenPasswordText>Forgott password?</ForgottenPasswordText>
                </TouchableOpacity>

                <ORText>OR</ORText>

                <SignUpLink onPress={handleSignUp}>
                  <SignUpText>Sign Up</SignUpText>
                </SignUpLink>

                <ExternalText>Or sign in With</ExternalText>

                <SocialButtonContainer>
                  <GoogleButton onPress={handleGoogle}>
                    <SocialLogo source={require('./../assets/img/Google.png')} />
                  </GoogleButton>

                  <FacebookButton onPress={handleFacebook}>
                    <SocialLogo source={require('./../assets/img/Facebook.png')} />
                  </FacebookButton>
                </SocialButtonContainer>
              </StyledFromArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel style={{ fontSize: 17.5, color: '#471aa0', }}>{label}</StyledInputLabel>
            <StyledTextInput
                {...props}
                keyboardType={isPassword ? 'default' : 'email-address'}
            />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? "eye-off-outline" : "eye-outline"} size={30} color={brand} />
                </RightIcon>
            )}
        </View>
  );
};

export default Login;
