import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import {RectButton} from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'
import RNPickerSelect from 'react-native-picker-select';


import {Feather} from '@expo/vector-icons'

import userImg from '../../assets/images/user.jpg'
import menuImg from '../../assets/images/menu.png'
import styles from './styles'

function Users({navigation}) {

    const {navigate} = useNavigation();

    function openMenu() {
        navigation.openDrawer();
    }

    function handleGoToUserPage() {
        navigate("Profile")
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <RectButton onPress={openMenu} style={styles.menu}>
                    <Image source={menuImg} style={styles.menuImg} />
                </RectButton>
        
                <Text style={styles.title}>Usuários</Text>
                
                <View style={styles.pickerContainer}>
                    <Text style={styles.pickerName}>Categoria:</Text>
                    <RNPickerSelect
                    style={{
                        inputIOSContainer: {
                            backgroundColor: "#fff",
                            padding: 10,
                            color: "#000",
                            borderRadius: 20,
                            width: 200
                        },
                        placeholder: {color: "#000"}
                    }}
                    onValueChange={(value) => console.log(value)}
                    placeholder="Categorias"
                    items={[
                        { label: 'Football', value: 'football', key: 1 },
                        { label: 'Baseball', value: 'baseball', key: 2 },
                        { label: 'Hockey', value: 'hockey', key: 3 },
                    ]}
                    />
                </View>
            </View>

            <ScrollView style={styles.scroll}>
                <View style={styles.scrollWrapper}>
                    <View style={styles.usersContainer}>

                        <RectButton style={styles.userWrapper} onPress={handleGoToUserPage}>            
                            <Image source={userImg} style={styles.userImg} />
                            
                            <View style={styles.userInfo}>
                                
                                <Text style={styles.userTitle}>Eloa Santos</Text>

                                <View style={styles.userDescription}>
                                    <Text style={styles.descriptionTitle}>Interesses: </Text>
                                    <Text style={styles.descriptionValue}>Matemática, asd sCiencia</Text>
                                </View>
                                <View style={styles.userDescription}>
                                    <Text style={styles.descriptionTitle}>Local: </Text>
                                    <Text style={styles.descriptionValue}>Pinheiros-SP</Text>
                                </View>
                            </View>

                            <Feather name="heart" size={25} style={styles.icon}/>
                        </RectButton>


                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Users
