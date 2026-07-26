import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const StatusBarHeight = Constants.statusBarHeight;

export const colors = {
  primary: '#ffffff',
  secondary: '#BB84E8',
  tertiary: '#BCA4DA',
};

const { primary, secondary, tertiary } = colors;

export const StyledContainer = styled.ImageBackground`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 10}px;
  justify-content: center;
  align-items: center;
  background-color: ${tertiary};
`;

StyledContainer.defaultProps = {
  source: require('./../assets/img/about_bg.png'),
  resizeMode: 'cover',
};

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding-top: 20px;
`;

export const PageLogo = styled.Image`
  width: 300px;
  height: 300px;
  position: absolute;
  opacity: 0.2;
`;

export const PageTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${primary};
  margin-bottom: 15px;
  text-align: center;
`;

export const DescriptionTextTitle = styled.Text`
  font-size: ${hp(1.9)}px;
  font-weight: bold;
  color: ${primary};
  margin-bottom: 1px;
  margin-top: 1px;
  text-align: center;
`;

export const DescriptionText = styled.Text`
  font-size: ${hp(1.72)}px;
  color: ${primary};
  margin-bottom: 10px;
  text-align: center;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px 80px;
  background-color: ${secondary};
  border-radius: 20px;
  margin-vertical: 5px;
  shadowcolor: '#000';
  shadowoffset: {
    width: 0;
    height: 2;
  }
  shadowopacity: 0.5;
  elevation: 5;
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const ExtraText = styled.Text`
  font-size: 10px;
  color: ${primary};
  font-style: italic;
  margin-top: 10px;
  text-align: center;
`;
