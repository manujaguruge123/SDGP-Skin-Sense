# Skin Sense

## Project Overview
Skin Sense is a React Native/Expo mobile app for identifying common skin diseases. It blends onboarding, symptom questions, image capture, and result guidance with environmental context such as weather/UV data and nearby hospital locations.

## Problem Statement
Users need fast, accessible guidance for skin concerns, plus prevention tips and nearby care options.

## Solution Summary
Skin Sense guides users through a short questionnaire and image capture, sends images to an ML prediction API, and presents the predicted condition with prevention tips and nearby hospitals on a map. The experience is rounded out with a weather/UV dashboard plus profile, feedback, and contact screens.

## Technical Architecture
- Expo + React Native app with React Navigation stack screens.
- Auth flows call remote signup/signin APIs via Axios.
- Image capture uses Expo Image Picker, converts to base64, and posts to the ML prediction endpoint.
- Results combine static disease info/prevention tips with Expo Location and Google Places API hospital search, rendered on react-native-maps.
- Dashboard integrates OpenWeather API data (temperature, humidity, wind, UV index) with a searchable city input.
- AsyncStorage persists the signed-in user name for the dashboard greeting.

## Key Features
- Welcome screen, login, and signup flows.
- 4-step symptom questionnaire before image capture.
- Camera or gallery image capture with ML prediction submission.
- Results screen with disease description and prevention tips.
- Map view with current location and nearby hospitals.
- Weather and UV index dashboard with city search.
- Profile overview, feedback submission via mail, and contact/about screens.

## Tech Stack
- React Native, Expo, React Navigation
- Axios, Formik, styled-components
- Expo Image Picker, Expo Location, react-native-maps
- OpenWeather API, Google Places API, external auth + ML prediction APIs

## Setup and Run Instructions
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the Expo app:
   ```bash
   npm run start
   ```
3. Optional platform targets:
   ```bash
   npm run android
   npm run ios
   npm run web
   ```

## Challenges Faced
- Managed camera/gallery and location permissions across screens.
- Coordinated multiple external APIs (ML prediction, weather, places, auth) in a mobile flow.
- Designed a results experience that merges ML output with curated prevention guidance.

## Key Learnings
- Integrated device capabilities (image capture, location) with Expo.
- Built a multi-step React Navigation flow for questionnaires and results.
- Combined live API data (weather, hospitals) with static health content.
