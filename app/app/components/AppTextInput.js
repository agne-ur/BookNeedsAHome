import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from "../config/styles.js"

const AppTextInput = ( {icon, ...otherProps} ) => {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={'black'} style={styles.icon}/>}
            <TextInput style={defaultStyles.text} {...otherProps}/>
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efeae1',
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10,
    }
})
