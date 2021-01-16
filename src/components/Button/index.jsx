import React from 'react'
import { Text } from 'react-native'
import {RectButton} from 'react-native-gesture-handler'

import styles from './styles'

function Button({text, primary = true, style = false, ...props}) {
    return (        
        <RectButton style={[styles.button, primary ? styles.primary : styles.secundary, style ? style : ""]} {...props}>
            <Text style={styles.textButton}>{text}</Text>
        </RectButton>
    )
}

export default Button
