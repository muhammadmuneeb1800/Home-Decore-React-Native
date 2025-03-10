import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 15,
  },
  main: {
    marginTop: 50,
  },
  img: {
    width: 80,
    height: 80,
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    overflow: 'hidden',
  },
  title: {
    fontWeight: 500,
    fontSize: 15,
    color: COLORS.primaryDark,
  },
  TextDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  minus: {
    backgroundColor: COLORS.secondary,
    borderRadius: 25,
  },
  counterText: {
    fontSize: 15,
    fontWeight: 400,
    color: COLORS.black,
  },
  dollor: {
    fontWeight: 400,
    fontSize: 14,
    color: COLORS.black,
  },
});
