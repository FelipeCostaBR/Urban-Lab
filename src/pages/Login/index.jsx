import React from 'react'
import { View, Text, Image } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import Button from '../../components/Button'
import Input from '../../components/Input'

import logoImg from '../../assets/images/logo.png'
import styles from './styles'

function Login() {

    const {navigate} = useNavigation()

    function handleGoToRegisterPage() {
        navigate("StepOne")
    }

    return (
        <View style={styles.container}>

            <Image source={logoImg} style={styles.logo} />

            <View style={styles.main}>

                <Text style={styles.title}> Login </Text>

                <Text style={styles.label}>Email</Text>
                <Input />
                
                <Text style={styles.label}>Senha</Text>
                <Input secureTextEntry={true}/>

                <Text style={styles.forgetPasswordText}>Esqueceu sua senha?</Text>

                <Button text="Entrar" style={{marginBottom: 25}} />

                <Button primary={false} text="Cadastrar-se" onPress={handleGoToRegisterPage}/>
            </View>
        </View>
    )
}

export default Login
