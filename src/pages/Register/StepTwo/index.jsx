import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import Button from '../../../components/Button'

import logoImg from '../../../assets/images/logo.png'
import styles from './styles'
import { useState } from 'react'

function StepTwo() {

    const {navigate} = useNavigation();
    const [selectedCategories, setSelectedCategories] = useState([]);

    function addCategoryToSelectedCategories(category) {
        
    }

    function handleRegisterUser() {
        navigate("StepThree")
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg} style={styles.logo} />

                <Text style={styles.title}>Bem Vindo "Nome da Pessoa"</Text>
                <Text style={styles.subTitle}>Para começar nos diga qual seus interesses</Text>

            </View>

            <ScrollView style={styles.categoriesContainer}>
                <View style={styles.categoriesWrapper}>
                    
                    <TouchableOpacity style={[styles.category, styles.selected]}>
                        <Text style={styles.categoryText}>Português</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[styles.category, styles.notSelected]}>
                        <Text style={styles.categoryText}>Matematica</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[styles.category, styles.notSelected]}>
                        <Text style={styles.categoryText}>Ciencias</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[styles.category, styles.notSelected]}>
                        <Text style={styles.categoryText}>Ingles</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[styles.category, styles.notSelected]}>
                        <Text style={styles.categoryText}>Trabalho</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[styles.category, styles.selected]}>
                        <Text style={styles.categoryText}>Cultura</Text>
                    </TouchableOpacity>
            
                </View>
        
            </ScrollView>

            <View style={styles.footer}>
                <Button text="Avançar" onPress={handleRegisterUser} /> 
            </View>
        </View>
    )
}

export default StepTwo
