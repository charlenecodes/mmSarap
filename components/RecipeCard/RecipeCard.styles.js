import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        width: '100%'
    },
    cover: {
        width: '100%',
        height: 130
    },
    username: {
        color: 'orange',
        fontWeight: 'bold'
    },
    text: {
        marginVertical: 10,
        marginHorizontal: 5,
        justifyContent: 'flex-end',
        alignContent: 'flex-end'
    }
})
