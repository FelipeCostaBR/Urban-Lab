import React, { useState } from 'react';
import { View, ActivityIndicator, Image, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout  } from 'react-native-maps';
import {useNavigation} from '@react-navigation/native'

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions'
import userImg from '../../assets/images/user.jpg';

import styles from './styles'

function Map() {

    const {navigate} = useNavigation();

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

  function handleNavigateToOrphanageUserDetail() {
    navigate('Profile')
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
        }}
        calloutAnchor={{
            x: 2.7,
            y: 0.9
        }} 
        >
            <View style={{width: 50, height: 50}}>
                <Image source={userImg} style={{resizeMode: 'cover', borderRadius: 50, width: '100%', height: '100%'}} />
            </View>
           
            <Callout tooltip onPress={() => handleNavigateToOrphanageUserDetail()}>
                <View style={styles.calloutContainer}>
                    <Text style={styles.calloutText}>Beatriz Lima</Text>
                    <Text style={styles.calloutText}>Matemática e Portugues</Text>
                </View>
            </Callout>

        </Marker>

      </MapView>
    </View>
  );
}

export default Map