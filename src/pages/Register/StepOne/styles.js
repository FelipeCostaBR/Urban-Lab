import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#222322",
        
        alignItems: 'center',
    },
    logo: {
        width: 130,
        height: 80,
        resizeMode: 'contain',
        alignSelf: 'flex-start',
        flex: 1,

        marginBottom: 10
    },
    main: {
        paddingLeft: 30,
        paddingRight: 30,

        flex: 6,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        color: "#fff",
        fontSize: 36,
        textAlign: "center",

        marginBottom: 40
    },  
    label: {
        fontSize: 18,
        marginBottom: 7,
        marginLeft: 13,
        
        width: '100%',
        textAlign: 'left',
        color: "#fff"
    },
    forgetPasswordText: {
        color: '#6B38E5',

        textAlign: 'center',
        marginTop: 10,
        marginBottom: 30
    }
    
})

export default styles