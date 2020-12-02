import React from "react";
import {createStackNavigator} from "@react-navigation/stack"

import WelcomeScreen from '../app/app/screens/WelcomeScreen'
import LoginScreen from '../app/app/screens/LoginScreen'

const { Navigator, Screen } = createStackNavigator();

const AuthNavigator = () => {
    return (
    <Navigator>
        <Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
        <Screen name="Login" component={LoginScreen} />
    </Navigator>
    )
}

export default AuthNavigator