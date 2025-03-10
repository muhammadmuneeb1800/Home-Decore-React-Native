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
    borderRadius: 23,
  },
  input: {
    width: '90%',
    color: COLORS.primaryDark,
  },
  input1: {
    color: COLORS.primaryDark,
  },
  searchInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: COLORS.primaryDark,
    borderWidth: 1.5,
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  search: {
    fontSize: 13,
    color: COLORS.newBlack,
    fontWeight: 300,
    paddingHorizontal: 10,
    lineHeight: 16,
    width: '90%',
  },
  div: {
    backgroundColor: COLORS.primary,
    padding: 3,
    borderRadius: 25,
  },
});
