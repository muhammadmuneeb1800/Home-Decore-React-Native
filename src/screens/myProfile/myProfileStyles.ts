import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  mainProfile: {
    marginTop: 25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 10,
    color: COLORS.blackDark,
  },
  mainId: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
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
  input: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    marginTop: 15,
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    borderRadius: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  subCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 13,
    fontWeight: 400,
    color: COLORS.blackDark,
  },
  line: {
    width: 1,
    height: '100%',
    backgroundColor: COLORS.lightGrey,
    marginVertical: 5,
  },
  links: {
    marginTop: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 18,
    marginLeft: 15,
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  searchIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 40,
    width: 35,
    height: 35,
  },
  text: {
    fontSize: 20,
    color: COLORS.black,
    fontWeight: 400,
  },
});
