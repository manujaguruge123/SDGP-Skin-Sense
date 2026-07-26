import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import Constants from 'expo-constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';

//colors
export const colors = {
  primary: '#9747FF',
  secondary: '#471AA0',
  tertiary: '#BB84E8',
  darkLight: '#9C9C9C',
  white: '#F8F6F0',
  black: '#000000',
};

const { black, white, tertiary } = colors;

const StatusBarHeight = Constants.statusBarHeight;

const { height, width } = Dimensions.get('window');

export const StyledContainer = styled.View`
  flex: 1;
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const Maintext = styled.Text`
  font-size: ${hp(3.5)}px;
  color: ${black};
  font-weight: 700;
  margin-top: ${hp(5)}px;
  margin-bottom: ${hp(2)}px;
  z-index: 1;
`;

export const BGimg = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const DiseaseImage = styled.Image`
  border-radius: 20px;
  width: ${wp(90)}px;
  height: ${hp(28)}px;
  z-index: 1;
`;

export const DiseaseMainText = styled.Text`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: ${hp(3.5)}px;
  color: ${black};
  z-index: 1;
`;

export const DiseaseSubText = styled.Text`
  font-size: ${hp(1.9)}px;
  color: ${black};
  text-align: center;
  padding: 10px;
  line-height: ${hp(2.5)}px;
  z-index: 1;
`;

export const AssistentText = styled.Text`
  font-size: ${hp(2.4)}px;
  color: ${black};
  padding-right: ${wp(1)}px;
  z-index: 1;
`;

export const MapWrapper = styled.View`
  border-radius: 20px;
  overflow: hidden;
  width: ${wp(95)}px;
  height: ${hp(25)}px;
  margin-top: ${hp(1.5)}px;
  margin-bottom: ${hp(2)}px;
  z-index: 1;
`;

export const Map = styled(MapView)`
  flex: 1;
  width: 100%;
  height: 100%;
`;
