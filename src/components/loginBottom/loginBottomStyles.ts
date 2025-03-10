import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  dont: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginTop: 10,
    marginBottom: 6,
  },
  an: {
    color: COLORS.black,
    fontWeight: 300,
    fontSize: 13,
    lineHeight: 17,
    textAlign: 'center',
  },
  up: {
    color: COLORS.primaryDark,
    fontWeight: 300,
    fontSize: 13,
    lineHeight: 17,
    alignItems: 'center',
  },
});
