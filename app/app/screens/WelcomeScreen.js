
import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppButton from "../components/AppButton"

export default function WelcomeScreen({navigation}) {
    return (
        <ImageBackground 
            blurRadius={1}
            style={styles.background}
            source={require("../assets/books_welcome.jpg")}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/book_logo.png")}/>
                <Text style={styles.appName}>Book Needs A Home</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" onPress={() => navigation.navigate('Login')} />
                <AppButton title='Register' color="#5b4a3d" onPress={() => navigation.navigate('Details')} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    appName: {
        color: 'white',
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    },
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    buttonsContainer: {
        padding: 20,
        width: "100%",
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#5b4a3d",
    },
})
