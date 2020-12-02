import React from 'react'
import { StyleSheet, View, SafeAreaView, FlatList, Platform, StatusBar } from 'react-native'
import Icon from '../components/Icon';

import ListItem from '../components/ListItem.js';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: "#5b4a3d"
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: "#5b4a3d"
        },
        targetScreen: "Messages"
    }
]

export default function AccountScreen({navigation}) {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    title="Agne Urbaityte" 
                    subTitle="agne.ur@mail.com"
                    image={require("../assets/girl_face.png")} />
            </View>
            <View style={styles.container}>
                <FlatList 
                data={menuItems}
                keyExtractor={menuItem => menuItem.title}
                renderItem={({ item }) => (
                    <ListItem 
                        onPress={() => navigation.navigate(item.targetScreen)} 
                        title={item.title}
                        IconComponent={
                            <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                         } />
                )} 
                />
            </View>
            <ListItem
                onPress={() => navigation.navigate('Home')} 
                title="Log Out"
                IconComponent={
                    <Icon name="logout" backgroundColor="black" />
                } />
        </SafeAreaView>
    )
}
    
const styles = StyleSheet.create({
      screen: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1
      },
      container: {
          marginVertical: 20
      }
})
    
