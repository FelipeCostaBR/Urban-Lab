import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import {RectButton} from 'react-native-gesture-handler'

import {Feather} from '@expo/vector-icons'
import carouselImgOne from '../../assets/images/landing.jpg'
import menuImg from '../../assets/images/menu.png'
import styles from './styles'

function Events({navigation}) {

    function openMenu() {
        navigation.openDrawer();
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <RectButton onPress={openMenu} style={styles.menu}>
                    <Image source={menuImg} style={styles.menuImg} />
                </RectButton>
        
                <Text style={styles.title}>Eventos</Text>
            </View>

            <ScrollView style={styles.scroll}>
                <View style={styles.scrollWrapper}>

                    <View style={styles.carousel}>
                        <Image source={carouselImgOne} style={styles.carouselImg} />
                    </View>

                    <View style={styles.eventsContainer}>

                        <View style={styles.eventWrapper}>            
                            <Image source={carouselImgOne} style={styles.eventImg} />
                            
                            <View style={styles.eventInfo}>
                                
                                <Text style={styles.eventTitle}>Nome do Evento</Text>

                                <View style={styles.eventDescription}>
                                    <Text style={styles.descriptionTitle}>Data:</Text>
                                    <Text style={styles.descriptionValue}>12/01/2020</Text>
                                </View>

                                <View style={styles.eventDescription}>
                                    <Text style={styles.descriptionTitle}>Horário:</Text>
                                    <Text style={styles.descriptionValue}>12:00</Text>
                                </View>

                                <View style={styles.eventDescription}>
                                    <Text style={styles.descriptionTitle}>Local: </Text>
                                    <Text style={styles.descriptionValue}>Pinheiros-SP</Text>
                                </View>
                            </View>

                            <Feather name="heart" size={25} style={styles.icon}/>
                        </View>
                        
                        <View style={styles.eventWrapper}>            
                            <Image source={carouselImgOne} style={styles.eventImg} />
                            
                            <View style={styles.eventInfo}>
                                
                                <Text style={styles.eventTitle}>Nome do Evento</Text>

                                <View style={styles.eventDescription}>
                                    <Text style={styles.descriptionTitle}>Data:</Text>
                                    <Text style={styles.descriptionValue}>12/01/2020</Text>
                                </View>

                                <View style={styles.eventDescription}>
                                    <Text style={styles.descriptionTitle}>Horário:</Text>
                                    <Text style={styles.descriptionValue}>12:00</Text>
                                </View>

                                <View style={styles.eventDescription}>
                                    <Text style={styles.descriptionTitle}>Local: </Text>
                                    <Text style={styles.descriptionValue}>Pinheiros-SP</Text>
                                </View>
                            </View>

                            <Feather name="heart" size={25} style={styles.icon}/>
                        </View>
                        
                        <View style={styles.eventWrapper}>            
                            <Image source={carouselImgOne} style={styles.eventImg} />
                            
                            <View style={styles.eventInfo}>
                                
                                <Text style={styles.eventTitle}>Nome do Evento</Text>

                                <View style={styles.eventDescription}>
                                    <Text style={styles.descriptionTitle}>Data:</Text>
                                    <Text style={styles.descriptionValue}>12/01/2020</Text>
                                </View>

                                <View style={styles.eventDescription}>
                                    <Text style={styles.descriptionTitle}>Horário:</Text>
                                    <Text style={styles.descriptionValue}>12:00</Text>
                                </View>

                                <View style={styles.eventDescription}>
                                    <Text style={styles.descriptionTitle}>Local: </Text>
                                    <Text style={styles.descriptionValue}>Pinheiros-SP</Text>
                                </View>
                            </View>

                            <Feather name="heart" size={25} style={styles.icon}/>
                        </View>
                        
                        <View style={styles.eventWrapper}>            
                            <Image source={carouselImgOne} style={styles.eventImg} />
                            
                            <View style={styles.eventInfo}>
                                
                                <Text style={styles.eventTitle}>Nome do Evento</Text>

                                <View style={styles.eventDescription}>
                                    <Text style={styles.descriptionTitle}>Data:</Text>
                                    <Text style={styles.descriptionValue}>12/01/2020</Text>
                                </View>

                                <View style={styles.eventDescription}>
                                    <Text style={styles.descriptionTitle}>Horário:</Text>
                                    <Text style={styles.descriptionValue}>12:00</Text>
                                </View>

                                <View style={styles.eventDescription}>
                                    <Text style={styles.descriptionTitle}>Local: </Text>
                                    <Text style={styles.descriptionValue}>Pinheiros-SP</Text>
                                </View>
                            </View>

                            <Feather name="heart" size={25} style={styles.icon}/>
                        </View>
                        
                        <View style={styles.eventWrapper}>            
                            <Image source={carouselImgOne} style={styles.eventImg} />
                            
                            <View style={styles.eventInfo}>
                                
                                <Text style={styles.eventTitle}>Nome do Evento</Text>

                                <View style={styles.eventDescription}>
                                    <Text style={styles.descriptionTitle}>Data:</Text>
                                    <Text style={styles.descriptionValue}>12/01/2020</Text>
                                </View>

                                <View style={styles.eventDescription}>
                                    <Text style={styles.descriptionTitle}>Horário:</Text>
                                    <Text style={styles.descriptionValue}>12:00</Text>
                                </View>

                                <View style={styles.eventDescription}>
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

export default Events
