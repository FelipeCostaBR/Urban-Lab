import React from 'react'
import {Image, View} from 'react-native'
import {RectButton} from 'react-native-gesture-handler'

import Map from '../../components/Map'
import menuImg from '../../assets/images/menu.png'

import styles from './styles'

function MapScreen({navigation}) {

    function openMenu() {
        navigation.openDrawer();
    }

    return (
        <View style={{flex: 1, position: 'relative'}}>
            <RectButton style={styles.menuContainer} onPress={openMenu}>
                <Image source={menuImg} style={styles.menu} />
            </RectButton>
            

            <View style={{flex: 1}}>
                <Map /> 
            </View>
            
        </View>
    )
}

export default MapScreen