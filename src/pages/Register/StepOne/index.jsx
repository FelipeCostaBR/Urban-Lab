import React from 'react'
import { View, Text, Image } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import Button from '../../../components/Button'
import Input from '../../../components/Input'

import logoImg from '../../../assets/images/logo.png'
import styles from './styles'

function StepOne() {

    const {navigate} = useNavigation()

    function handleGoToStepTwo() {
        navigate("StepTwo")
    }

    return (
        <View style={styles.container}>

            <Image source={logoImg} style={styles.logo} />
            
            <View style={styles.main}>
                <Text style={styles.title}> Cadastro </Text>

                <Text style={styles.label}>Nome</Text>
                <Input />

                <Text style={styles.label}>Email</Text>
                <Input secureTextEntry={true} />

                <Text style={styles.label}>Confirmar Senha</Text>
                <Input secureTextEntry={true}/>

                <Text style={styles.forgetPasswordText}>Já tem uma conta?</Text>

                <Button text="Enviar" style={{marginBottom: 25}} onPress={handleGoToStepTwo} />
            </View>
            
        </View>
    )
}

export default StepOne
