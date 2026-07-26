import styled from 'styled-components/native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const colors = {
  primary: '#ffffff',
  secondary: '#E4D0FF',
  tertiary: '#BB84E8', // Add tertiary color here
  darklight: '#000000',
};

const { primary, secondary, tertiary, darklight } = colors;

export const StyledContainer = styled.ImageBackground`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 10}px;
  justify-content: center;
  align-items: center;
`;

StyledContainer.defaultProps = {
  source: require('./../assets/img/sic_bg.png'),
  resizeMode: 'cover',
};

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding-top: 160px;
`;

export const Box = styled.View`
  background-color: ${secondary};
  width: 100%;
  height: 215px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;

export const BoxImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;

export const ImagePreview = styled.Image`
  width: 150px;
  height: 150px;
`;

export const NoPreviewText = styled.Text`
  color: ${darklight};
  font-size: 20px;
  margin-top: 5px;
`;

export const ButtonRow = styled.View`
  flex-direction: row;
  margin-top: 60px;
`;

export const CircleButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  background-color: ${secondary};
  border-radius: 75px;
`;

export const CircleImage = styled.Image`
  width: 50px;
  height: 50px;
`;

export const CircleButtonText = styled.Text`
  color: ${darklight};
  font-size: 13px;
  margin-top: 10px;
  text-align: center;
`;

export const ScanButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  right: 40px;
  background-color: ${tertiary};
  padding: 15px 50px;
  border-radius: 25px;
  shadow-color: ${darklight};
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.5;
  elevation: 5;
`;

export const ScanButtonText = styled.Text`
  color: ${primary}; /* Use primary color */
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 0.5px;
`;
