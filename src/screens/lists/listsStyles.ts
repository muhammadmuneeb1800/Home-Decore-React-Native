import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  containerList: {
    marginTop: 30,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: '#f4b4a3',
    borderRadius: 12,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  xSmall: {
    width: '48%',
    height: 100,
  },
  small: {
    width: '48%',
    height: 150,
  },
  medium: {
    width: '48%',
    height: 170,
  },
  large: {
    width: '48%',
    height: 200,
  },
  full: {
    width: '100%',
    height: 100,
  },
});
