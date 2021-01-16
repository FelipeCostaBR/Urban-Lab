import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

function Categories() {
    return (
        <View style={styles.container}>
            <View style={styles.mainWrapper}>

                <View style={styles.beginJourneyContainer}>
                    <View style={styles.categoryContainer}>
                        <Text>
                            Início da Jornada
                        </Text>
                    </View>
                </View>

                <View style={styles.verticalRow}/>
                
                <View style={styles.professionalCategoriesContainer}>
                    <View style={styles.categoryContainer}>
                        <Text>
                            CEO
                        </Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <Text>
                            CTO
                        </Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <Text>
                            CFO
                        </Text>
                    </View>
                </View>
            
            </View>
        </View>
    )
}

export default Categories
