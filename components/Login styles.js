import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';

const StatusBarHeight = Constants.statusBarHeight;

//colors
export const colors = {
    primary:'#ffffff',
    secondary:'#1F2937',
    tertiary: '#9747FF',
    darklight: '#9CA3AF',
    brand: '#471AA0',
};

const {primary,secondary,tertiary,darklight,brand} = colors;

export const StyledContainer = styled(ImageBackground)`
  flex: 1;
  padding: 17px;
  background-color: ${primary};
  align-items: center;
`;

StyledContainer.defaultProps = {
  source: require('../assets/img/lg_bg.png'),
  resizeMode: 'cover',
  
};

export const InnerContainer = styled(View)`
    flex: 1;
    width: 100%;
    align-item: center;
`;

export const PageLogo = styled(Image)`
    width: 300px;
    height: 300px;
    position: relative;
    marginTop:40px;
`;

export const PageTitle = styled(Text)`
    font-size: 32px;
    text-align: center;
    font-family: 'Inter-Bold';
    color: ${brand};
    margin-top: -27px;
    margin-bottom: 20px;
`;

export const StyledFromArea = styled(View)`
    width: 100%;
    padding-top: 20px;
    
`;

export const StyledTextInput = styled(TextInput)`
    border-width: 2px; 
    border-color: ${tertiary};
    border-radius: 15px;
    padding: 15px;
    padding-left: 60px;
    padding-right: 55px;
    font-size: 15px;
    height: 49px;
    margin-vertical: 4px;
    margin-bottom: 3px;
`;

export const StyledInputLabel = styled(Text)`
    font-size: 13px;
    text-align: left;
    color: ${secondary};
    font-weight: bold;
`;

export const LeftIcon = styled(View)`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled(TouchableOpacity)`
    right: 15px;
    top: 37px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled(TouchableOpacity)`
    padding: 13px;
    background-color: #BB84E8;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    margin-top: 30px;
    margin-bottom: 20px;
    height: 50px;
    shadow-color: #000;
    shadow-offset: 0px 10px;
    shadow-opacity: 0.3;
    shadow-radius: 10px;
    elevation: 8;
`;

export const ButtonText = styled(Text)`
    color: ${primary};
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: bold;
    width: 100%;
    text-align: center;
`;

export const MsgBox = styled(Text)`
    text-align: center;
    font-size: 13px;
    color:${(props) => (props.type == 'SUCCESS'? 'green': 'red')};
`;

export const ForgottenPasswordLink = styled(TouchableOpacity)`
  margin-top: 10px;
  
`;

export const ForgottenPasswordText = styled(Text)`
  font-size: 17px;
  color: ${brand};
  font-weight: bold;
  text-align: center;
  text-align: center;
`;

export const ORText = styled(Text)`
  font-size: 13.5px;
  color: ${brand};
  text-align: center;
  margin-top: 7px;
  
`;

export const SignUpLink = styled(TouchableOpacity)`
  margin-top: 3px;
  
`;

export const SignUpText = styled(Text)`
  font-size: 15px;
  color: ${brand};
  text-align: center;
  margin-top: 3px;
  font-weight: bold;
`;

export const ExternalText = styled(Text)`
  font-size: 19.7px;
  color: ${brand};
  text-align: center;
  margin-top: 30px;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const SocialButtonContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  margin-top: -6px;
`;

export const GoogleLink = styled(TouchableOpacity)`
  margin-top: 5px;
`;

export const GoogleButton = styled(TouchableOpacity)`
  margin:  12px;
  background-color: ${primary};
  padding: 5px;
  border-radius: 15px;
`;

export const FacebookLink = styled(TouchableOpacity)`
  margin-top: 5px;
`;

export const FacebookButton = styled(TouchableOpacity)`
  margin:  12px;
  background-color: ${primary};
  padding: 5px;
  border-radius: 15px;
`;

export const SocialLogo = styled(Image)`
  width: 30px;
  height: 30px;
`;
