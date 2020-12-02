import React from "react";
import { FlatList, StyleSheet, SafeAreaView } from "react-native";

import Card from "../components/Card"


const listings = [
  {
    id: 1,
    title: "Harry Potter and the Deathly Hallows",
    price: 5,
    image: require("../assets/hp1.jpg"),
  },
  {
    id: 2,
    title: "Harry Potter and the Sorcerers Stone",
    price: 0,
    image: require("../assets/hp2.jpg"),
  },
  {
    id: 3,
    title: "Harry Potter and the Cursed Child",
    price: 0,
    image: require("../assets/hp3.jpg"),
  },
];

function ListingsScreen({navigation}) {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: "#f2ede6",
  },
});

export default ListingsScreen;

// import React, { useState, useEffect } from 'react'
// import { StyleSheet, FlatList, SafeAreaView, View, Button, Text } from 'react-native'
// import listingsApi from "../api/listings"
// import AppButton from "../components/AppButton"

// import Card from "../components/Card"

// const ListingsScreen = () => {

//     const [listings, setListings] = useState([]);
//     const [error, setError] = useState(false)

//     useEffect(() => {
//         loadListings();
//     }, []);

//     const loadListings = async () => {
//         const response = await listingsApi.getListings();
//         if (!response.ok) return setError(true)
//         setError(false)
//         setListings(response.data)
//     }

//     return (
//         <SafeAreaView style={styles.screen}>
//             {error && (
//                 <>
//                     <Text>Could not load the listings</Text>
//                     <AppButton title="Retry" onPress={loadListings}/>
//                 </>
//             )}
//             <View style={styles.view}>
//             <FlatList 
//                 data={listings}
//                 keyExtractor={(listing) => listing.id.toString()}
//                 renderItem={({ item }) => 
//                     <Card 
//                     title={item.title}
//                     subTitle={"$" + item.price}
//                     imageUrl={item.images[0].url}/>
//                 }/>
//             </View>
//         </SafeAreaView>
//     )
// }

// export default ListingsScreen

// const styles = StyleSheet.create({
//     screen: {
//         padding: 20,
//         flex: 1
//       },
//       view: {
//           padding: 20,
//       }
// })
