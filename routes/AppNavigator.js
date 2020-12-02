
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";



import WelcomeScreen from '../app/app/screens/WelcomeScreen'
import ListingDetailsScreen from '../app/app/screens/ListingDetailsScreen'
import MessagesScreen from "../app/app/screens/MessagesScreen";
import AccountScreen from "../app/app/screens/AccountScreen";
import ListingsScreen from "../app/app/screens/ListingsScreen";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
    <Navigator headerMode="none">
      <Screen name="Home" component={WelcomeScreen} />
      <Screen name="Account" component={AccountScreen} />
      <Screen name="Listings" component={ListingsScreen} />
      <Screen name="Details" component={ListingDetailsScreen} />
      <Screen name="Messages" component={MessagesScreen} />
    </Navigator>
);
  
export const AppNavigator = () => (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
);
  


