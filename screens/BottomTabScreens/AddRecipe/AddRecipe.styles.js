import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    label: {
        alignSelf: 'center',
        color: '#3A865A',
        fontWeight: 'bold',
        marginVertical: 3,
    },
    input: {
        color: 'black',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        width: '100%',
        height: 40,
        padding: 5,
        marginBottom: 15,
        fontSize: 20
    },
    submit: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})
