import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
})

const AppContainer =  createAppContainer(switchNavigator);
