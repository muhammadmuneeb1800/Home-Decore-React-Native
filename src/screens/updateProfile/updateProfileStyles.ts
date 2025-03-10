import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  img: {
    marginTop: 23,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    marginHorizontal: 'auto',
    marginBottom: 25,
  },
  icon: {
    backgroundColor: COLORS.primary,
    padding: 7,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 7,
    zIndex: 1,
    bottom: 10,
    right: 20,
    position: 'absolute',
  },
  subContainer: {
    textAlign: 'center',
    backgroundColor: COLORS.lightGrey,
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 10,
    textAlign: 'center',
    color: COLORS.blackDark,
  },
  mainId: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    color: COLORS.blackDark,
  },
  id: {
    fontSize: 13,
    fontWeight: 700,
    color: COLORS.blackDark,
  },
  num: {
    fontSize: 13,
    fontWeight: 400,
    color: COLORS.blackDark,
  },
  form: {
    flex: 1,
    padding: 20,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  formTop: {
    marginTop: 3,
  },
  btn: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
