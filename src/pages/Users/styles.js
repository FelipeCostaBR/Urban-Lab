import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#7140E6',
    },
    header: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 35
    },
    menu: {
        width: 50,
        height: 50,

        marginTop: 10,
        marginLeft: -10,

        alignItems: 'center',
        justifyContent: 'center',
    },
    menuImg: {
        width: 30,
        height: 50,
        resizeMode: 'contain',
        alignSelf: 'flex-start',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        color: "#ffffff",
        marginTop: -10
    },
    scroll: {
        flex: 1,
        backgroundColor: "#222322",
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: -15,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    carousel: {
        height: 200,
        width: '100%',

        alignItems: "center"
    },
    carouselImg: { 
        resizeMode: 'cover',
        width: 345,
        maxHeight: 180,
    },
    usersContainer: {
        width: '100%',
        backgroundColor: "#222322",
    },
    userWrapper: {
        backgroundColor: "#fff",

        width: 338,
        height: 100,

        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 10
    },
    userImg: {
        width: 85,
        height: '100%',
        borderRadius: 50
    },
    userInfo: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'space-between',
    },
    userTitle: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    userDescription: {
        flexDirection: 'row',
    },
    descriptionTitle: {
        fontWeight: 'bold',
        width: 85,
        fontSize: 15
    },
    descriptionValue: {
        maxWidth: 120,
    },
    icon: {
        textAlign: 'center',
        alignSelf: 'center',
        width: '10%',
    }
    
})

export default styles