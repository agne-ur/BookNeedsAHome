import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons"

import ListingsScreen from "../app/app/screens/ListingsScreen";
import ListingEditScreen from "../app/app/screens/ListingEditScreen";
import AccountScreen from "../app/app/screens/AccountScreen";
import MapScreen from "../app/app/screens/MapScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";



const Tab = createBottomTabNavigator();

const AppBottomNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen 
            name="Feed" 
            component={FeedNavigator} 
            options={{
                tabBarIcon: ({color,size}) =>
                <MaterialCommunityIcons name="home" color={color} size={size} />
            }}/>
        <Tab.Screen 
            name="ListingEdit" 
            component={ListingEditScreen}
            options={{
                tabBarIcon: ({color,size}) =>
                <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
            }} />
        <Tab.Screen 
            name="Account" 
            component={AccountNavigator}
            options={{
                tabBarIcon: ({color,size}) =>
                <MaterialCommunityIcons name="account" color={color} size={size} />
            }} />
        <Tab.Screen 
            name="Map" 
            component={MapScreen}
            options={{
                tabBarIcon: ({color, size}) =>
                <MaterialCommunityIcons name="map" color={color} size={size} />
            }}/>
    </Tab.Navigator>
)

export default AppBottomNavigator;