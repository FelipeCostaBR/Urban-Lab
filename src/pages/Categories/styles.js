import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#8257E5',
        padding: 20,

    },
    mainWrapper: {
        flex: 1,
        width: "100%",

        display: 'flex',
        justifyContent: 'space-between',
    },
    beginJourneyContainer: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    verticalRow: {
        height: 100,
        width: 5,

        backgroundColor: '#000',
        alignSelf: 'center',
    },
    professionalCategoriesContainer: {
        flex: 3,
        alignItems: 'center',
    },
    categoryContainer: {
        backgroundColor: '#C4C4C4',
        borderRadius: 50,

        width: '100%',
        maxWidth: 200,
        height: '100%',
        maxHeight: 50,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        marginTop: 15,
        marginBottom: 15
    },
    
})

export default styles