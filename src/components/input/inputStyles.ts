import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  lable: {
    fontSize: 15,
    color: COLORS.black,
    fontWeight: 500,
    lineHeight: 22,
    marginBottom: 10,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 16,
    paddingHorizontal: 23,
    paddingVertical: 5,
    backgroundColor: COLORS.secondary,
    borderColor: '#CCCCCC',
    borderRadius: 25,
  },
  input: {
    width: '90%',
    color: COLORS.primaryDark,
  },
  input1: {
    color: COLORS.primaryDark,
  },
});
