import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#222322',
    },
    header: {
        width: '100%',
        backgroundColor: '#7140E6',
        paddingLeft: 20,
        paddingRight: 20,
        zIndex: -1,
        paddingBottom: 20
    },
    logo: {
        width: 130,
        height: 80,
        resizeMode: 'contain',
        alignSelf: 'flex-start',
        
        marginTop: 10,
        marginLeft: -20
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        color: "#ffffff",
    },
    subTitle: {
        fontSize: 18,
        textAlign: 'center',
        color: "#ffffff",

        marginTop: 12
    },
    footer: {
        flex: 1, 
        backgroundColor: '#222322', 
        width: '100%',
        alignItems: 'center'
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 20,
        
        width: '90%',
        height: 120,

        marginTop: 20,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,

        marginBottom: 15
    }
    
})

export default styles