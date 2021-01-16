import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: 'center',
    },
    title: {
        color: "#000000",
        fontSize: 36,
        textAlign: "center",

        marginBottom: 40
    },  
    label: {
        fontSize: 18,
        marginBottom: 7,
        marginLeft: 13,
        
        width: '100%',
        textAlign: 'left'
    },
    forgetPasswordText: {
        color: '#6B38E5',

        textAlign: 'center',
        marginTop: 10,
        marginBottom: 30
    }
    
})

export default styles