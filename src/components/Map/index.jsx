import React, { useState } from 'react';
import { View, ActivityIndicator, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker  } from 'react-native-maps';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions'
import userImg from '../../assets/images/user.jpg';

import styles from './styles'

function MarkerIcon() {
    return (
        <View style={{width: 50, height: 50}}>
            <Image source={userImg} style={{resizeMode: 'cover', borderRadius: 50, width: '100%', height: '100%'}} />
        </View>
    )
}

function Map() {

  const [permissions, askPermission] = Permissions.usePermissions("location", {get: true, ask: true})

  const [currentLatitude, setCurrentLatitude] = useState()
  const [currentLongitude, setCurrentLongitude] = useState()

  if (permissions?.status === "granted") {
    Location.watchPositionAsync({
      accuracy: 3,
      distanceInterval: 5
    }, ({coords}) => {
      updateCurrentLocation(coords.latitude, coords.longitude)
    })
  } else {
    askPermission
  }

  function updateCurrentLocation(lat, lng) {
    setCurrentLatitude(lat)
    setCurrentLongitude(lng)
  }

  if(!currentLatitude || !currentLongitude) {
    return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size="large" color="#000" />
    </View>  
  )} 

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: currentLatitude,
          longitude: currentLongitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
      >
        <Marker 
        coordinate={{
          latitude: currentLatitude,
          longitude: currentLongitude
        }} >
          <MarkerIcon />
        </Marker>

      </MapView>
    </View>
  );
}

export default Map