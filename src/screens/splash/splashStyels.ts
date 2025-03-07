import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  home: {
    fontSize: 55,
    fontWeight: 700,
    color: 'white',
    lineHeight: 50,
    marginTop: 10,
    textAlign: 'center',
  },
  decor: {
    fontSize: 40,
    letterSpacing: 4,
    fontWeight: 300,
    color: 'white',
    lineHeight: 40,
    textAlign: 'center',
  },
});
