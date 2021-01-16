import React from 'react'
import { View, Text, TextInput } from 'react-native'
import {RectButton} from 'react-native-gesture-handler'

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

            <Text>Esqueceu sua senha?</Text>

            <RectButton>
                <Text>Entrar</Text>
            </RectButton>

            <RectButton>
                <Text>Cadastre - se</Text>
            </RectButton>


        </View>
    )
}

export default Login
