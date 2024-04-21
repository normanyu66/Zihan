import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {ToastProvider} from 'react-native-toast-notifications'

import {Nav} from "./router";

Entypo.loadFont()
MaterialCommunityIcons.loadFont()

export default function App() {

  return (
      <ToastProvider>
          <StatusBar barStyle="dark-content" />
          <NavigationContainer>
            <Nav />
          </NavigationContainer>
      </ToastProvider>
  );
}


