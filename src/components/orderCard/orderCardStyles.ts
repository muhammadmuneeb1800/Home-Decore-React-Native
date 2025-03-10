import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  order: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderText: {
    fontSize: 13,
    fontWeight: 300,
    lineHeight: 16,
  },
  line: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    marginVertical: 10,
  },
  main: {
    flexDirection: 'row',
    paddingVertical: 10,
    gap: 7,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: COLORS.secondaryDark,
  },
  data: {
    width: '78%',
  },
  name: {
    fontSize: 15,
    color: COLORS.primaryDark,
    fontWeight: 500,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconsFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  desc: {
    width: '85%',
    marginTop: 5,
    color: COLORS.black,
    fontSize: 12,
    lineHeight: 13,
    fontWeight: 300,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  dollor: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: 400,
  },
});
