import React from 'react'
import {Image, TouchableOpacity, View} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'
import {useNavigation} from '@react-navigation/native'
// import AsyncStorage from '@react-native-async-storage/async-storage'

import {Feather} from '@expo/vector-icons'
import imageOne from '../../assets/images/OnBoarding1.png'
import imageTwo from '../../assets/images/OnBoarding2.png'
import imageThree from '../../assets/images/OnBoarding3.png'

import Button from '../../components/Button'
import styles from './styles'

const NextButton = ({...props}) => {
    return (
        <TouchableOpacity style={styles.nextButton} {...props}>
            <Feather name="arrow-right" size={30} color="#7140E6" />
        </TouchableOpacity>
    )
}

const DoneButton = ({...props}) => {
    return (
        <TouchableOpacity style={styles.nextButton} {...props}>
            <Feather name='check' size={30} color="#7140e6" />
        </TouchableOpacity>
    )
}

const DotPagination = (props) => {
    
    const {selected, isLight} = props

    return (
        <View style={styles.dots}>
            {selected && <View style={[styles.activeDot, selected && styles.dotLeft]}/> }
            {isLight && !selected && <View style={[styles.disabledDot, !selected && styles.dotRight]} /> }
        </View>
    )
}

export default function OnboardingScreens() {

    const {navigate} = useNavigation();

    function handleGoToLoginPage() {
        navigate('Login')
    }

    return (
        <Onboarding
        bottomBarColor="#04fd50"
        bottomBarHeight={80}
        containerStyles={styles.container}
        titleStyles={styles.title}
        subTitleStyles={styles.subtitle}
        NextButtonComponent={NextButton}
        DoneButtonComponent={DoneButton}
        onDone={handleGoToLoginPage}
        DotComponent={(props) => <DotPagination {...props} />}
        showSkip={false}
        pages={[
            {
            backgroundColor: '#04FD50',
            image: <Image source={imageOne}  style={{width: 350, height: 250, resizeMode: "contain"}} />,
            title: 'Conheça novas Pessoas',
            subtitle: <Button primary={false} text="Login" onPress={handleGoToLoginPage} />,
            },
            {
            backgroundColor: '#04FD50',
            image: <Image source={imageTwo} style={{width: 350, height: 250, resizeMode: 'contain'}} />,
            title: 'Divida seus conhecimentos',
            subtitle: <Button primary={false} text="Login" onPress={handleGoToLoginPage} />,
            },
            {
            backgroundColor: '#04FD50',
            image: <Image source={imageThree} style={{width: 350, height: 250, resizeMode: "contain"}} />,
            title: 'Encontre um mentor',
            subtitle: <Button primary={false} text="Login" onPress={handleGoToLoginPage} />,
            }
        ]}
        />
    )
}

