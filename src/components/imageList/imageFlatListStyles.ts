import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';

export const styles = StyleSheet.create({
  main: {
    marginTop: 25,
  },
  img: {
    height: 200,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginTop: 20,
  },
  dot: {
    width: 28,
    height: 6,
    borderRadius: 40,
    backgroundColor: COLORS.primary,
  },
  activeDot: {
    backgroundColor: '#000',
    borderColor: '#000',
    borderWidth: 2,
  },
});
