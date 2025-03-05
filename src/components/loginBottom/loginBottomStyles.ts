import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  main: {
    flex: 1,
  },
  top: {
    marginTop: 10,
  },
  wel: {
    marginTop: 50,
    color: COLORS.black,
    fontSize: 20,
    lineHeight: 22,
    fontWeight: 600,
  },
  please: {
    color: COLORS.black,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17,
    marginTop: 8,
  },
  form: {
    marginTop: 40,
  },
  input: {
    marginTop: 25,
  },
  btns: {
    marginTop: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  forgot: {
    marginTop: 7,
    fontSize: 14,
    color: COLORS.black,
    lineHeight: 17,
    fontWeight: 600,
    textAlign: 'center',
  },
  last: {
    marginVertical: 40,
  },
  dont: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginTop: 12,
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
