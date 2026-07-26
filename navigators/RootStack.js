import React from 'react-native';

import { colors } from '../components/styles';
const { tertiary } = colors;

// React navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Signup from '../screens/Signup';
import About from '../screens/AboutUs';
import SkinimageCapture from '../screens/SkinImageCapture';
import Resultscreen from '../screens/Result screen';
import Dashboard from '../screens/dashboard';
import Login from '../screens/Login';
import Welcome from '../screens/welcomePage';
import Questionscreen1 from '../screens/question1';
import Questionscreen2 from '../screens/question2';
import Questionscreen3 from '../screens/question3';
import Questionscreen4 from '../screens/question4';
import Feedback from '../screens/feedback';
import Myprofile from '../screens/myprofile';
import ContactUs from '../screens/contactUs';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: 'transparent' },
          //headerShown: false,
          headerTintColor: 'transparent',
          headerTransparent: true,
          headerTitle: '',
        }}
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerLeft: () => null }} />
        <Stack.Screen name="About" component={About} options={{ headerLeft: () => null }} />
        <Stack.Screen name="SkinimageCapture" component={SkinimageCapture} options={{ headerShown: false }} />
        <Stack.Screen name="ResultScreen" component={Resultscreen} options={{ headerLeft: () => null }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Feedback" component={Feedback} options={{ headerShown: false }} />
        <Stack.Screen name="Myprofile" component={Myprofile} options={{ headerShown: false }} />
        <Stack.Screen name="ContactUs" component={ContactUs} options={{ headerShown: false }} />
        <Stack.Screen name="Questionscreen2" component={Questionscreen2} options={{ headerLeft: () => null }} />
        <Stack.Screen name="Questionscreen1" component={Questionscreen1} options={{ headerLeft: () => null }} />
        <Stack.Screen name="Questionscreen3" component={Questionscreen3} options={{ headerLeft: () => null }} />
        <Stack.Screen name="Questionscreen4" component={Questionscreen4} options={{ headerLeft: () => null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
