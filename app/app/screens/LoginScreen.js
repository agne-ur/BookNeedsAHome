import React from 'react'
import { Image, SafeAreaView, StyleSheet} from 'react-native'

import * as Yup from 'yup'

import {AppFormField, SubmitButton, AppForm} from "../components/forms"

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password")
})

const LoginScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={require("../assets/book_logo.png")} />
            <AppForm 
            initialValues={{email:'', password: ''}}
            onSubmit={values =>console.log(values)}
            validationSchema={validationSchema}>
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        name="email"
                        textContentType="emailAddress"
                        placeholder="Email" 
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <SubmitButton title="Login" />
            </AppForm>
        </SafeAreaView>
    )
}


export default LoginScreen

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 20
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})
