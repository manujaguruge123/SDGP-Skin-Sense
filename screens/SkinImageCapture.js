import React, { useState, useEffect } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios'; // Import Axios
import { StatusBar } from 'expo-status-bar';
import {
  StyledContainer,
  InnerContainer,
  Box,
  BoxImage,
  ImagePreview,
  NoPreviewText,
  ButtonRow,
  CircleButton,
  CircleImage,
  CircleButtonText,
  ScanButton,
  ScanButtonText,
} from '../components/SkinImageCapture styles';
import { Linking } from 'react-native';

const SkinImageCapture = ({ navigation }) => {
  const [hasGalleryPermission, setGalleryPermission] = useState(null);
  const [image, setImage] = useState('');
  const [base64_img, setBase64Image] = useState('');
  const [prediction, setPrediction] = useState(null); // State variable to store prediction
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const requestGalleryPermission = async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setGalleryPermission(galleryStatus.status == 'granted');
    };
    requestGalleryPermission();
  }, []);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setLoading(true); // Set loading to true while waiting for prediction
        const base64Image = await convertToBase64(result.assets[0].uri);
        setBase64Image(base64Image);
        console.log('First 50 characters of base64 image:', base64Image.substring(0, 50));
        setImage(result.assets[0].uri);
        console.log('Image selected : ' + result.assets[0].uri);
        sendImageToMLModel(base64Image); // Send image to ML model
      } else {
        console.log('Image selection canceled');
      }
    } catch (error) {
      console.error('Error picking image:', error); // Log error to console
    }
  };

  const convertToBase64 = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const sendImageToMLModel = async (base64Image) => {
    try {
      // Send Axios POST request to ML model endpoint with base64 image data
      const response = await axios.post('https://skinsense-ml-api-a751d4fff7ac.herokuapp.com/predict', {
        image: base64Image,
      });
      console.log('ML Model Response:', response.data);
      setPrediction(response.data); // Store prediction in state variable
    } catch (error) {
      console.error('Error sending image to ML model:', error);
    } finally {
      setLoading(false); // Set loading to false once prediction response is received
    }
  };

  const handleCameraPress = async () => {
    const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
    if (cameraStatus.status === 'granted') {
      try {
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        if (!result.canceled) {
          setLoading(true); // Set loading to true while waiting for prediction
          const base64Image = await convertToBase64(result.assets[0].uri);
          setBase64Image(base64Image);
          console.log('First 50 characters of base64 image:', base64Image.substring(0, 50));
          setImage(result.assets[0].uri);
          console.log('Image selected : ' + result.assets[0].uri);
          sendImageToMLModel(base64Image); // Send image to ML model
        } else {
          console.log('Image selection canceled');
        }
      } catch (error) {
        console.error('Error picking image:', error); // Log error to console
      }
    }
  };

  const handleScanPress = () => {
    if (!image) {
      // Alert the user to select an image
      alert('Please select an image before scanning.');
    } else if (prediction) {
      navigation.navigate('ResultScreen', { image, prediction });
    } else {
      // Handle the case when prediction is not yet available
      console.log('Prediction is not yet available');
    }
  };

  if (hasGalleryPermission === false) {
    return <Text>No access to Internal Storage</Text>;
  }

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <Text style={{ marginTop: -100, textAlign: 'center', fontSize: 28, marginBottom: 50, fontWeight: 'bold' }}>
          Let's Capture a Picture
        </Text>
        <Box>
          {image ? (
            <BoxImage source={{ uri: image }} />
          ) : (
            <>
              <ImagePreview source={require('./../assets/img/scan.jpg')} />
              <NoPreviewText>No Preview</NoPreviewText>
            </>
          )}
        </Box>

        <ButtonRow>
          <CircleButton onPress={pickImage} style={{ marginRight: 26, marginLeft: 3 }}>
            <CircleImage source={require('./../assets/img/gallery.png')} />
            <CircleButtonText>Select from gallery</CircleButtonText>
          </CircleButton>

          <CircleButton onPress={handleCameraPress} style={{ marginLeft: 26, marginRight: 3 }}>
            <CircleImage source={require('./../assets/img/camera.png')} />
            <CircleButtonText>Take a photo</CircleButtonText>
          </CircleButton>
        </ButtonRow>

        {/* Basic instructions for cropping */}
        <Text style={{ marginTop: 30, textAlign: 'center', color: 'rgba(0, 0, 0, 0.3)' }}>
          Please ensure the selected image covers the area of interest adequately. You can crop the image if necessary.
        </Text>
      </InnerContainer>

      <ScanButton onPress={handleScanPress}>
        {loading || !prediction ? ( // Render ActivityIndicator if loading is true or prediction is not available
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <ScanButtonText>Scan</ScanButtonText>
        )}
      </ScanButton>
    </StyledContainer>
  );
};

export default SkinImageCapture;
