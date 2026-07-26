import React, { useEffect, useState } from 'react';
import { StatusBar, ScrollView, Platform, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as Location from 'expo-location';
import Fetchplaces from '../components/Utils/FetchPlaces';
import Loader from '../components/Loadingscreen';
import diseasesInfo from '../components/Utils/diseasesInfo';

import {
  StyledContainer,
  InnerContainer,
  BGimg,
  Maintext,
  DiseaseImage,
  DiseaseMainText,
  DiseaseSubText,
  AssistentText,
  Map,
  MapWrapper,
} from '../components/Result screen style';

import BG from './../assets/BG.png';
import { Marker } from 'react-native-maps';

const ResultScreen = ({ route, navigation }) => {
  const { image, prediction } = route.params; //this will get the image path and the prediction from the previous screen
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(true); // New state to manage loading

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    };

    getLocation();

    // Use watchPositionAsync for continuous location updates
    const locationSubscription = Location.watchPositionAsync(
      { accuracy: Location.Accuracy.High, timeInterval: 5000 },
      (newLocation) => {
        setLocation(newLocation);
      },
    );
  }, []);

  //this will set the user location to the map
  const [mapRegion, setMapRegion] = useState(null);

  useEffect(() => {
    if (location) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0421,
      });
    }
  }, [location]);

  const [placeList, setPlaceList] = useState([]);
  //this will fetch the nearby hospitals
  const GetNearbySearchPlace = () => {
    if (location && location.coords) {
      // Check if location and location.coords are not null
      Fetchplaces.nearbyHospitals(location.coords.latitude, location.coords.longitude)
        .then((resp) => {
          setPlaceList(resp.data.results);
        })
        .catch((error) => {
          console.error('Error fetching nearby hospitals:', error);
        });
    }
  };
  //this will fetch the nearby hospitals
  useEffect(() => {
    GetNearbySearchPlace();
  }, [location]);

  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Gotham Black': require('../assets/fonts/Gotham Black.ttf'),
    'helvetica lite': require('../assets/fonts/helvetica lite.ttf'),
  });

  useEffect(() => {
    // Simulate a delay before showing content (e.g., fetching data)
    const delayToShowContent = setTimeout(() => {
      setLoading(false);
    }, 2000); // 3 seconds delay (adjust as needed)

    // Clear the timeout to prevent memory leaks when the component unmounts
    return () => clearTimeout(delayToShowContent);
  }, []); // Empty dependency array ensures useEffect runs only once

  if (!fontsLoaded || loading) {
    // Fonts are still loading, you can return a loading indicator or null
    return <Loader />;
  }

  const DiseasePreventionTip = ({ tip }) => (
    <Text style={[styles.diseasePreventionTip, styles.diseaseSubText]}>{tip}</Text>
  );

  return (
    <React.Fragment>
      <StatusBar backgroundColor={`rgba(176, 109, 242, 1)`} barStyle="light-content" />
      <ScrollView>
        <StyledContainer>
          <InnerContainer>
            <Maintext style={{ fontFamily: 'Inter-Bold' }}>Here’s the Result </Maintext>
            <DiseaseImage resizeMode="cover" source={{ uri: image }} />
            <DiseaseMainText style={{ fontFamily: 'Gotham Black' }}>
              {prediction ? prediction.predicted_class : 'Loading...'}
            </DiseaseMainText>
            <DiseaseSubText style={{ fontFamily: 'helvetica lite' }}>
              {prediction && diseasesInfo[prediction.predicted_class]
                ? diseasesInfo[prediction.predicted_class].description
                : 'Description not available'}
            </DiseaseSubText>
            {prediction &&
              diseasesInfo[prediction.predicted_class] &&
              diseasesInfo[prediction.predicted_class].preventionTips && (
                <React.Fragment>
                  <AssistentText style={{ fontFamily: 'Gotham Black', marginTop: 10 }}>Prevention Tips:</AssistentText>
                  <ScrollView>
                    {diseasesInfo[prediction.predicted_class].preventionTips.map((tip, index) => (
                      <DiseasePreventionTip key={index} tip={tip} />
                    ))}
                  </ScrollView>
                </React.Fragment>
              )}
            <AssistentText style={{ fontFamily: 'Gotham Black' }}>For further assistance !</AssistentText>
            <MapWrapper>
              <Map showsUserLocation={true} region={mapRegion || undefined}>
                <Marker
                  title="Current Location"
                  coordinate={{ latitude: location?.coords.latitude, longitude: location?.coords.longitude }}
                />
                {placeList.map((item, index) => (
                  <Marker
                    key={index}
                    title={item.name}
                    coordinate={{
                      latitude: item.geometry.location.lat,
                      longitude: item.geometry.location.lng,
                    }}
                  />
                ))}
              </Map>
            </MapWrapper>
          </InnerContainer>
          <BGimg source={BG} />
        </StyledContainer>
      </ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  diseasePreventionTip: {
    fontFamily: 'helvetica lite',
    fontSize: 19,
    color: '#000000',
    textAlign: 'center',
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    lineHeight: 25,
    zIndex: 1,
  },
});

export default ResultScreen;
