import styled from 'styled-components/native';
import Constants  from 'expo-constants';
import * as Font from 'expo-font';

// Load the custom font
Font.loadAsync({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
});

const StatusBarHeight = Constants.statusBarHeight;
//colors
export const colors = {
    primary: '#9747FF',
    secondary: '#471AA0',
    tertiary: '#BB84E8',
    darkLight: '#9C9C9C',
    white: '#F8F6F0',
}

const {primary, secondary, tertiary, darkLight, white,} = colors;

export const StyledContainer = styled.View`
    flex: 1;
    background-color: ${white};
    padding: 25px;
    padding-top: ${StatusBarHeight + 30}px;
`;

export const InnerContainer = styled.View`
    padding-top: 30px;
    flex: 1;
    width: 100%;
    align-items: center;
`;


export const PageTitle = styled.Text`
    font-size: 40px;
    text-align: left;
    color: ${secondary};
    padding-top: 20px;
    padding-left: 13px;

`;

export const StyledFormArea = styled.View`
    width: 95%;
`;

export const StyledTextInput = styled.TextInput`
    font-family: 'Inter-Regular';
    border-width: 2px; 
    border-color: #9747FF;
    border-radius: 15px;
    padding: 15px;
    padding-left: 60px;
    padding-right: 55px;
    font-size: 15px;
    height: 60px;
    margin-vertical: 20px;
    margin-bottom: 10px;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 12px;
    background-color: ${tertiary};
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    margin-top: 70px;
    height: 56px;
    shadow-color: #000;
    shadow-offset: 0px 10px;
    shadow-opacity: 0.3;
    shadow-radius: 10px;
    elevation: 8; /* This is for Android */
`;


export const ButtonText = styled.Text`
    color: ${white};
    font-size: 20px;
`;
export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
    color:${(props) => (props.type == 'SUCCESS'? 'green': 'red')};
`;


export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    margin-top: 50px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${tertiary};
    font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const TextLinkContent = styled.Text`
    color: ${primary};
    padding-left: 10px;
    font-size: 15px;
`;

export const PageBackIcon = styled.TouchableOpacity`
    flex-direction: row;
    padding-left: 13px;
    top: 15px;
    position: absolute;
    z-index: 1;
    
`;
export const PageBackText = styled.Text`
    color: ${secondary};
    font-size: 20px;
    
`;

export const PageBackPng = styled.Image`
    width: 30px;
    height: 30px;
`;