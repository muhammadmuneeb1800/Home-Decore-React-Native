import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hi: {
    color: COLORS.primary,
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 24,
  },
  joy: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 16,
  },
  button: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    width: 200,
    margin: 10,
  },
  title: {
    color: COLORS.primary,
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 22,
    textAlign: 'center',
  },
  title1: {
    color: COLORS.primaryDark,
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 22,
    textAlign: 'center',
  },
  searchIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 40,
    width: 35,
    height: 35,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
});
