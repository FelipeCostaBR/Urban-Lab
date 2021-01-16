import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    landingImg: {
        maxHeight: 250,
        width: '100%',
        resizeMode: "cover"
    },
    mainContent: {
        backgroundColor: "#ffffff",
        width: '85%',

        marginTop: -70,
        padding: 25,

        alignSelf: 'center',

        borderRadius: 15
    },
    mainWrapper: {
        alignItems: 'center',        
    },
    title: {
        fontSize: 24,
        lineHeight: 28,
        marginTop: 12,
        
        color: '#000000',
    },
    subTitle: {
        marginTop: 10,
        marginBottom: 20,

        lineHeight: 21,
        color: "#000000",

        width: "85%",
    },
    categoriesContainer: {
        flex: 1,
        marginBottom: 40,
        marginTop: 30,
        width: '100%',

        alignItems: 'center',
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    categoryContainer: {
        width: 125,
        marginBottom: 20,

        position: 'relative'
    },
    categoryImg: {
        resizeMode: 'contain',
    },
    categoryText: {
        fontSize: 15,
        textAlign: 'center',

        marginTop: 5
    },
    categoryIcon: {
        position: 'absolute',
        top: 0,
        right: 5
    }
    
})

export default styles