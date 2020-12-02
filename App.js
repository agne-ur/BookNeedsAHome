
import React, {useState} from 'react';
import { SafeAreaView, TextInput } from 'react-native';
import AppPicker from './app/app/components/AppPicker';
import AppTextInput from './app/app/components/AppTextInput';
import ListingEditScreen from './app/app/screens/ListingEditScreen';
import ListingsScreen from './app/app/screens/ListingsScreen';
import LoginScreen from './app/app/screens/LoginScreen';
import MapScreen from './app/app/screens/MapScreen';

import { AppNavigator } from './routes/AppNavigator'
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from './routes/AuthNavigator';
import navigationTheme from './routes/navigationTheme';
import AppBottomNavigator from './routes/AppBottomNavigator';


export default function App() {

  return (
    <NavigationContainer theme={navigationTheme}>
      <AppBottomNavigator />
    </NavigationContainer>
  )
}

