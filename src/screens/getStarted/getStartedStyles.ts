import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  imgBox: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 15,
  },
  homeText: {
    fontSize: 55,
    fontWeight: 700,
    color: COLORS.primary,
    lineHeight: 50,
    marginTop: 10,
    textAlign: 'center',
  },
  decorText: {
    fontSize: 40,
    letterSpacing: 5,
    fontWeight: 300,
    color: COLORS.primary,
    lineHeight: 40,
    textAlign: 'center',
  },
  paraText: {
    marginVertical: 20,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 14,
    color: COLORS.black,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  buttons: {
    marginBottom: 30,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
  },
});
