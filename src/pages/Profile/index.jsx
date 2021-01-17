import React from 'react'
import { View, Text, Image } from 'react-native'
import {RectButton} from 'react-native-gesture-handler'

import userImg from '../../assets/images/user.jpg'
import menuImg from '../../assets/images/menu.png'
import styles from './styles'

function Profile({navigation}) {

    function openMenu() {
        navigation.openDrawer();
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <RectButton style={styles.menu} onPress={openMenu}> 
                    <Image source={menuImg} style={styles.menuImg} />
                </RectButton>
            </View>

            <View style={styles.userContainer}>
                    <Image source={userImg} style={styles.userImg} />
                    
                    <View style={styles.userDescription}>
                
                        <Text style={styles.infoTitle}>Lucas_123</Text>

                        <View style={styles.userInfo}>
                            <Text style={styles.infoTitle}>Localização:</Text>
                            <Text style={styles.infoValue}>Camaçari-BA</Text>
                        </View>

                        <View style={styles.userInfo}>
                            <Text style={styles.infoTitle}>Interesses:</Text>
                            <Text style={styles.infoValue}>Matematica, Tecnologia, Ciencia</Text>
                        </View>
                        
                    </View>
                </View>

                <View style={styles.othersInfo}>
                    
                        
                </View>
        </View>
    )
}

export default Profile
