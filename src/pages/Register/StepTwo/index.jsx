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

    function addCategoryToSelectedCategories(categoryIndex) {
        setSelectedCategories([...selectedCategories, categoryIndex]);
    }
    
    console.log(selectedCategories.find( category => category === 1))


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
                    
                    <TouchableOpacity 
                    style={[styles.category, selectedCategories.find( category => category === 1) ? styles.selected : styles.notSelected]} 
                    onPress={() => addCategoryToSelectedCategories(1)}
                    >
                        <Text style={styles.categoryText}>Português</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                    style={[styles.category, selectedCategories.find( category => category === 2) ? styles.selected : styles.notSelected]} 
                    onPress={() => addCategoryToSelectedCategories(2)}
                    >
                        <Text style={styles.categoryText}>Português</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                    style={[styles.category, selectedCategories.find( category => category === 3) ? styles.selected : styles.notSelected]} 
                    onPress={() => addCategoryToSelectedCategories(3)}
                    >
                        <Text style={styles.categoryText}>Português</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                    style={[styles.category, selectedCategories.find( category => category === 4) ? styles.selected : styles.notSelected]} 
                    onPress={() => addCategoryToSelectedCategories(4)}
                    >
                        <Text style={styles.categoryText}>Português</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                    style={[styles.category, selectedCategories.find( category => category === 5) ? styles.selected : styles.notSelected]} 
                    onPress={() => addCategoryToSelectedCategories(5)}
                    >
                        <Text style={styles.categoryText}>Português</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                    style={[styles.category, selectedCategories.find( category => category === 6) ? styles.selected : styles.notSelected]} 
                    onPress={() => addCategoryToSelectedCategories(6)}
                    >
                        <Text style={styles.categoryText}>Português</Text>
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
