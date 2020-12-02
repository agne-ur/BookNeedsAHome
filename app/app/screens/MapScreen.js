import React from "react";
import { Text, Image } from "react-native";
import MapView, {Marker, Callout} from "react-native-maps";


export default function MapScreen() {

        return (
          <MapView
            style={{flex: 1 }}
            provider="google"
            region={{
                latitude: 40.76727216,
                longitude: -73.99392888,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
          }}>
              <Marker 
              coordinate={{latitude: 40.758896, longitude: -73.985130}}
              title={'Times Square'}>
                  <Callout>
                      <Image source={require("../assets/hp.png")} style={{width: 50, height: 50}}/>
                      <Text>Fiction lives here!</Text>
                  </Callout>
                  <Image source={require("../assets/hp.png")} style={{width: 50, height: 50}}/>
              </Marker>
              <Marker 
              coordinate={{latitude: 40.7411, longitude: -73.9897}}
              title={"Flatiron"}>
                  <Callout>
                      <Image source={require("../assets/hp6.png")} style={{width: 50, height: 50}}/>
                      <Text>Harry Potter fan</Text>
                  </Callout>
                  <Image source={require("../assets/hp6.png")} style={{width: 50, height: 50}}/>
              </Marker>
          </MapView>
        )
  }