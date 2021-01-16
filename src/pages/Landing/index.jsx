import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation} from '@react-navigation/native'

import styles from './styles'

import {FontAwesome5} from '@expo/vector-icons'
import LandingImg from '../../assets/images/landing.jpg'
import SEOImg from '../../assets/images/SEO.png'
import CTOImg from '../../assets/images/CTO.png'
import CFOImg from '../../assets/images/CFO.png'
import PersonalDevelopmentImg from '../../assets/images/PersonalDevelopment.png'

function Landing() {

    const {navigate} = useNavigation()

    function handleToLoginPage() {
        navigate('Login')
    }

    return (
        <View style={styles.container} showsVerticalScrollIndicator={false}>
        
            <Image source={LandingImg} style={styles.landingImg} />

            <ScrollView style={styles.mainContent} showsVerticalScrollIndicator={false}>
                <View style={styles.mainWrapper}>                

                    <Text style={styles.title}>Bem vindo ao Urban Lab</Text>

                    <Text style={styles.subTitle}>Contrary to popular belief, Lorem Ipsum is not simply random text.</Text>

                    <RectButton style={styles.button} onPress={handleToLoginPage}>
                        <Text>Login</Text>
                    </RectButton> 

                </View>

                <View style={styles.categoriesContainer}>
                    
                    <TouchableOpacity style={styles.categoryContainer}>
                        <Image source={SEOImg} style={styles.categoryImg} />
                        <Text style={styles.categoryText}>SEO</Text>

                        <FontAwesome5 name="crown" style={styles.categoryIcon} size={15} color="#FEAA02" />

                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.categoryContainer}>
                        <Image source={CTOImg} style={styles.categoryImg} />
                        <Text style={styles.categoryText}>CTO</Text>

                        
                        <FontAwesome5 name="crown" style={styles.categoryIcon} size={15} color="#FEAA02" />

                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.categoryContainer}>
                        <Image source={CFOImg} style={styles.categoryImg} />
                        <Text style={styles.categoryText}>CFO</Text>

                        
                        <FontAwesome5 name="crown" style={styles.categoryIcon} size={15} color="#FEAA02" />

                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.categoryContainer}>
                        <Image source={PersonalDevelopmentImg} style={styles.categoryImg} />
                        <Text style={styles.categoryText}>Desenvolvimento Pessoal</Text>
                    </TouchableOpacity>

                </View> 
                </ScrollView>

        </View>

    )
}

export default Landing
