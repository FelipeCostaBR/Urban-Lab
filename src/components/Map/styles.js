import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        height: '100%',
        width: '100%',
        zIndex: -1
    },
    calloutContainer: {
        width: 160,
        height: 70,
        paddingHorizontal: 16,
        backgroundColor: '#000',
        borderRadius: 16,
        justifyContent: 'center',
        fontWeight: '500'
      },
      calloutText: {
        color: '#04FD50',
        fontSize: 14,
        marginBottom: 3
      },
})

export default styles