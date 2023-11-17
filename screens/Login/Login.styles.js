import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        borderRadius: 30,
        paddingVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: 'green',
    },
    buttonText: {
        fontSize: 20,
        margin: 5,
        color: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
        width: '70%',
        fontSize: 16,
        margin: 5,
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%',
    },
    register: {
        color: 'green'
    },
    title: {
        fontSize: 26,
        color: 'green',
    }
})
