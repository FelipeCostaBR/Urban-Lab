import React from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import Button from '../../../components/Button'

import logoImg from '../../../assets/images/logo.png'
import styles from './styles'

function StepThree() {

    const {navigate} = useNavigation();

    function handleRegisterUser() {
        navigate("Auth")
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg} style={styles.logo} />

                <Text style={styles.title}>Para Finalizar !</Text>
                <Text style={styles.subTitle}>Fale um pouco sobre você</Text>

            </View>

            <TextInput style={styles.input} multiline={true} />

            <View style={styles.footer}>
                <Button text="Avançar" onPress={handleRegisterUser} /> 
            </View>
        </View>
    )
}

export default StepThree
