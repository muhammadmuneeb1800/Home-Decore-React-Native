import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  main: {
    marginTop: 50,
  },
  reset: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 22,
    color: COLORS.blackDark,
  },
  para: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 17,
    color: COLORS.blackDark,
    marginTop: 15,
  },
  formWhite: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  form: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.secondary,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
  },
  input: {
    fontSize: 16,
    paddingHorizontal: 23,
    paddingVertical: 15,
    backgroundColor: 'white',
    borderColor: '#CCCCCC',
    borderRadius: 25,
    marginBottom: 50,
    color: COLORS.primaryDark,
  },
  lable: {
    marginTop: 50,
    fontSize: 15,
    color: COLORS.black,
    fontWeight: 500,
    lineHeight: 22,
    marginBottom: 12,
  },
  next: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
