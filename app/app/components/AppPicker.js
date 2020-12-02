import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Modal, Button, SafeAreaView, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from "../config/styles.js"
import PickerItem from './PickerItem.js'

const AppPicker = ( {icon, placeholder, items, onSelectItem, selectedItem} ) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={'black'} style={styles.icon}/>}
    { selectedItem ? <Text style={styles.text}>{selectedItem.label}</Text> : <Text style={styles.placeholder}>{placeholder}</Text>}
                    <MaterialCommunityIcons name="chevron-down" size={20} color={'black'} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <SafeAreaView>
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                        <FlatList 
                            data={items}
                            keyExtractor={item => item.value.toString()}
                            renderItem={({item}) => 
                                <PickerItem label={item.label} onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item)
                                }
                                }/>}
                        />
                </SafeAreaView>
            </Modal>
        </>
    )
}

export default AppPicker

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#efeae1",
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
        fontSize: 18,
        fontFamily: 'Avenir'
    },
    placeholder: {
        color: "gray",
        flex: 1,
        fontSize: 18,
        fontFamily: 'Avenir'
    }
})
