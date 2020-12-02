import React from "react";
import {createStackNavigator} from "@react-navigation/stack"
import AccountScreen from "../app/app/screens/AccountScreen";
import MessagesScreen from "../app/app/screens/MessagesScreen";

const Stack = createStackNavigator()

const AccountNavigator= () => (
    <Stack.Navigator>
        <Stack.Screen name="Account" component={AccountScreen}/>
        <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
)

export default AccountNavigator;