import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        marginTop: 30,
        borderRadius: 30,
        paddingVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: '#3A865A',
    },
    buttonText: {
        fontSize: 20,
        margin: 3,
        color: 'white'
    },
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: '50%'
        // backgroundColor: '#EDF0E5'
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
        width: '80%',
        fontSize: 16,
        margin: 5,
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    appName: {
        // flex: 1,
        resizeMode: 'contain',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    // logo: {
    //     width: 50,
    //     height: 50,
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignContent: 'center'
    // },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    register: {
        color: '#3A865A'
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#3A865A',
        marginBottom: 20,
    },
    
})
