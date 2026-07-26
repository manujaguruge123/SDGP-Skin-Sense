import React from 'react';

//Navigation Stack
import RootStack from './navigators/RootStack';
import ResultScreen from './screens/Result screen';
import Signup from './screens/Signup';
import MapsView from './components/MapsView';
import LoadingScreen from './components/Loadingscreen';

export default function App() {
  return <RootStack />;
}
