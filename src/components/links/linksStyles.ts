import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  searchIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 40,
    width: 35,
    height: 35,
  },
  text: {
    fontSize: 20,
    color: COLORS.black,
    fontWeight: 400,
  },
});
