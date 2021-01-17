import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import carouselImgOne from '../../../assets/images/landing.jpg'
import menuImg from '../../../assets/images/menu.png'
import styles from './styles'
import { useState } from 'react'

function StepTwo() {

    const {navigate} = useNavigation();
    const [selectedCategories, setSelectedCategories] = useState([]);

    function handleRegisterUser() {
        navigate("StepOne")
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={menuImg} style={styles.logo} />
                <Text style={styles.title}>Eventos</Text>
            </View>

            <View style={styles.carousel}>
                <Image source={carouselImgOne} style={styles.carouselImg} />
            </View>

            <ScrollView style={styles.eventsContainer}>

                <View style={styles.eventWrapper}>            
                    <Image source={carouselImgOne} style={styles.eventImg} />
                    <View style={styles.eventInfo}>
                        <Text style={styles.eventTitle}>Nome do Evento</Text>
                        <View style={styles.eventDescription}>
                            <Text style={styles.descriptionTitle}>Horário</Text>
                            <Text style={styles.descriptionValue}>12:00</Text>
                        </View>
                        <View style={styles.eventDescription}>
                            <Text style={styles.descriptionTitle}>Horário</Text>
                            <Text style={styles.descriptionValue}>Pinheiros-SP</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
            
        </View>
    )
}

export default StepTwo
