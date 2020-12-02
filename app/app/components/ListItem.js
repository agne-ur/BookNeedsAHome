import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function ListItem({title, subTitle, image, IconComponent, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
            underlayColor="#CC9966"
            onPress={() => console.log()}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title}>{title}</Text>
                        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={25} />
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: 'row',
        padding: 15
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle: {
        color: "black"
    },
    title: {
        fontWeight: "500",
        fontSize: 20,
    }

})
