import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'flex-start',
    marginHorizontal: 20,
  },
  detailPosition: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
});
