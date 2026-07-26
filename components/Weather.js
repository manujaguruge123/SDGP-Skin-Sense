import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, SafeAreaView } from 'react-native';
import SearchBar from './SearchBar';
import { useFonts } from 'expo-font';
import { haze, rainy, snow, sunny } from '../assets/background/index';



export default function Weather({ weatherData, fetchWeatherData }) {
    const [background, setBackground] = useState(null);

    const { weather, name, main: { temp, humidity }, wind: { speed }, uvIndex } = weatherData;
    const [{ main }] = weather;

    useEffect(() => {
        setBackground(getBackground(main));
    }, [weatherData])

    function getBackground(weather) {
        if (weather === 'Snow') return snow;
        if (weather === 'Clear') return sunny;
        if (weather === 'Rain') return rainy;
        if (weather === 'Haze') return haze;
        return haze;
    }


    let textColor = background !== sunny ? 'white' : 'black';
 
    // Round the temperature to one decimal point
    const formattedTemp = (parseFloat(temp) / 10).toFixed(1);

    // Your component logic using weatherData
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={background} style={styles.UVImage} resizeMode='cover'>
                <SearchBar fetchWeatherData={fetchWeatherData} />
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ ...styles.headerText, color: textColor, fontSize: 40, fontFamily: 'Montserrat-Bold' }}>{name}</Text>
                    <Text style={{ ...styles.headerText, color: textColor, fontSize: 33, fontFamily: 'Montserrat-Bold' }}>{main}</Text>
                    <Text style={{ ...styles.headerText, color: textColor, fontSize: 32, fontFamily: 'Montserrat-Regular' }}>{formattedTemp} °C</Text>
                    <Text style={{ ...styles.headerText, color: textColor, fontSize: 22, fontFamily: 'Gotham Black Regular' }}>UV Index : {Math.floor(uvIndex)}</Text>
                </View>
                <View style={styles.extraInfo}>
                    <View style={styles.info}>
                        <Text style={{ fontSize: 18, color: 'white', fontFamily: 'Montserrat-Regular' }}>Humidity</Text>
                        <Text style={{ fontSize: 18, color: 'white', fontFamily: 'Montserrat-Regular' }}>{humidity} %</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={{ fontSize: 18, color: 'white', fontFamily: 'Montserrat-Regular' }}>Wind Speed</Text>
                        <Text style={{ fontSize: 18, color: 'white', fontFamily: 'Montserrat-Regular' }}>{speed} m/s</Text>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff00',
        marginTop: 5,
        marginBottom: 11,
    },
    UVImage: {
        flex: 1,
        height: '100%',
        width: '100%',
        marginTop: 15,
        borderRadius: 18,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#9747ff'
    },
    headerText: {
        marginTop: 6,
    },
    extraInfo: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        padding: 10
    },
    info: {
        width: Dimensions.get('screen').width / 2.5,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
