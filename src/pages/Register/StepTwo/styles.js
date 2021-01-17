import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        flex: 2,
        width: '100%',
        backgroundColor: '#7140E6',
        paddingLeft: 20,
        paddingRight: 20,
        zIndex: -1
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
    categoriesContainer: {
        width: '100%',
        
        paddingLeft: 20,
        paddingRight: 20,

        backgroundColor: "#222322",
        marginTop: -30
    },
    categoriesWrapper: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    category: {
        width: 150,
        height: 100,

        justifyContent: 'center',
        alignItems: 'center',

        marginTop: 10,
        marginBottom: 10,
        padding: 5,
    },
    categoryText: {
        fontSize: 16,

        textAlign: 'center'
    },
    selected: {
        backgroundColor: "#04FD50"
    },
    notSelected: {
        backgroundColor: "#ffffff",
    }
    
})

export default styles