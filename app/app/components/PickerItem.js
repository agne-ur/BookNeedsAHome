import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const PickerItem = ({label, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    )
}

export default PickerItem

const styles = StyleSheet.create({
    text: {
        padding: 20
    }
})
