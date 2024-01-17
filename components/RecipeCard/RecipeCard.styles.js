import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 1,
    // borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  cover: {
    width: '100%',
    height: 130,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  cardDetails: {
    backgroundColor: 'white',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  username: {
    color: '#3A865A',
    fontWeight: 'bold',
  },
  text: {
    marginVertical: 10,
    marginHorizontal: 5,
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
  },
});
