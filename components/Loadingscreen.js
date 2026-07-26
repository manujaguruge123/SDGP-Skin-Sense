import React from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle="light-content" />
      <View style={styles.container}>
        <Image source={require('./../assets/Skin Sense.png')} style={{ width: 400, height: 400, marginBottom: 20 }} />
        <Image
          source={require('./../assets/output-onlinegiftools.gif')}
          style={{ width: 100, height: 100, marginBottom: 300 }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
