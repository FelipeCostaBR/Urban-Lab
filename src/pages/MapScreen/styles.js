import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    menuContainer: {
        position: 'absolute', 
        top: 5, 
        left: 5,
        marginTop: 10,
        
        zIndex: 1,
        backgroundColor: "#000",
        padding: 10,
        borderRadius: 30
    },
    menu: {
        width: 40, 
        height: 40, 
         
        resizeMode: 'contain',
    }
})

export default styles