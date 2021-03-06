import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppTextInput from "../AppTextInput"
import { useFormikContext } from 'formik'
import ErrorMessage from "./ErrorMessage"

export default function AppFormField({name, ...otherProps}) {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
    return (
        <>
        <AppTextInput   
            onBlur={() => setFieldTouched(name)}
            onChangeText={handleChange(name)}
            {...otherProps} 
        />
        {touched[name] && <ErrorMessage error={errors[name]} />}
        </>
    )
}

const styles = StyleSheet.create({})
