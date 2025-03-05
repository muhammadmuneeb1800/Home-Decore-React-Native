import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  button: {
    width: 220,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: COLORS.primary,
  },
  button2: {
    width: 220,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: COLORS.secondary,
  },
  buttonText: {
    fontSize: 20,
    color: COLORS.primaryDark,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  buttonText2: {
    fontSize: 20,
    color: COLORS.secondaryDark,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});
