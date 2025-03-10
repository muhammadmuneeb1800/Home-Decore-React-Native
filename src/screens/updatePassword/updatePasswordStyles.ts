import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  form: {
    marginTop: 70,
  },
  forgot: {
    color: COLORS.primary,
    textAlign: 'right',
    fontWeight: 400,
    marginRight: 20,
    marginVertical: 10,
  },
  formTop: {
    marginTop: 20,
  },
  btn: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
