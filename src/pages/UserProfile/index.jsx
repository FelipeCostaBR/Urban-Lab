import React from 'react'
import { View, Text, Image } from 'react-native'
import {RectButton} from 'react-native-gesture-handler'
import {Feather} from '@expo/vector-icons'

import Button from '../../components/Button'

import userImg from '../../assets/images/user3.png'
import menuImg from '../../assets/images/menu.png'
import styles from './styles'

function UserProfile({navigation}) {

    function goBack() {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <RectButton style={styles.menu} onPress={goBack}> 
                    <Feather name="arrow-left" size={40} style={styles.menuImg} color="#04FD50" />
                </RectButton>
            </View>

            <View style={styles.userContainer}>
                <Image source={userImg} style={styles.userImg} />
                    
                    <View style={styles.userDescription}>
                
                        <Text style={styles.infoTitle}>Tom Holland</Text>

                        <View style={styles.userInfo}>
                            <Text style={styles.infoTitle}>Localização:</Text>
                            <Text style={styles.infoValue}>Arujá-SP</Text>
                        </View>

                        <View style={styles.userInfo}>
                            <Text style={styles.infoTitle}>Favoritado:</Text>
                            <Text style={styles.infoValue}> 126 </Text>
                        </View>
                        
                    </View>
            </View>

                <View style={styles.othersInfo}>
                                        
                    <View style={{marginBottom: 40}}>
                        <Text style={styles.title}>Interesses:</Text>
                        <Text style={styles.value}>Matematica, Tecnologia, Ciencia</Text>
                    </View>

                    <View style={{marginBottom: 60}}>
                    <Text style={styles.title}>Descrição</Text>
                    <Text style={styles.value}>Ator, dançarino e cantor. E estou aqui para trazer educação e cultura para os jovens com o objetivo de aumentar as perspectivas de vida e se conectarem mais com as pessoas.</Text>
                    </View>
                    
                    <View style={{alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                    <Button text="Chat" />
                    </View>
                    

                </View>

        </View>
    )
}

export default UserProfile
