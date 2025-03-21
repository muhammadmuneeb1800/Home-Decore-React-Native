import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  main: {
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  button: {
    width: 220,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#4CAF50',
    marginTop: 20,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  search: {
    marginTop: 30,
  },
  top: {
    color: COLORS.primaryDark,
    fontWeight: 600,
    fontSize: 22,
    lineHeight: 25,
    marginTop: 40,
  },
  list: {
    marginTop: 20,
  },
});
