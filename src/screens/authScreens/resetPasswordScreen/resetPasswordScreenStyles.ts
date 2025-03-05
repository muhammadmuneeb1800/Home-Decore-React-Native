import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  main: {
    marginTop: 50,
  },
  change: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 22,
    color: COLORS.blackDark,
  },
  para: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 17,
    color: COLORS.blackDark,
    marginTop: 15,
  },
  form: {
    marginTop: 45,
  },
  input: {
    marginTop: 15,
  },
  reset: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
