import {StyleSheet} from 'react-native';

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
    color: 'white',
  },
  container: {
    flex: 1,
    marginTop: '50%',
  },
  label: {
    alignSelf: 'center',
    color: '#3A865A',
    fontWeight: 'bold',
    marginVertical: 3,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    width: '80%',
    height: 40,
    fontSize: 16,
    margin: 5,
  },
  inputContainer: {
    alignItems: 'center',
  },
  appName: {
    resizeMode: 'contain',
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3A865A',
    marginBottom: 20,
  },
});
