import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#7140E6',
    },
    header: {
        flex: 1,
        width: '100%',
        backgroundColor: '#7140E6',

        zIndex: -1
    },
    menu: {
        width: 50,
        height: 50,

        marginTop: 10,
        marginLeft: -10,

        paddingLeft: 20,
        paddingRight: 20,

        alignItems: 'center',
        justifyContent: 'center',
    },
    menuImg: {
        width: 30,
        height: 50,
        resizeMode: 'contain',
        alignSelf: 'flex-start',
    },
    userContainer: {
        flex: 6,
        backgroundColor: "#ffffff",

        width: "100%",
        
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

        flexDirection: 'row',
    },
    userImg: {
        flex: 1,
        margin: 10,
        borderRadius: 50,
        
        width: '100%',
        height: 100,

        resizeMode: 'contain'
    },
    userDescription: {
        flex: 3,
        marginTop: 20
    },
    userInfo: {
        flexDirection: "row",
        marginBottom: 10,
        marginTop: 10,
        width: 260
    },
    infoTitle: {
        fontWeight: "bold",
        fontSize: 15,
        width: 100,
    },
    infoValue: {
        marginLeft: 5,
        width: 150,
    }
})

export default styles