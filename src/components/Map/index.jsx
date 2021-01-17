import React, { useState } from 'react';
import { View, ActivityIndicator, Image, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout  } from 'react-native-maps';
import {useNavigation} from '@react-navigation/native'

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions'
import userOne from '../../assets/images/user.jpg';
import userTwo from '../../assets/images/user2.jpeg';
import userThree from '../../assets/images/user3.png';

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
    navigate('UserProfile')
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
          latitude: -23.4157302,
          longitude: -46.3655371,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
      >
        <Marker 
        coordinate={{
          latitude: -23.4157302,
          longitude: -46.3655371
        }}
        calloutAnchor={{
            x: 2.7,
            y: 0.9
        }} 
        >
            <View style={{width: 50, height: 50}}>
                <Image source={userOne} style={{resizeMode: 'cover', borderRadius: 50, width: '100%', height: '100%'}} />
            </View>
           
            <Callout tooltip onPress={() => handleNavigateToOrphanageUserDetail()}>
                <View style={styles.calloutContainer}>
                    <Text style={styles.calloutText}>Beatriz Lima</Text>
                    <Text style={styles.calloutText}>Matemática e Portugues</Text>
                </View>
            </Callout>

        </Marker>

        <Marker 
        coordinate={{
          latitude: -23.4114131,
          longitude: -46.3646357
        }}
        calloutAnchor={{
            x: 2.7,
            y: 0.9
        }} 
        >
            <View style={{width: 50, height: 50}}>
                <Image source={userThree} style={{resizeMode: 'cover', borderRadius: 50, width: '100%', height: '100%'}} />
            </View>
           
            <Callout tooltip onPress={() => handleNavigateToOrphanageUserDetail()}>
                <View style={styles.calloutContainer}>
                    <Text style={styles.calloutText}>Tom Holland</Text>
                    <Text style={styles.calloutText}>Esporte e Música</Text>
                </View>
            </Callout>

        </Marker>

        <Marker 
        coordinate={{
          latitude: -23.4176751,
          longitude: -46.3679617
        }}
        calloutAnchor={{
            x: 2.7,
            y: 0.9
        }} 
        >
            <View style={{width: 50, height: 50}}>
                <Image source={userTwo} style={{resizeMode: 'cover', borderRadius: 50, width: '100%', height: '100%'}} />
            </View>
           
            <Callout tooltip onPress={() => handleNavigateToOrphanageUserDetail()}>
                <View style={styles.calloutContainer}>
                    <Text style={styles.calloutText}>Ricardo Julio</Text>
                    <Text style={styles.calloutText}>Matemática</Text>
                </View>
            </Callout>

        </Marker>

        <Marker 
        coordinate={{
          latitude: -12.7231119,
          longitude: -38.3271009
        }}
        calloutAnchor={{
            x: 2.7,
            y: 0.9
        }} 
        >
            <View style={{width: 50, height: 50}}>
                <Image source={userThree} style={{resizeMode: 'cover', borderRadius: 50, width: '100%', height: '100%'}} />
            </View>
           
            <Callout tooltip onPress={() => handleNavigateToOrphanageUserDetail()}>
                <View style={styles.calloutContainer}>
                    <Text style={styles.calloutText}>Tom Holland</Text>
                    <Text style={styles.calloutText}>Esportes e Música</Text>
                </View>
            </Callout>

        </Marker>

      </MapView>
    </View>
  );
}

export default Map