import React from 'react'
import { View, Text, TextInput } from 'react-native'
import {RectButton} from 'react-native-gesture-handler'

import Button from '../../components/Button'
import Input from '../../components/Input'

import styles from './styles'

function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Login </Text>

            <Text style={styles.label}>Email</Text>
            <Input />
            
            <Text style={styles.label}>Senha</Text>
            <Input />

            <Text style={styles.forgetPasswordText}>Esqueceu sua senha?</Text>

            <Button text="Entrar" style={{marginBottom: 25}} />

            <Button primary={false} text="Cadastrar-se" />


        </View>
    )
}

export default Login
