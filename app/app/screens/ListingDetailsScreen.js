import React from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'

import ListItem from "../components/ListItem"

export default function ListingDetailsScreen({route}) {

    const listing = route.params;

    return (
        <View>
            <Image style={styles.image} source={listing.image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{listing.title}</Text>
                <Text style={styles.price}>${listing.price}</Text>
                <View style={styles.userContainer}>
                    <ListItem 
                        image={require('../assets/girl_face.png')}
                        title="Agne Urbaityte"
                        subTitle="3 listings"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300
    },
    price: {
        color: "#5b4a3d",
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    userContainer: {
        marginVertical: 40,
    }
})
