import { View, TextInput, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons } from '@expo/vector-icons';

export default function SearchBar({fetchWeatherData}) {

  const [cityName, setCityName] =useState('');
  return (
    <View style={styles.searchBar}>
        <TextInput placeholder='Enter City Name' value={cityName} onChangeText={(text) => setCityName(text) }/>
        <EvilIcons name="search" size={28} color="#9747ff" onPress={()=>fetchWeatherData(cityName)} />
    </View>
  )
}

const styles = StyleSheet.create({

  searchBar:{
    marginTop:30,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width : Dimensions.get('screen').width - 30,
    borderWidth: 1.2,
    borderRadius:26,
    paddingVertical:10,
    marginHorizontal:5,
    paddingHorizontal:15,
    backgroundColor:'white',
    borderColor:'#9747ff'
  },
  // inputStyle: {
  //   fontFamily: 'Montserrat-Regular',
  //   fontSize:13.5,
  //   color:"black",
  //   //backgroundColor:'white'
  // },

})