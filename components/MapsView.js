import { View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default function MapsView() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      try {
        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
        console.log(currentLocation);
      } catch (error) {
        setErrorMsg('Error getting location');
      }
    })();
  }, []);

  return (
    <View
      style={{
        marginTop: 20,
        borderRadius: 20,
        overflow: 'hidden',
        flex: 1,
        width: '100%',
        height: '100%',
      }}
    >
      {location && (
        <MapView
          style={{
            width: Dimensions.get('screen').width * 0.89,
            height: Dimensions.get('screen').height * 0.23,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {/* You can add markers or other map elements here */}
        </MapView>
      )}
    </View>
  );
}
