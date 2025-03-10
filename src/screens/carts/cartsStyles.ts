import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  noData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noText: {
    marginTop: 30,
    width: '60%',
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 23,
    textAlign: 'center',
  },
  cartItem: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: 35,
  },
  total: {
    marginTop: 50,
  },
  line: {
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  flexText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  sub: {
    fontWeight: 500,
    fontSize: 15,
    color: COLORS.black,
  },
  dollor: {
    fontSize: 14,
    fontWeight: 400,
    color: COLORS.primaryDark,
  },
  totalText: {
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 23,
    color: COLORS.black,
  },
  dollorText: {
    fontSize: 15,
    fontWeight: 500,
    color: COLORS.primaryDark,
  },
  line1: {
    borderStyle: 'dotted',
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  btn: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
