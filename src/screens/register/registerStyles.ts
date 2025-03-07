import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  form: {
    marginTop: 25,
  },
  input: {
    marginTop: 5,
  },
  terms: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    margin: 'auto',
    width: 290,
  },
  by: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 16,
    color: COLORS.blackDark,
    textAlign: 'center',
  },
  use: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 16,
    color: COLORS.blackDark,
    textAlign: 'center',
  },
  and: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 16,
    color: COLORS.blackDark,
    textAlign: 'center',
  },
  policy: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 16,
    color: COLORS.blackDark,
    textAlign: 'center',
  },
  sign: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  up: {
    color: COLORS.primaryDark,
    fontWeight: 300,
    fontSize: 13,
    lineHeight: 17,
    alignItems: 'center',
  },
  top: {
    marginTop: 20,
  },
  last: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
