import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import {RectButton} from 'react-native-gesture-handler'

import {Feather} from '@expo/vector-icons'

import userImg from '../../assets/images/user.jpg'
import menuImg from '../../assets/images/menu.png'
import styles from './styles'

function Users({navigation}) {

    function openMenu() {
        navigation.openDrawer();
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <RectButton onPress={openMenu} style={styles.menu}>
                    <Image source={menuImg} style={styles.menuImg} />
                </RectButton>
        
                <Text style={styles.title}>Usuários</Text>
            </View>

            <ScrollView style={styles.scroll}>
                <View style={styles.scrollWrapper}>
                    <View style={styles.usersContainer}>

                        <View style={styles.userWrapper}>            
                            <Image source={userImg} style={styles.userImg} />
                            
                            <View style={styles.userInfo}>
                                
                                <Text style={styles.userTitle}>Eloa Santos</Text>

                                <View style={styles.userDescription}>
                                    <Text style={styles.descriptionTitle}>Interesses: </Text>
                                    <Text style={styles.descriptionValue}>Matemática, asd sCiencia</Text>
                                </View>
                                <View style={styles.userDescription}>
                                    <Text style={styles.descriptionTitle}>Local: </Text>
                                    <Text style={styles.descriptionValue}>Pinheiros-SP</Text>
                                </View>
                            </View>

                            <Feather name="heart" size={25} style={styles.icon}/>
                        </View>

                        <View style={styles.userWrapper}>            
                            <Image source={userImg} style={styles.userImg} />
                            
                            <View style={styles.userInfo}>
                                
                                <Text style={styles.userTitle}>Eloa Santos</Text>

                                <View style={styles.userDescription}>
                                    <Text style={styles.descriptionTitle}>Interesses: </Text>
                                    <Text style={styles.descriptionValue}>Matemática, asd sCiencia</Text>
                                </View>
                                <View style={styles.userDescription}>
                                    <Text style={styles.descriptionTitle}>Local: </Text>
                                    <Text style={styles.descriptionValue}>Pinheiros-SP</Text>
                                </View>
                            </View>

                            <Feather name="heart" size={25} style={styles.icon}/>
                        </View>

                        <View style={styles.userWrapper}>            
                            <Image source={userImg} style={styles.userImg} />
                            
                            <View style={styles.userInfo}>
                                
                                <Text style={styles.userTitle}>Eloa Santos</Text>

                                <View style={styles.userDescription}>
                                    <Text style={styles.descriptionTitle}>Interesses: </Text>
                                    <Text style={styles.descriptionValue}>Matemática, asd sCiencia</Text>
                                </View>
                                <View style={styles.userDescription}>
                                    <Text style={styles.descriptionTitle}>Local: </Text>
                                    <Text style={styles.descriptionValue}>Pinheiros-SP</Text>
                                </View>
                            </View>

                            <Feather name="heart" size={25} style={styles.icon}/>
                        </View>

                        <View style={styles.userWrapper}>            
                            <Image source={userImg} style={styles.userImg} />
                            
                            <View style={styles.userInfo}>
                                
                                <Text style={styles.userTitle}>Eloa Santos</Text>

                                <View style={styles.userDescription}>
                                    <Text style={styles.descriptionTitle}>Interesses: </Text>
                                    <Text style={styles.descriptionValue}>Matemática, asd sCiencia</Text>
                                </View>
                                <View style={styles.userDescription}>
                                    <Text style={styles.descriptionTitle}>Local: </Text>
                                    <Text style={styles.descriptionValue}>Pinheiros-SP</Text>
                                </View>
                            </View>

                            <Feather name="heart" size={25} style={styles.icon}/>
                        </View>

                        <View style={styles.userWrapper}>            
                            <Image source={userImg} style={styles.userImg} />
                            
                            <View style={styles.userInfo}>
                                
                                <Text style={styles.userTitle}>Eloa Santos</Text>

                                <View style={styles.userDescription}>
                                    <Text style={styles.descriptionTitle}>Interesses: </Text>
                                    <Text style={styles.descriptionValue}>Matemática, asd sCiencia</Text>
                                </View>
                                <View style={styles.userDescription}>
                                    <Text style={styles.descriptionTitle}>Local: </Text>
                                    <Text style={styles.descriptionValue}>Pinheiros-SP</Text>
                                </View>
                            </View>

                            <Feather name="heart" size={25} style={styles.icon}/>
                        </View>

                        <View style={styles.userWrapper}>            
                            <Image source={userImg} style={styles.userImg} />
                            
                            <View style={styles.userInfo}>
                                
                                <Text style={styles.userTitle}>Eloa Santos</Text>

                                <View style={styles.userDescription}>
                                    <Text style={styles.descriptionTitle}>Interesses: </Text>
                                    <Text style={styles.descriptionValue}>Matemática, asd sCiencia</Text>
                                </View>
                                <View style={styles.userDescription}>
                                    <Text style={styles.descriptionTitle}>Local: </Text>
                                    <Text style={styles.descriptionValue}>Pinheiros-SP</Text>
                                </View>
                            </View>

                            <Feather name="heart" size={25} style={styles.icon}/>
                        </View>
                        
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Users
