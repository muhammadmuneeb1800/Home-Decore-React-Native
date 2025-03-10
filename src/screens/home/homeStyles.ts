import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    padding: 20,
  },
  Category: {
    fontSize: 15,
    fontWeight: 600,
    lineHeight: 23,
    color: COLORS.primaryDark,
    marginTop: 20,
  },
  best: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 23,
    color: COLORS.primaryDark,
    marginTop: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorText: {
    color: '#FF0000',
    marginBottom: 10,
  },
});
