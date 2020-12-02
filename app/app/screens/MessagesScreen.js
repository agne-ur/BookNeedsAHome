import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar, View, Button } from 'react-native'
import ListItem from "../components/ListItem"
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initialMessages = [
    {
      id: 1,
      title: 'T1',
      description: 'D1',
      image: require('../assets/girl_face.png') 
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/girl_face.png') 
    }
]

export default function MessagesScreen( {navigation} ) {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        const newMessages = messages.filter(m => m.id !== message.id)
        setMessages(newMessages)
    }


    return (
        <SafeAreaView style={styles.screen}>
            <FlatList 
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem 
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        renderRightActions={() => 
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    />
                )}
                ItemSeparatorComponent={() => <View style={{ width: '100%', height: 1, backgroundColor: '#000' }}/>}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/girl_face.png') 
                          }
                    ])
                }}
            />
            <Button title="Home" onPress={() => navigation.navigate('Home')}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1
    }
})
