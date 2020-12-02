import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function ListItemDeleteAction( {onPress} ) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons 
                name="trash-can"
                size={35}
                color="white"
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff6961',
        width: 70,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
